import { useEffect, useState } from 'react';
import {
  GITHUB_USER,
  MAX_CARDS,
  curated,
  fallbackEarlier,
  hiddenRepos,
  repoLabels,
  type Project,
} from '../data/projects';

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

export interface Card extends Project {
  url?: string;
}

export interface EarlierItem {
  name: string;
  label: string;
  url: string;
}

export interface ProjectsData {
  cards: Card[];
  earlier: EarlierItem[];
  repoCount: number | null;
}

const CACHE_KEY = 'gh-repos-v1';
const CACHE_MS = 10 * 60 * 1000;
const repoUrl = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

const humanize = (name: string) => name.replace(/[-_]+/g, ' ').trim();

function readCache(): Repo[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { t, data } = JSON.parse(raw) as { t: number; data: Repo[] };
    return Date.now() - t < CACHE_MS ? data : null;
  } catch {
    return null;
  }
}

function writeCache(data: Repo[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data }));
  } catch {
    // Storage can be blocked; the feed still works without a cache.
  }
}

const byPushed = (a: Repo, b: Repo) => b.pushed_at.localeCompare(a.pushed_at);

export function buildProjects(repos: Repo[] | null): ProjectsData {
  const known = new Map((repos ?? []).map((r) => [r.name, r]));

  const cards: Card[] = curated.map((p) => ({
    ...p,
    url:
      p.private || !p.repo
        ? undefined
        : (known.get(p.repo)?.html_url ?? repoUrl(p.repo)),
  }));

  const curatedNames = new Set(curated.map((p) => p.repo));
  const auto = (repos ?? [])
    .filter((r) => r.topics?.includes('portfolio') && !curatedNames.has(r.name))
    .sort(byPushed)
    .map<Card>((r) => ({
      repo: r.name,
      tag: (r.language ?? 'PROJECT').toUpperCase(),
      title: humanize(r.name),
      description: r.description ?? '',
      stack: [r.language, ...(r.topics ?? []).filter((t) => t !== 'portfolio')]
        .filter(Boolean)
        .join(' · '),
      url: r.html_url,
    }));
  const shown = [...cards, ...auto].slice(0, MAX_CARDS);
  const shownNames = new Set(shown.map((c) => c.repo));

  const earlierRepos = repos
    ? repos
        .filter(
          (r) =>
            !r.fork &&
            !r.archived &&
            !hiddenRepos.includes(r.name) &&
            !shownNames.has(r.name),
        )
        .sort(byPushed)
        .map((r) => r.name)
    : fallbackEarlier;

  const earlier = earlierRepos.map((name) => ({
    name,
    label: repoLabels[name] ?? humanize(name),
    url: known.get(name)?.html_url ?? repoUrl(name),
  }));

  return { cards: shown, earlier, repoCount: repos ? repos.length : null };
}

/** Curated cards render immediately; live GitHub data replaces them on arrival. */
export function useProjects(): ProjectsData {
  const [data, setData] = useState<ProjectsData>(() =>
    buildProjects(readCache()),
  );

  useEffect(() => {
    if (readCache()) return;
    const ctrl = new AbortController();
    fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
      {
        signal: ctrl.signal,
        headers: { Accept: 'application/vnd.github+json' },
      },
    )
      .then((res) =>
        res.ok ? (res.json() as Promise<Repo[]>) : Promise.reject(res.status),
      )
      .then((repos) => {
        writeCache(repos);
        setData(buildProjects(repos));
      })
      .catch(() => {
        // Rate limit or offline: keep the curated fallback already on screen.
      });
    return () => ctrl.abort();
  }, []);

  return data;
}
