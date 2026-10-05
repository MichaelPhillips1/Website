export const profile = {
  name: 'Michael Phillips',
  title: 'Software Engineer',
  location: 'Arlington, VA',
  email: 'mikeapstella@gmail.com',
  phone: '617-991-5993',
  linkedin: 'https://www.linkedin.com/in/michael-phillips-71101b28b/',
  github: 'https://github.com/MichaelPhillips1',
  clearance: 'Active DoD Secret',
  summary:
    'I build software and data systems that turn ambiguous, high-friction workflows into reliable tools people can actually use.',
}

export const experience = [
  {
    company: 'Technomics, Inc.',
    role: 'Associate',
    location: 'Arlington, VA',
    dates: 'July 2026 — Present',
    summary:
      'Build client-facing software, structured data systems, and analytical workflows in support of DOE/NNSA stakeholders.',
    bullets: [
      'Partner with DOE/NNSA stakeholders to translate operational needs and ambiguous requirements into client-facing software, data structures, and analytical workflows.',
      'Design and build Microsoft Power Apps Canvas applications with responsive UI/UX, dynamic filtering, querying, planning, and reporting capabilities backed by Dataverse.',
      'Develop relational data models, ERDs, Dataverse schemas, and Microsoft 365 integrations to improve data accessibility, consistency, and workflow efficiency across client processes.',
      'Build Python-based data pipelines using OCR and document-processing libraries to extract, transform, and ingest structured data from complex source documents.',
    ],
    tags: ['Python', 'Dataverse', 'Power Apps', 'Data Modeling', 'Microsoft 365'],
  },
  {
    company: 'The Math Tree',
    role: 'Co-Founder, Chief Technology Officer',
    location: 'Blacksburg, VA',
    dates: 'May 2025 — Sept 2025',
    summary:
      'Owned software architecture, infrastructure, and technical operations for a full-stack web platform from concept through launch.',
    bullets: [
      'Solely developed and managed 5,000+ lines of front-end and back-end code using version control principles, taking the platform from concept to beyond MVP in under two months.',
      'Designed responsive UI/UX, scalable REST API endpoints, and relational database architecture, supporting rapid growth from 10 to 200+ users within two weeks.',
      'Administered Microsoft Azure cloud infrastructure including app services and database servers, maintaining scalable and secure deployment architecture.',
      'Led technical hiring, onboarding, and interviews while presenting to Virginia Tech staff and student organizations.',
    ],
    tags: ['ReactJS', 'REST APIs', 'SQL', 'Azure', 'Full-Stack'],
  },
  {
    company: 'Peraton',
    role: 'Software Engineering Co-Op',
    location: 'Blacksburg, VA',
    dates: 'May 2023 — December 2023',
    summary:
      'Delivered full-stack features in an Agile engineering environment using ReactJS, SQL, custom API endpoints, Git, and Jira.',
    bullets: [
      'Developed responsive ReactJS/CSS interfaces and scalable back-end solutions using SQL databases and custom API endpoints for robust data management and integration.',
      'Translated client requirements into reliable full-stack features across devices and deployment environments.',
      'Collaborated with cross-functional teams and clients in Agile development using Jira to track requirements, prioritize work, test changes, resolve defects, and support iterative releases.',
    ],
    tags: ['ReactJS', 'JavaScript', 'SQL', 'APIs', 'Git / Jira', 'Agile'],
  },
]

export const projects = [
  {
    eyebrow: 'Data + AI',
    title: 'Distributed Market Data and Signal Evaluation Platform',
    description:
      'A Python research platform for collecting, normalizing, storing, and evaluating multi-timeframe market data with statistical indicators, concurrent local-LLM workers, and historical validation.',
    bullets: [
      'Built data pipelines for 1H and custom 4H market series with normalization, session filtering, and structured SQLite persistence.',
      'Implemented Bollinger Band, RSI, volatility, distance-to-basis, multi-timeframe, and risk features for mean-reversion analysis.',
      'Orchestrated concurrent local LLM agents with structured outputs, probability aggregation, and repeatable prompt-driven evaluation.',
      'Built a historical test harness that measures predictions against future price behavior across configurable trading windows.',
    ],
    tags: ['Python', 'SQLite', 'Pandas', 'NumPy', 'LLMs / Ollama', 'Backtesting', 'Concurrency'],
  },
  {
    eyebrow: 'Full-Stack + ML Tooling',
    title: 'Image Annotation Tool',
    description:
      'A ReactJS image annotation platform for producing structured computer-vision training data.',
    bullets: [
      'Supported image uploads and unlimited bounding-box annotation.',
      'Exported labeled datasets as XML for downstream model training.',
      'Used Redux for centralized, scalable application state management.',
      'Designed the workflow around efficient production of custom labeled computer-vision datasets.',
    ],
    tags: ['ReactJS', 'Redux', 'JavaScript', 'XML', 'Computer Vision Tooling'],
  },
  {
    eyebrow: 'Computer Vision',
    title: 'ASL Hand Sign Recognition Model',
    description:
      'A transfer-learning and OpenCV model that recognizes and classifies American Sign Language hand-signed letters from video input.',
    bullets: [
      'Used custom labeled datasets produced with the annotation tool.',
      'Built preprocessing, augmentation, evaluation, and inference workflows.',
      'Integrated OpenCV video input with a trained transfer-learning model for live classification.',
      'Iterated on dataset quality and model evaluation to improve recognition consistency.',
    ],
    tags: ['Python', 'OpenCV', 'Transfer Learning', 'Machine Learning', 'Model Inference'],
  },
  {
    eyebrow: 'Desktop Software',
    title: 'Interactive Sorting Algorithm Visualizer',
    description:
      'A Python desktop application for visualizing sorting algorithms and their execution behavior in real time.',
    bullets: [
      'Built an interactive PyQt5/QSS interface for Bubble Sort and Quick Sort visualization.',
      'Added adjustable execution speed, array size, algorithm selection, and live comparison feedback.',
      'Designed custom visual states to make algorithm progress and element comparisons easy to follow.',
    ],
    tags: ['Python', 'PyQt5', 'QSS', 'Algorithms', 'Data Structures', 'Desktop UI'],
  },
  {
    eyebrow: 'Full-Stack Web',
    title: 'Real-Time Chat Application',
    description:
      'A full-stack messaging application with authentication, persistent relational storage, and asynchronous client/server interactions.',
    bullets: [
      'Built the application using HTML, CSS, JavaScript, Python/Flask, and SQL-backed user and message storage.',
      'Implemented account authentication and persistent chat history.',
      'Created asynchronous messaging flows between the browser client and Flask backend.',
    ],
    tags: ['Python', 'Flask', 'JavaScript', 'SQL', 'Authentication', 'Async Web'],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++', 'C#',
      'HTML5', 'CSS3', 'Bash', 'PowerShell', 'GDScript',
    ],
  },
  {
    title: 'Front-End Engineering',
    items: [
      'ReactJS', 'Redux', 'Responsive UI/UX', 'Component Architecture', 'State Management',
      'DOM / Browser APIs', 'HTML / CSS', 'QSS',
    ],
  },
  {
    title: 'Back-End & APIs',
    items: [
      'Flask', 'REST APIs', 'API Design', 'Client / Server Architecture', 'Authentication',
      'JWT', 'JSON', 'HTTP', 'Asynchronous Workflows',
    ],
  },
  {
    title: 'Data Engineering',
    items: [
      'ETL / ELT', 'Data Pipelines', 'Data Normalization', 'Structured Ingestion',
      'Relational Data Modeling', 'ERDs', 'Schema Design', 'Data Quality', 'Historical Data',
    ],
  },
  {
    title: 'Databases & Storage',
    items: [
      'SQL', 'SQLite', 'SQL Server', 'Dataverse', 'Relational Databases',
      'Primary / Foreign Keys', 'Normalization', 'Structured Storage',
    ],
  },
  {
    title: 'AI / Machine Learning',
    items: [
      'LLMs', 'Local LLM Inference', 'Ollama', 'Multi-Agent Evaluation', 'Prompt Engineering',
      'OpenCV', 'OCR', 'Transfer Learning', 'Model Training', 'Model Evaluation', 'Inference Pipelines',
    ],
  },
  {
    title: 'Python Data Stack',
    items: [
      'Pandas', 'NumPy', 'Matplotlib', 'Data Cleaning', 'Technical Indicators',
      'Backtesting', 'Statistical Analysis', 'Concurrent Workers', 'Automation',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Microsoft Azure', 'Azure App Services', 'Azure SQL', 'Git', 'GitHub', 'GitHub Actions',
      'CI/CD', 'Version Control', 'Deployment Workflows', 'Docker Fundamentals',
    ],
  },
  {
    title: 'Microsoft Platform',
    items: [
      'Power Apps Canvas', 'Power Fx', 'Dataverse', 'Microsoft 365', 'SharePoint',
      'Role-Based Workflows', 'Business Process Automation',
    ],
  },
  {
    title: 'Systems Engineering',
    items: [
      'POSIX Sockets', 'Multithreading', 'HTTP Range Requests', 'File Streaming',
      'MIME Handling', 'Linux / Shell', 'Path Validation', 'Networked Applications',
    ],
  },
  {
    title: 'Game Development',
    items: [
      'Godot 4', 'GDScript', 'Gameplay Systems', 'NPC AI', 'Vehicle Systems',
      'Physics / Collisions', 'Save Systems', 'Inventory Systems', 'Level Design', 'Blender Fundamentals',
    ],
  },
  {
    title: 'Engineering Practices',
    items: [
      'Full-Stack Development', 'Object-Oriented Programming', 'Agile / Scrum', 'Jira',
      'Testing', 'Debugging', 'Requirements Translation', 'Technical Documentation',
      'Rapid Prototyping', 'Iterative Development',
    ],
  },
]

export const education = {
  school: 'Virginia Polytechnic Institute and State University',
  shorthand: 'Virginia Tech',
  degree: 'Bachelor of Science in Computer Science',
  dates: 'August 2022 — May 2026',
  location: 'Blacksburg, VA',
}
