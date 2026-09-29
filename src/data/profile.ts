export const profile = {
  name: 'Kadhiravan Gopal',
  location: 'Chicago, IL',
  email: 'iitzkadhiravan@gmail.com',
  github: 'https://github.com/kadhiravang',
  linkedin: 'https://www.linkedin.com/in/kadhiravang',
  resume: 'Kadhiravan_Gopal_Resume.pdf',
  status: 'Graduating Dec 2026 · Open to full-time AI / ML roles',
  headline: ['I build AI systems that ', 'actually ship.'],
  intro:
    'AI Engineer and MS student at Illinois Tech. I take models from paper to product: diffusion transformers, agentic RAG, computer vision and full-stack apps, backed by two years of enterprise AI delivery.',
};

export const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume}`;

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 'MS AI', label: 'Illinois Tech, 2025–26' },
  { value: '2 yrs', label: 'Enterprise AI at LTIMindtree' },
  { value: '2', label: 'Papers reimplemented for coursework' },
];

export interface Callout {
  headline: string;
  title: string;
  detail: string;
}

export interface Entry {
  date: string;
  org: string;
  role: string;
  description: string;
  stack?: string;
  callouts?: Callout[];
}

export const timeline: Entry[] = [
  {
    date: 'Jan 2025 – Dec 2026',
    org: 'Illinois Institute of Technology',
    role: 'MS in Artificial Intelligence',
    description:
      'GPA 3.77/4.0. Coursework: Machine Learning, Deep Learning, NLP, Medical Informatics & AI, Computer Vision, Algorithms, Database Organization.',
  },
  {
    date: 'Oct 2025 – Present',
    org: 'Illinois Institute of Technology',
    role: 'Student Assistant, CPS Testing Project',
    description:
      'Rotate across admin, check-in and proctoring roles on the Chicago Public Schools testing collaboration. As admin, collect student and session data, enter it into the testing software and track it across multi-campus teams.',
  },
  {
    date: 'Jul 2022 – Jul 2024',
    org: 'LTIMindtree',
    role: 'Software Engineer, Generative AI Center of Excellence',
    description:
      'Worked on 8+ full-stack GenAI applications (Python backends, Angular UIs), responsible for development, debugging, deployment and live production support. Primary developer of a multi-agent property-insurance underwriting assistant, built from scratch with a small agile team. Presented the handwriting assistant and other apps at IgnAIte and internal demos.',
    stack:
      'Python · Flask · Angular · MongoDB · Qdrant · Docker · Azure · AWS ECS',
    callouts: [
      {
        headline: '1–1.5 months → minutes',
        title: 'Property insurance underwriting assistant',
        detail: 'Multi-agent · time per property',
      },
      {
        headline: '70% → 95%',
        title: 'RAG accuracy on internal test cases',
        detail: 'via LLM-based chunk re-ranking',
      },
    ],
  },
  {
    date: '2018 – Jun 2022',
    org: 'Panimalar Engineering College',
    role: 'B.E. in Computer Science and Engineering',
    description: 'Affiliated to Anna University · GPA 8.72/10',
  },
];

export const certifications = [
  'Oracle Database SQL Certified Associate',
  'AWS Partner Accreditation: Technical',
  'AWS Partner: Cloud Economics',
  'AWS Partner Accreditation: Sales (Business)',
  'Biomedical Research Investigators',
];

export interface SkillGroup {
  name: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    name: 'LLMs & Agentic AI',
    items: [
      'GPT-4o',
      'Claude',
      'Mistral',
      'Gemini',
      'Amazon Bedrock',
      'Azure OpenAI',
      'LangChain',
      'LlamaIndex',
      'LangGraph',
      'RAG',
      'LLM re-ranking',
      'Multi-agent orchestration',
      'Function calling',
      'LLM evaluation',
      'Prompt engineering',
    ],
  },
  {
    name: 'ML & Deep Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Transformers',
      'Diffusion models',
      'CNNs',
      'Computer Vision',
      'Reinforcement Learning',
      'OpenCV',
      'DeBERTa',
      'scispaCy',
      'medspaCy',
    ],
  },
  {
    name: 'Engineering & Cloud',
    items: [
      'Python',
      'Flask',
      'FastAPI',
      'REST APIs',
      'Angular',
      'React',
      'Kotlin',
      'Jetpack Compose',
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'Qdrant',
      'Neo4j (prototype)',
      'Oracle',
      'Azure',
      'AWS',
      'Docker',
      'CI/CD',
      'Git',
    ],
  },
];
