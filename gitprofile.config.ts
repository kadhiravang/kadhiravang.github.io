// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kadhiravang', // Your GitHub user name
  },
  /*
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/kadhiravang/kadhiravang.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/kadhiravang/portfolio, then set base to '/portfolio/'.
   */
  base: '/', // Adjusted base to match typical GitHub Pages deployment based on your previous config
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Switched to 'automatic' for broader display
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // Display top 6 projects
        exclude: {
          forks: true, // Hide forked projects to focus on original work
          projects: [], 
        },
      },
      // Removed the manual block since mode is set to 'automatic'
    },
    external: {
      header: 'Featured Projects',
      // Re-populated with your highly detailed, improved project list
      projects: [
        {
          title: 'PlantPal: AI-Driven Plant Health App 🌿',
          description:
            'An AI-driven houseplant recommender and health monitoring app built using PyTorch, Streamlit, and OpenCV. It analyzes plant images to assess health, diagnose issues, and recommend tailored care schedules.',
          imageUrl: '/plantpal.png',
          link: 'https://github.com/kadhiravang/PlantPal',
        },
        {
          title: 'Deep Learning-Enhanced CCTV System 🧠📹',
          description:
            'A smart surveillance enhancement system integrating facial recognition, number plate detection, animal/ball tracking, and event data logging, all built with OpenCV and deep learning.',
          imageUrl: 'cctv.png',
          link: 'https://github.com/kadhiravang/CCTV-ML-Enhancement',
        },
        {
          title: 'ViT-VGG16 Hybrid Architecture (PyTorch) 🔬',
          description:
            'A novel hybrid architecture combining Vision Transformer (ViT) and VGG16 for improved image classification accuracy and efficient feature extraction, implemented entirely in PyTorch.',
          imageUrl: 'vitvgg.png',
          link: 'https://github.com/kadhiravang/ViT-Hybrid-VGG16',
        },
        {
          title: 'RL-Trained Self-Parking Car (Unity ML-Agents) 🚗',
          description:
            'A reinforcement learning (RL) project built in Unity using the ML-Agents toolkit to train an autonomous self-parking car with obstacle detection and environment feedback.',
          imageUrl: 'selfparking.png',
          link: 'https://lnkd.in/g8jgqWDR',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio of Kadhiravan Gopal | AI Engineer', 
    description: 'AI Engineer and MS student at Illinois Tech. Specializing in Deep Learning, Computer Vision, and Reinforcement Learning to build intelligent systems. Ex-LTIMindtree developer experienced in deploying enterprise-grade ML solutions.', 
    imageURL: '',
  },
  social: {
    linkedin: 'kadhiravang',
    github: 'kadhiravang', // Already in github block, but good to keep here too
    website: 'https://kadhiravang.github.io/',
    email: 'kadhiravan.gopal@iit.edu',
    // Remaining social links are kept empty as per your original config
    x: '', // Your X (Twitter) handle if you have one
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '', 
    stackoverflow: '', 
    discord: '',
    telegram: '',
    phone: '',
  },
  resume: {
    fileUrl: '/Kadhiravan_Resume.pdf', // Your actual resume URL
  },
  skills: [
    'Python', 'Deep Learning', 'Computer Vision', 'PyTorch', 'TensorFlow', 
    'OpenCV', 'Streamlit', 'Reinforcement Learning', 'Vision Transformers',
    'YOLOv3', 'Docker', 'Git', 'SQL', 'React.js', 'Kotlin', 'Pandas', 'NumPy', 'Matplotlib',
  ],
  experiences: [
    {
      company: 'LTIMindtree',
      position: 'Software Engineer – AI & Automation',
      from: '2022',
      to: '2024', // Changed to '2024' as per your original config
      companyLink: 'https://www.ltimindtree.com/',
      description:
        'Drove AI and intelligent automation projects as part of the INS TAO GenAI COE team. Developed and deployed ML-based business solutions that [Consider adding a quantifiable result here]. Showcased innovations at the company\'s IgnAIte event.',
    },
    {
      company: 'Illinois Institute of Technology',
      position: 'Graduate Student – Artificial Intelligence',
      from: '2025',
      to: 'Present',
      companyLink: 'https://www.iit.edu/',
      description:
        'Focusing on advanced research and graduate coursework in Deep Learning, Computer Vision, Reinforcement Learning, and Large Language Models (LLMs) to build state-of-the-art intelligent systems.',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      body: 'Amazon Web Services',
      year: '2024', // Changed to year only for consistency
      link: '#',
    },
    {
      name: 'Deep Learning Specialization',
      body: 'Coursera – Andrew Ng',
      year: '2023', // Changed to year only for consistency
      link: '#',
    },
  ],
  educations: [
    {
      institution: 'Illinois Institute of Technology',
      degree: 'MS in Artificial Intelligence',
      from: '2025',
      to: '2027',
    },
    {
      institution: 'Anna University',
      degree: 'B.E. in Computer Science and Engineering',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    // Leave empty if you don't have any publications to list, or add them here:
    // {
    //   title: 'Your Publication Title',
    //   conferenceName: 'Conference Name',
    //   authors: 'Kadhiravan Gopal, Co-Author',
    //   link: 'https://example.com/publication',
    //   description: 'Brief description of the research and results.',
    // },
  ],
  blog: {
    source: 'dev', // medium | dev
    username: '', // Leave empty to hide blog section. Add your dev.to or medium username if you write!
    limit: 2,
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'nord', // Reverting to your preferred 'nord' theme
    disableSwitch: false,
    respectPrefersColorScheme: true, // Reverting to your preferred setting
    displayAvatarRing: true,
    themes: [
       // Your original themes for a more tailored list:
       'nord', 'light', 'dark', 'lofi', 'sunset', 'procyon', 'forest', 'business', 'luxury', 'winter',
    ],
  },

  // Your original detailed footer HTML
  footer: `
    <div style="text-align:center; margin-top: 1rem;">
      <p><strong>About Me:</strong><br />
      AI Engineer and Master’s student at Illinois Institute of Technology passionate about building intelligent systems that combine computer vision, deep learning, and real-world automation.<br />
      Previously at LTIMindtree, where I developed applied AI and automation solutions driving innovation in the enterprise space.</p>
      <br />
      <p>Built with 
        <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">
          GitProfile
        </a> 
        and ❤️ by <strong>Kadhiravan Gopal</strong>
      </p>
    </div>
  `,

  enablePWA: true,
};

export default CONFIG;