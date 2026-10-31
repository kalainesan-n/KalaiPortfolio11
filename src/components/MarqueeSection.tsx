import React, { useEffect, useRef, useState } from 'react';
import {
  ShieldCheck,
  Cpu,
  Database,
  ArrowRightLeft,
  QrCode,
  MapPin,
  Repeat,
  Radio,
  BookOpen,
  LineChart,
  GitBranch,
  Terminal,
  Activity,
  Layers,
  Zap,
  Server,
  Code2,
  Lock,
  Compass,
  Boxes,
  FileCheck,
} from 'lucide-react';

interface MarqueeTileData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  details: string[];
  gradient: string;
  borderColor: string;
}

const ROW_1_TILES: MarqueeTileData[] = [
  {
    id: 'm1',
    category: 'MULTI-AGENT AI',
    title: 'TriAgent Advisory System',
    subtitle: 'Analyst, Risk, & Trader specialized agent triad',
    icon: <Cpu className="text-purple-400" size={20} />,
    badge: 'OpenClaw',
    details: ['NLP News Sentiment', 'Autonomous Decisioning', 'Audit Trails'],
    gradient: 'from-[#191528] to-[#0d0b14]',
    borderColor: '#3c2b54',
  },
  {
    id: 'm2',
    category: 'AI SAFETY & POLICY',
    title: 'ArmorClaw Policy Guard',
    subtitle: 'Runtime trading constraints & intent defense',
    icon: <ShieldCheck className="text-emerald-400" size={20} />,
    badge: 'ArmorIQ',
    details: ['Prompt Injection Defense', 'GREEN/YELLOW/RED Risk', 'Max Drawdown'],
    gradient: 'from-[#10221c] to-[#09120e]',
    borderColor: '#1d4838',
  },
  {
    id: 'm3',
    category: 'DISTRIBUTED SYSTEMS',
    title: 'Offline Sync Conflict Engine',
    subtitle: 'Multi-device concurrent offline edit resolution',
    icon: <Database className="text-blue-400" size={20} />,
    badge: 'PostgreSQL',
    details: ['Optimistic Concurrency', 'Version Vectors', 'Idempotency Keys'],
    gradient: 'from-[#0e1c2e] to-[#070e17]',
    borderColor: '#1b395e',
  },
  {
    id: 'm4',
    category: 'CONCURRENCY CONTROL',
    title: 'SELECT FOR UPDATE Locks',
    subtitle: 'Row-level locking during transactional syncs',
    icon: <Lock className="text-cyan-400" size={20} />,
    badge: 'ACID Guarantee',
    details: ['Zero Phantom Reads', 'Pessimistic Safety', 'Deadlock Free'],
    gradient: 'from-[#0f2228] to-[#081216]',
    borderColor: '#1e4b59',
  },
  {
    id: 'm5',
    category: 'DATA INTEGRITY',
    title: '3-Way Field Level Merge',
    subtitle: 'Non-destructive independent field preservation',
    icon: <ArrowRightLeft className="text-amber-400" size={20} />,
    badge: 'Engine Core',
    details: ['Granular Diffing', 'Automated Synthesis', 'Rollback History'],
    gradient: 'from-[#251d12] to-[#120e09]',
    borderColor: '#4d3920',
  },
  {
    id: 'm6',
    category: 'API SPECIFICATION',
    title: 'Swagger / OpenAPI 3.0',
    subtitle: 'Interactive endpoints & automated test suites',
    icon: <FileCheck className="text-rose-400" size={20} />,
    badge: 'Render Cloud',
    details: ['Jest & Supertest 100%', 'Contract Testing', 'Live Documentation'],
    gradient: 'from-[#24131b] to-[#130a0e]',
    borderColor: '#4c2336',
  },
  {
    id: 'm7',
    category: 'WEB APPLICATIONS',
    title: 'QR Attendance System',
    subtitle: 'Dynamic rotating QR paired with GPS geofencing',
    icon: <QrCode className="text-emerald-400" size={20} />,
    badge: 'React + Node',
    details: ['Rotating Session Hashes', 'JWT Authentication', 'MongoDB Atlas'],
    gradient: 'from-[#11241a] to-[#08130e]',
    borderColor: '#1f4834',
  },
  {
    id: 'm8',
    category: 'GEOSPATIAL VERIFICATION',
    title: 'Haversine GPS Engine',
    subtitle: 'Accurate spherical distance verification',
    icon: <MapPin className="text-cyan-400" size={20} />,
    badge: 'd = 2R·arcsin(√h)',
    details: ['100m Geofence Perimeter', 'Anti-Spoofing Check', 'Coordinates Valid'],
    gradient: 'from-[#0c202a] to-[#061117]',
    borderColor: '#174054',
  },
  {
    id: 'm9',
    category: 'REAL-TIME NETWORKING',
    title: 'Socket.io Event Stream',
    subtitle: 'Live organizer dashboard attendance feed',
    icon: <Radio className="text-purple-400" size={20} />,
    badge: 'WebSockets',
    details: ['Instant Event Broadcasts', 'Live Headcount Ticker', 'CSV Export Ready'],
    gradient: 'from-[#1c142c] to-[#0d0916]',
    borderColor: '#39255c',
  },
  {
    id: 'm10',
    category: 'CAMPUS PLATFORMS',
    title: 'CampusBorrow Platform',
    subtitle: 'Peer-to-peer student equipment sharing system',
    icon: <BookOpen className="text-blue-400" size={20} />,
    badge: 'Next.js 16',
    details: ['React 19 App Router', 'Tailwind Design System', 'Student Verification'],
    gradient: 'from-[#111e30] to-[#09101a]',
    borderColor: '#203d63',
  },
  {
    id: 'm11',
    category: 'DATABASE SECURITY',
    title: 'PostgreSQL RLS Policies',
    subtitle: 'Multi-tenant database security at the row level',
    icon: <ShieldCheck className="text-teal-400" size={20} />,
    badge: 'Supabase',
    details: ['auth.uid() Verification', 'Zero Leakage', 'Atomic RPC Claim Locks'],
    gradient: 'from-[#0e2423] to-[#061211]',
    borderColor: '#1c4a47',
  },
];

const ROW_2_TILES: MarqueeTileData[] = [
  {
    id: 'm12',
    category: 'MACHINE LEARNING',
    title: 'Air Quality Forecasting',
    subtitle: 'Predicting 1h-ahead CO atmospheric levels',
    icon: <LineChart className="text-indigo-400" size={20} />,
    badge: 'Scikit-learn',
    details: ['Linear Regression', 'Pandas & NumPy', '10.7% MAE Improvement'],
    gradient: 'from-[#17162f] to-[#0b0a17]',
    borderColor: '#323063',
  },
  {
    id: 'm13',
    category: 'CROSS-VALIDATION',
    title: '5-Fold TimeSeriesSplit',
    subtitle: 'Strict chronological partitioning with zero leakage',
    icon: <Activity className="text-pink-400" size={20} />,
    badge: 'Zero Leakage',
    details: ['Chrono Validation', 'Expanding Window', 'Test Split Integrity'],
    gradient: 'from-[#281320] to-[#13080f]',
    borderColor: '#542341',
  },
  {
    id: 'm14',
    category: 'FEATURE ENGINEERING',
    title: 'Temporal Lag Transforms',
    subtitle: 'Lagged metrics, rolling averages, & cyclic hours',
    icon: <Layers className="text-amber-400" size={20} />,
    badge: 'sin/cos(hour)',
    details: ['t-1, t-2, t-24 Lags', 'Rolling 3h Means', 'Cyclic Encoding'],
    gradient: 'from-[#271d10] to-[#120d06]',
    borderColor: '#4d3a1c',
  },
  {
    id: 'm15',
    category: 'FINANCIAL INTEGRATION',
    title: 'Alpaca Paper Trading API',
    subtitle: 'Automated order execution with intent guards',
    icon: <Zap className="text-emerald-400" size={20} />,
    badge: 'Alpaca SDK',
    details: ['Deterministic Limits', 'Position Sizing', 'Audit Log Stamped'],
    gradient: 'from-[#0f221a] to-[#07120d]',
    borderColor: '#1d4834',
  },
  {
    id: 'm16',
    category: 'BACKEND ARCHITECTURE',
    title: 'Node.js & Express REST',
    subtitle: 'Scalable service layer with modular controllers',
    icon: <Server className="text-cyan-400" size={20} />,
    badge: 'Express.js',
    details: ['Async Middleware', 'CORS & Rate Limiting', 'Structured Logging'],
    gradient: 'from-[#0b2029] to-[#051116]',
    borderColor: '#164357',
  },
  {
    id: 'm17',
    category: 'DEV ENVIRONMENT',
    title: 'Developer Terminal & Git',
    subtitle: 'Feature branch hygiene, PR workflows, & CI',
    icon: <Terminal className="text-purple-400" size={20} />,
    badge: 'Git / GitHub',
    details: ['Trunk-based Workflows', 'Semantic Versioning', 'Automated CI Checks'],
    gradient: 'from-[#1e162f] to-[#0d0915]',
    borderColor: '#3c2a61',
  },
  {
    id: 'm18',
    category: 'STATE & REPO',
    title: 'TypeScript & React 19',
    subtitle: 'Type-safe component hierarchies & custom hooks',
    icon: <Code2 className="text-blue-400" size={20} />,
    badge: 'Type-Safe',
    details: ['Strict Compiler Flags', 'Modern Hooks', 'Tailwind CSS Systems'],
    gradient: 'from-[#0d1e33] to-[#060e18]',
    borderColor: '#1a3c63',
  },
  {
    id: 'm19',
    category: 'CONTAINERIZATION',
    title: 'Docker & Microservices',
    subtitle: 'Reproducible builds and portable microservices',
    icon: <Boxes className="text-teal-400" size={20} />,
    badge: 'Docker',
    details: ['Multi-stage Builds', 'Docker Compose', 'Lightweight Alpine Base'],
    gradient: 'from-[#0d2325] to-[#061213]',
    borderColor: '#19494e',
  },
  {
    id: 'm20',
    category: 'CLOUD DATABASES',
    title: 'MongoDB Atlas & Mongoose',
    subtitle: 'Document modeling with schema validation & indexing',
    icon: <Database className="text-emerald-400" size={20} />,
    badge: 'Atlas Cloud',
    details: ['Compound Indexing', 'Schema Aggregations', 'Mongoose Hooks'],
    gradient: 'from-[#0e2118] to-[#07110c]',
    borderColor: '#1c4732',
  },
  {
    id: 'm21',
    category: 'HACKATHON SUCCESS',
    title: 'OSSome Hacks 3.0',
    subtitle: 'Autonomous trading policy agent hackathon project',
    icon: <Compass className="text-amber-400" size={20} />,
    badge: 'Award Winner',
    details: ['OpenClaw Runtime', 'Multi-Agent Safety', 'Live Paper Trades'],
    gradient: 'from-[#291e11] to-[#140e07]',
    borderColor: '#523c1f',
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      // Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Row 1: first 11 images tripled
  const row1Tripled = [...ROW_1_TILES, ...ROW_1_TILES, ...ROW_1_TILES];
  // Row 2: remaining 10 images tripled
  const row2Tripled = [...ROW_2_TILES, ...ROW_2_TILES, ...ROW_2_TILES];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      {/* Subtle section label */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#717E91]">
          Engineered Systems &amp; Visual Telemetry
        </span>
        <span className="text-xs font-mono text-[#525E70]">
          21 Interactive Architectural Modules
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* ROW 1: Moves RIGHT on scroll (translateX(offset - 200)) */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Tripled.map((tile, idx) => (
            <div
              key={`r1-${tile.id}-${idx}`}
              className={`w-[320px] sm:w-[420px] h-[200px] sm:h-[270px] shrink-0 rounded-2xl bg-gradient-to-br ${tile.gradient} border p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xl`}
              style={{ borderColor: tile.borderColor }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#8E9BAE] block">
                    {tile.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    {tile.title}
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10 shrink-0">
                  {tile.icon}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A5B4C7] font-light leading-relaxed">
                {tile.subtitle}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                  {tile.badge}
                </span>
                <span className="text-[#8E9BAE] truncate max-w-[180px]">
                  {tile.details[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Moves LEFT on scroll (translateX(-(offset - 200))) */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Tripled.map((tile, idx) => (
            <div
              key={`r2-${tile.id}-${idx}`}
              className={`w-[320px] sm:w-[420px] h-[200px] sm:h-[270px] shrink-0 rounded-2xl bg-gradient-to-br ${tile.gradient} border p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xl`}
              style={{ borderColor: tile.borderColor }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#8E9BAE] block">
                    {tile.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    {tile.title}
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10 shrink-0">
                  {tile.icon}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A5B4C7] font-light leading-relaxed">
                {tile.subtitle}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
                  {tile.badge}
                </span>
                <span className="text-[#8E9BAE] truncate max-w-[180px]">
                  {tile.details[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
