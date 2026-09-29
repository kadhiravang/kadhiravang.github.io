import { useCallback, useState } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

const current = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';

/** The initial theme is set by an inline script in index.html to avoid a flash. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(current);

  const toggle = useCallback(() => {
    const next: Theme = current() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked; the choice just won't persist.
    }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
