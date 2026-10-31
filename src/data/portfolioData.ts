export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  apiDocsUrl?: string;
  demoVideoUrl?: string;
  tags: string[];
  visualType: 'multi-agent' | 'sync-engine' | 'qr-attendance' | 'campus-borrow' | 'air-quality';
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'bullwarden',
    number: '01',
    name: 'BullWarden / TriAgent Advisory System',
    category: 'MULTI-AGENT AI | FINANCIAL TECHNOLOGY',
    description:
      'An autonomous multi-agent AI trading system designed to enforce user-defined trading intent through runtime policy controls. The system uses three specialised agents: Analyst, Risk, and Trader. The Analyst processes financial news and generates recommendations, the Risk Agent validates decisions using policy enforcement, and the Trader executes only approved paper trades.',
    highlights: [
      'Multi-agent architecture using OpenClaw',
      'ArmorClaw / ArmorIQ runtime policy enforcement',
      'LLM-based financial news sentiment analysis',
      'GREEN, YELLOW, and RED risk classification',
      'Alpaca paper trading API integration',
      'Prompt injection defence mechanisms',
      'Structured audit logging for trade compliance',
    ],
    githubUrl: 'https://github.com/kalainesan-n/sentinel-claw-v1',
    tags: ['OpenClaw', 'ArmorClaw', 'LLM Agents', 'Python', 'Alpaca API', 'Policy Guards'],
    visualType: 'multi-agent',
  },
  {
    id: 'offline-sync',
    number: '02',
    name: 'Offline Sync Conflict Resolution Engine',
    category: 'BACKEND ENGINEERING | DISTRIBUTED SYSTEMS',
    description:
      'A backend synchronization engine that handles conflicting edits when multiple devices modify the same data offline. It detects conflicting changes using version tracking, merges independent field-level updates, and protects data consistency using PostgreSQL transactions and idempotent request handling.',
    highlights: [
      'Node.js and Express.js backend architecture',
      'PostgreSQL with row-level locks (SELECT FOR UPDATE)',
      'Optimistic concurrency control with version vectors',
      'Field-level conflict detection and 3-way merging',
      'Idempotency records to prevent replay anomalies',
      'Audit version history and point-in-time restoration',
      'Interactive Swagger / OpenAPI documentation',
      'Automated integration tests with Jest and Supertest',
    ],
    githubUrl: 'https://github.com/kalainesan-n/offline-sync-conflict',
    liveUrl: 'https://offline-sync-conflict-1.onrender.com',
    apiDocsUrl: 'https://offline-sync-conflict-1.onrender.com/api-docs',
    tags: ['Node.js', 'PostgreSQL', 'Concurrency', 'Jest', 'Swagger', 'Render'],
    visualType: 'sync-engine',
  },
  {
    id: 'qr-attendance',
    number: '03',
    name: 'QR-Based Geo-Tagged Attendance System',
    category: 'FULL-STACK DEVELOPMENT | WEB APPLICATION',
    description:
      'A full-stack attendance management system that combines QR code scanning with GPS-based geofencing to verify whether students are physically present at an event location. Organisers can create events, generate QR codes, monitor attendance in real time, and export attendance records.',
    highlights: [
      'React and Vite frontend with responsive camera scanner',
      'Node.js and Express.js backend with MongoDB Atlas & Mongoose',
      'JWT authentication and bcrypt password hashing',
      'Dynamic single-use QR generation and instant scanning',
      'GPS geofencing verification using Haversine spherical formula',
      'Socket.io real-time live attendance feed for coordinators',
      'One-click CSV attendance export and audit records',
      'Role-based access control and strict event ownership verification',
    ],
    githubUrl: 'https://github.com/kalainesan-n/QR-Attendance-System',
    liveUrl: 'https://qr-attendance-system-zeta-two.vercel.app/login',
    demoVideoUrl: 'https://drive.google.com/drive/folders/1PP4cnZeV8WVW51cKnekPF-8j51jJ6bHo',
    tags: ['React', 'Node.js', 'MongoDB Atlas', 'Socket.io', 'Geofencing', 'JWT'],
    visualType: 'qr-attendance',
  },
  {
    id: 'campus-borrow',
    number: '04',
    name: 'CampusBorrow',
    category: 'FULL-STACK DEVELOPMENT | NEXT.JS',
    description:
      'A campus-focused peer-to-peer borrowing platform that allows students to share items such as textbooks, calculators, chargers, and academic equipment. Students can post items they need or offer, discover available posts, claim items, and manage the borrowing lifecycle through a real-time interface.',
    highlights: [
      'Next.js 16 and React 19 modern architecture',
      'TypeScript and Tailwind CSS design system',
      'Supabase Authentication with student verification',
      'PostgreSQL with strict Row Level Security (RLS) policies',
      'Atomic PostgreSQL RPC with row-locking to eliminate claim race-conditions',
      'Supabase Realtime subscriptions for instantaneous claim updates',
      'Supabase Storage bucket for verified item images',
      'Instant search and multi-category filtering',
    ],
    githubUrl: 'https://github.com/kalainesan-n/CampusBorrow',
    liveUrl: 'https://campus-borrow-three.vercel.app/',
    demoVideoUrl: 'https://drive.google.com/drive/folders/1kv9ZqR_Ggz4g-bDryl835tU_ZL472k-p?usp=sharing',
    tags: ['Next.js 16', 'React 19', 'Supabase', 'PostgreSQL RLS', 'Realtime', 'Tailwind CSS'],
    visualType: 'campus-borrow',
  },
  {
    id: 'air-quality',
    number: '05',
    name: 'Air Quality Forecasting',
    category: 'MACHINE LEARNING | DATA SCIENCE',
    description:
      'A machine learning forecasting pipeline that predicts carbon monoxide concentration one hour ahead using historical air quality measurements and engineered temporal features. The project uses Linear Regression and chronological validation, comparing predictions against a naive persistence baseline.',
    highlights: [
      'Python data engineering with Pandas and NumPy',
      'Scikit-learn Linear Regression model optimization',
      'Engineered lagged and rolling-window statistical features',
      'Cyclic time encoding (sine/cosine transformations)',
      'Rigorous 5-fold TimeSeriesSplit chronological cross-validation',
      'Zero temporal data leakage between train and test splits',
      'Actual Metrics: R² = 0.7377, RMSE = 0.6939, MAE = 0.4652',
      '10.7% MAE improvement over naive persistence baseline',
    ],
    githubUrl: 'https://github.com/kalainesan-n/AIML-Recruitment-2026-Kalainesan',
    tags: ['Python', 'Scikit-learn', 'TimeSeriesSplit', 'Pandas', 'Linear Regression', 'MAE 0.4652'],
    visualType: 'air-quality',
  },
];

export interface ExpertiseItem {
  number: string;
  name: string;
  skills: string;
  description: string;
}

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    number: '01',
    name: 'Programming',
    skills: 'Python, JavaScript, TypeScript, Java, SQL',
    description:
      'Core foundation across multi-paradigm languages. Writing typed, maintainable, and idiomatic code optimized for distributed backend services and data modeling.',
  },
  {
    number: '02',
    name: 'Backend Engineering',
    skills: 'Node.js, Express.js, REST APIs, Socket.io, PostgreSQL, MongoDB',
    description:
      'Designing robust backend architectures, handling ACID transactions, row-level locking, event-driven WebSockets, schema migrations, and RESTful API endpoints.',
  },
  {
    number: '03',
    name: 'Frontend Development',
    skills: 'React, Next.js, TypeScript, Tailwind CSS',
    description:
      'Building performant, accessible, and reactive user interfaces with modern React, Next.js App Router, state management, and responsive styling systems.',
  },
  {
    number: '04',
    name: 'AI & Machine Learning',
    skills: 'LLM Agents, Multi-Agent Systems, Prompt Engineering, Scikit-learn, Pandas, NumPy',
    description:
      'Developing autonomous multi-agent pipelines with runtime safety guards, feature engineering, and statistical forecasting models with strict cross-validation.',
  },
  {
    number: '05',
    name: 'Tools & Infrastructure',
    skills: 'Git, GitHub, Docker, Supabase, MongoDB Atlas, Vercel, Render',
    description:
      'Containerization, version control workflows, database provisioning, serverless deployment, continuous delivery pipelines, and cloud hosting infrastructure.',
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  timeline: string;
  location: string;
  details: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech — Computer Science and Engineering',
    timeline: 'Expected Graduation: 2029',
    location: 'Kattankulathur, Chennai, India',
    details: 'Focusing on distributed systems, algorithms, backend architecture, and applied machine learning.',
  },
  {
    institution: 'GEMS Our Own High School',
    degree: 'Primary & Secondary Schooling',
    timeline: '2013 – 2023',
    location: "Al Warqa'a, Dubai, UAE",
    details: 'Developed early passion for computer science, algorithmic logic, and engineering foundations.',
  },
];

export interface TechnicalActivity {
  organization: string;
  project: string;
  description: string;
  tag: string;
}

export const TECHNICAL_ACTIVITIES: TechnicalActivity[] = [
  {
    organization: 'OSSome Hacks 3.0',
    project: 'TriAgent Advisory System',
    description: 'Autonomous multi-agent financial advisory framework enforcing ArmorClaw runtime guardrails.',
    tag: 'Hackathon Project',
  },
  {
    organization: 'GDG on Campus SRM',
    project: 'Offline Sync Conflict Engine',
    description: 'Backend synchronization engine with optimistic concurrency control and PostgreSQL row locks.',
    tag: 'Technical Recruitment Project',
  },
  {
    organization: 'NSCC Technical Club',
    project: 'QR Attendance System',
    description: 'Dynamic QR attendance verification paired with GPS geofencing and real-time Socket.io feed.',
    tag: 'Club Recruitment Project',
  },
  {
    organization: 'AI/ML Club',
    project: 'Air Quality Forecasting',
    description: 'Time-series predictive regression pipeline comparing against persistence baselines.',
    tag: 'Club Recruitment Project',
  },
];
