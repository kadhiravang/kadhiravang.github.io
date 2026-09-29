export const GITHUB_USER = 'kadhiravang';

export interface Project {
  /** GitHub repo name. Omit for projects that have no public repo. */
  repo?: string;
  tag: string;
  title: string;
  description: string;
  /** Key result. The card hides this line when it is empty. */
  metric?: string;
  stack: string;
  /** Shown as a "Private" badge instead of a link. */
  private?: boolean;
}

/**
 * Hand-written cards, in display order. Live GitHub data supplies the link.
 * To feature a new repo automatically, add the GitHub topic "portfolio" to it;
 * add an entry here only when you want a custom blurb or a key result.
 */
export const curated: Project[] = [
  {
    repo: 'agentic-rag-bot',
    tag: 'AGENTIC AI · RAG',
    title: 'Agentic RAG Bot',
    description:
      'Grounded Q&A over your own PDFs. A LangGraph agent rewrites, retrieves, grades and retries, and every claim is cited to document, speaker, timestamp and page.',
    metric: 'Says “not covered” instead of guessing',
    stack: 'LangGraph · FastAPI · Qdrant · FastEmbed · React',
  },
  {
    repo: 'FitnessKitchen',
    tag: 'MOBILE · LLM TOOLS',
    title: 'FitnessKitchen',
    description:
      'Native Android calorie tracker with a chat assistant. Gemini function-calling grounds each meal in USDA nutrition data, with English and Tamil voice input.',
    metric: '~25 South Indian dishes seeded',
    stack: 'Kotlin · Jetpack Compose · Room · Gemini · USDA API',
  },
  {
    repo: 'Mini-DIT',
    tag: 'GENERATIVE AI · RESEARCH',
    title: 'Mini-DiT',
    description:
      'Coursework reimplementation of the Diffusion Transformer paper (ICCV 2023) in PyTorch, with five progressive experiments across MNIST, BDD100K and CIFAR-10.',
    metric: 'All 10 MNIST classes generated cleanly',
    stack: 'PyTorch · DDIM · Classifier-free guidance · Latent diffusion',
  },
  {
    repo: 'Mini-CLIP',
    tag: 'MULTIMODAL · RESEARCH',
    title: 'Mini-CLIP',
    description:
      'Coursework reproduction of OpenAI’s CLIP: dual-encoder contrastive training with zero-shot classification and t-SNE and attention interpretability.',
    metric: '~72% top-1 on mini-scale ImageNet',
    stack: 'PyTorch · Contrastive learning · COCO',
  },
  {
    repo: 'Chicago-Neighborhood-Change-Prediction',
    tag: 'DATA SCIENCE · GEOSPATIAL',
    title: 'Chicago Neighborhood Change',
    description:
      'Predicts block-group socioeconomic change across Chicago from Census data, validated with spatial autocorrelation and community detection.',
    metric: '~78% model accuracy',
    stack: 'R · Random Forest · Moran’s I · Louvain',
  },
  {
    tag: 'LLM EVALUATION · NLP',
    title: 'HaloCheck',
    description:
      'Evaluation harness that scores the factual fidelity of LLM-generated clinical summaries, with entity extraction, negation detection, severity-weighted scoring and automated regression tracking.',
    metric: 'Beat the HHEM baseline: F1 0.64, recall 0.83',
    stack: 'DeBERTa NLI · scispaCy · medspaCy · NegEx',
    private: true,
  },
];

/** Repos that never appear in "Earlier work" (this site, empty coursework). */
export const hiddenRepos = [
  'kadhiravang.github.io',
  'kadhiravangopal.github.io',
  'Coursera-course',
];

/** Nicer names for the "Earlier work" line. Anything missing is humanized. */
export const repoLabels: Record<string, string> = {
  'Enhanced-CCTV-system': 'Enhanced CCTV with YOLOv3',
  SelfDriving: 'Self-parking car (Unity ML-Agents RL)',
  'RealEstate-DB-App': 'Real Estate DB app',
  'Travelling-Salesman-Problem': 'Travelling Salesman (SA & GA)',
  PlantPal: 'PlantPal (24-hour hackathon)',
};

/** Shown when the GitHub API cannot be reached. */
export const fallbackEarlier = [
  'Enhanced-CCTV-system',
  'SelfDriving',
  'RealEstate-DB-App',
  'Travelling-Salesman-Problem',
  'PlantPal',
];

export const MAX_CARDS = 9;
