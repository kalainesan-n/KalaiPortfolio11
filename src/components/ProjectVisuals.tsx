import React from 'react';
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
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface VisualProps {
  project: ProjectItem;
}

export const ProjectVisuals: React.FC<VisualProps> = ({ project }) => {
  switch (project.visualType) {
    case 'multi-agent':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          {/* Left Column (40%): 2 stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Left Top Card */}
            <div className="h-[180px] sm:h-[200px] md:h-[220px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#161618] to-[#0d0d0f] border border-[#2b2f3a] p-5 flex flex-col justify-between overflow-hidden relative group">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    ArmorClaw / ArmorIQ
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  POLICY ENFORCED
                </span>
              </div>

              <div className="z-10 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-[#8E9BAE]">
                  <span>Runtime Policy:</span>
                  <span className="text-white">IntentGuard-v1</span>
                </div>
                <div className="flex justify-between text-[#8E9BAE]">
                  <span>Risk Classification:</span>
                  <span className="text-emerald-400 font-bold">GREEN (APPROVED)</span>
                </div>
                <div className="flex justify-between text-[#8E9BAE]">
                  <span>Execution Target:</span>
                  <span className="text-amber-300">Alpaca Paper API</span>
                </div>
              </div>

              <div className="z-10 flex items-center justify-between text-[11px] text-[#717E91] border-t border-[#232733] pt-2">
                <span>Prompt Injection Guard: ACTIVE</span>
                <span>Latency: 28ms</span>
              </div>
            </div>

            {/* Left Bottom Card */}
            <div className="h-[210px] sm:h-[250px] md:h-[280px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#121318] to-[#0a0b0e] border border-[#2b2f3a] p-5 flex flex-col justify-between overflow-hidden relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <Cpu size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    TriAgent Architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#717E91]">OpenClaw Engine</span>
              </div>

              {/* 3 Agents Pipeline */}
              <div className="space-y-2 py-1">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#191b24] border border-[#262a38]">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                    01
                  </span>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-white">Analyst Agent</div>
                    <div className="text-[10px] text-[#8E9BAE]">NLP News Sentiment &amp; Signals</div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">+0.84 Bullish</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#191b24] border border-[#262a38]">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-bold">
                    02
                  </span>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-white">Risk Agent</div>
                    <div className="text-[10px] text-[#8E9BAE]">Max Drawdown &amp; Policy Verify</div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Pass: Low Vol</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#191b24] border border-[#262a38]">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                    03
                  </span>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-white">Trader Agent</div>
                    <div className="text-[10px] text-[#8E9BAE]">Automated Order Execution</div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300">Fill Limit</span>
                </div>
              </div>

              <div className="text-[11px] text-[#8E9BAE] flex items-center justify-between">
                <span>Deterministic Intent</span>
                <span className="font-mono text-white">100% Policy Bound</span>
              </div>
            </div>
          </div>

          {/* Right Tall Card (60%) */}
          <div className="lg:col-span-7 h-[400px] sm:h-[460px] md:h-[516px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#111218] via-[#0d0e12] to-[#070709] border border-[#2b2f3a] p-6 flex flex-col justify-between overflow-hidden relative">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#232733]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold tracking-wide text-white">
                    BullWarden Execution Console
                  </span>
                </div>
                <span className="text-xs font-mono text-[#8E9BAE]">OSSome Hacks 3.0</span>
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-[#08090c] border border-[#1e222d] font-mono text-xs text-[#a3b3c9] space-y-2">
                <div className="text-[#64748b]">// System initialization &amp; intent guard</div>
                <div>[2026-10-31 09:14:02] <span className="text-cyan-400">INFO</span> OpenClaw kernel online</div>
                <div>[2026-10-31 09:14:03] <span className="text-cyan-400">INFO</span> Loading sentiment feeds: Bloomberg, SEC 10-Q</div>
                <div>[2026-10-31 09:14:05] <span className="text-emerald-400">ANALYST</span> Signal generated: LONG QQQ (conf: 0.91)</div>
                <div>[2026-10-31 09:14:06] <span className="text-amber-400">RISK</span> Evaluating ArmorClaw boundaries...</div>
                <div className="pl-4 text-emerald-300">✓ Max allocation &lt;= 5.0% NAV</div>
                <div className="pl-4 text-emerald-300">✓ Stop-loss boundary pinned at 1.8%</div>
                <div>[2026-10-31 09:14:07] <span className="text-emerald-400">TRADER</span> Executing paper order via Alpaca API</div>
                <div className="text-purple-300 font-bold">&gt;&gt; ORDER ID #BK-78923: 15 shares @ $482.10 FILLED</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Risk Model</div>
                <div className="text-sm font-bold text-white mt-0.5">Triple-Agent</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Safety Defense</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">ArmorIQ</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Execution API</div>
                <div className="text-sm font-bold text-cyan-400 mt-0.5">Alpaca Paper</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'sync-engine':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-[180px] sm:h-[200px] md:h-[220px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#161618] to-[#0d0d0f] border border-[#2b2f3a] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                    <Database size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    PostgreSQL Concurrency
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  ACID LOCKED
                </span>
              </div>

              <div className="font-mono text-xs text-[#8E9BAE] space-y-1">
                <div className="text-emerald-400">BEGIN TRANSACTION;</div>
                <div className="pl-3 text-white">SELECT * FROM entity WHERE id = $1 FOR UPDATE;</div>
                <div className="pl-3 text-[#a3b3c9]">-- Compare version vector v3 with client v2</div>
                <div className="text-emerald-400">COMMIT;</div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#717E91] border-t border-[#232733] pt-2">
                <span>Idempotency Key: IDEM-90241</span>
                <span>Rollback Proof</span>
              </div>
            </div>

            <div className="h-[210px] sm:h-[250px] md:h-[280px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#121318] to-[#0a0b0e] border border-[#2b2f3a] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <ArrowRightLeft size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    Field-Level Resolution
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8E9BAE]">3-Way Merge</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#181a24] border border-[#272d3d]">
                  <div className="text-[10px] text-amber-400 font-bold">Device A (Offline)</div>
                  <div className="text-white mt-1">title: "Project Alpha"</div>
                  <div className="text-[10px] text-[#717E91]">status: unchanged</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#181a24] border border-[#272d3d]">
                  <div className="text-[10px] text-cyan-400 font-bold">Device B (Offline)</div>
                  <div className="text-[10px] text-[#717E91]">title: unchanged</div>
                  <div className="text-white mt-1">status: "DEPLOYED"</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#111822] border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-400 font-bold block">Engine Output:</span>
                  <span className="text-xs text-white font-mono">Clean Merged: title + status</span>
                </div>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">
                  0 CONFLICT
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[400px] sm:h-[460px] md:h-[516px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#111218] via-[#0d0e12] to-[#070709] border border-[#2b2f3a] p-6 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#232733]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-semibold tracking-wide text-white">
                    Swagger / OpenAPI Live Specification
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Render Deployed
                </span>
              </div>

              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#14161f] border border-[#232838] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      POST
                    </span>
                    <span className="text-white">/api/v1/sync/push</span>
                  </div>
                  <span className="text-[11px] text-[#717E91]">Push local changes</span>
                </div>

                <div className="p-3 rounded-xl bg-[#14161f] border border-[#232838] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                      GET
                    </span>
                    <span className="text-white">/api/v1/sync/pull</span>
                  </div>
                  <span className="text-[11px] text-[#717E91]">Version vector diff</span>
                </div>

                <div className="p-3 rounded-xl bg-[#14161f] border border-[#232838] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                      POST
                    </span>
                    <span className="text-white">/api/v1/conflicts/resolve</span>
                  </div>
                  <span className="text-[11px] text-[#717E91]">Field-level merge</span>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-2xl bg-[#090b10] border border-[#1e2333] font-mono text-xs text-[#8E9BAE]">
                <div className="flex justify-between text-white font-bold mb-1">
                  <span>Test Coverage (Jest &amp; Supertest)</span>
                  <span className="text-emerald-400">100% Passing</span>
                </div>
                <div>✓ Handles simultaneous 50 concurrent transactions</div>
                <div>✓ Zero phantom read anomalies detected</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Database</div>
                <div className="text-sm font-bold text-white mt-0.5">PostgreSQL</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Testing</div>
                <div className="text-sm font-bold text-cyan-400 mt-0.5">Jest + Supertest</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Docs</div>
                <div className="text-sm font-bold text-purple-400 mt-0.5">OpenAPI 3.0</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'qr-attendance':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-[180px] sm:h-[200px] md:h-[220px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#161618] to-[#0d0d0f] border border-[#2b2f3a] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
                    <MapPin size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    GPS Haversine Geofence
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  IN BOUNDS
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-[#8E9BAE]">
                  <span>Formula:</span>
                  <span className="text-white">2R · arcsin(√h)</span>
                </div>
                <div className="flex justify-between text-[#8E9BAE]">
                  <span>Event Perimeter:</span>
                  <span className="text-white">100m radius</span>
                </div>
                <div className="flex justify-between text-[#8E9BAE]">
                  <span>Student Offset:</span>
                  <span className="text-emerald-400 font-bold">34.2m (Verified)</span>
                </div>
              </div>

              <div className="text-[11px] text-[#717E91] border-t border-[#232733] pt-2 flex justify-between">
                <span>Location Spoofing Guard: ACTIVE</span>
                <span className="text-emerald-400 font-mono">PASSED</span>
              </div>
            </div>

            <div className="h-[210px] sm:h-[250px] md:h-[280px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#121318] to-[#0a0b0e] border border-[#2b2f3a] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <QrCode size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    Dynamic QR Validation
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400">Rotating Hash</span>
              </div>

              <div className="flex items-center gap-4 py-2">
                <div className="w-16 h-16 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-neutral-900 rounded flex items-center justify-center text-white">
                    <QrCode size={36} />
                  </div>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  <div className="text-white font-semibold">JWT Session Token</div>
                  <div className="text-[11px] text-[#8E9BAE]">Exp: 45s remaining</div>
                  <div className="text-[11px] text-emerald-400">Single-use token verification</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#8E9BAE] border-t border-[#232733] pt-2">
                <span>Role: Student</span>
                <span className="font-mono text-white">Event: Tech Symposium</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[400px] sm:h-[460px] md:h-[516px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#111218] via-[#0d0e12] to-[#070709] border border-[#2b2f3a] p-6 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#232733]">
                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Radio size={16} className="animate-pulse" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-white">
                    Live Coordinator Attendance Stream
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400">Socket.io Connected</span>
              </div>

              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#14161f] border border-[#232838] flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold">RA2411003010142</span>
                    <span className="text-[11px] text-[#8E9BAE] block">Geofence: 21m · Device: Verified</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    JUST NOW
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#14161f] border border-[#232838] flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold">RA2411003010198</span>
                    <span className="text-[11px] text-[#8E9BAE] block">Geofence: 48m · Device: Verified</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    42s AGO
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#14161f] border border-[#232838] flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold">RA2411003010214</span>
                    <span className="text-[11px] text-[#8E9BAE] block">Geofence: 65m · Device: Verified</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    2m AGO
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-[#090b10] border border-[#1e2333] flex items-center justify-between text-xs">
                <span className="text-[#8E9BAE]">Real-time Headcount: <strong className="text-white">184 Verified</strong></span>
                <span className="text-cyan-400 font-mono">1-Click CSV Export Ready</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Stack</div>
                <div className="text-sm font-bold text-white mt-0.5">React + Express</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Storage</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">MongoDB Atlas</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Security</div>
                <div className="text-sm font-bold text-purple-400 mt-0.5">Haversine + JWT</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'campus-borrow':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-[180px] sm:h-[200px] md:h-[220px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#161618] to-[#0d0d0f] border border-[#2b2f3a] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    Supabase PostgreSQL RLS
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  ROW LEVEL SECURED
                </span>
              </div>

              <div className="font-mono text-xs text-[#8E9BAE] space-y-1">
                <div className="text-cyan-400">CREATE POLICY "borrower_can_update_active"</div>
                <div className="pl-3 text-white">ON claims FOR UPDATE</div>
                <div className="pl-3 text-white">USING (auth.uid() = claimer_id);</div>
              </div>

              <div className="text-[11px] text-[#717E91] border-t border-[#232733] pt-2 flex justify-between">
                <span>Multi-tenant Isolation</span>
                <span className="text-emerald-400 font-mono">VERIFIED</span>
              </div>
            </div>

            <div className="h-[210px] sm:h-[250px] md:h-[280px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#121318] to-[#0a0b0e] border border-[#2b2f3a] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                    <Repeat size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    Atomic Claim RPC
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8E9BAE]">Race Condition Lock</span>
              </div>

              <div className="p-3 rounded-xl bg-[#181a24] border border-[#272d3d] font-mono text-xs text-[#a3b3c9]">
                <div className="text-amber-300 font-semibold mb-1">claim_item_atomic(p_id, u_id)</div>
                <div className="text-[11px]">1. Row lock applied on item_id</div>
                <div className="text-[11px]">2. State check: 'AVAILABLE'</div>
                <div className="text-[11px] text-emerald-400">3. Status -&gt; 'CLAIMED' (Atomic)</div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#8E9BAE]">
                <span>Concurrency: 0 Over-claims</span>
                <span className="font-mono text-cyan-300">Supabase Realtime</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[400px] sm:h-[460px] md:h-[516px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#111218] via-[#0d0e12] to-[#070709] border border-[#2b2f3a] p-6 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#232733]">
                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                    <BookOpen size={16} />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-white">
                    CampusBorrow Live Marketplace
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400">Next.js 16 + React 19</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-[#14161f] border border-[#232838]">
                  <div className="text-xs font-semibold text-white">Casio fx-991EX Calculator</div>
                  <div className="text-[11px] text-[#8E9BAE] mt-1">Available for Calculus midterms</div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      AVAILABLE
                    </span>
                    <span className="text-[11px] text-[#717E91]">Academic</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#14161f] border border-[#232838]">
                  <div className="text-xs font-semibold text-white">USB-C 100W GaN Charger</div>
                  <div className="text-[11px] text-[#8E9BAE] mt-1">Library 3rd floor pickup</div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      ON LOAN
                    </span>
                    <span className="text-[11px] text-[#717E91]">Electronics</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#14161f] border border-[#232838]">
                  <div className="text-xs font-semibold text-white">Operating Systems Concept (10th Ed)</div>
                  <div className="text-[11px] text-[#8E9BAE] mt-1">Silberschatz text edition</div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                      AVAILABLE
                    </span>
                    <span className="text-[11px] text-[#717E91]">Textbook</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#14161f] border border-[#232838]">
                  <div className="text-xs font-semibold text-white">Lab Coat &amp; Safety Eyewear</div>
                  <div className="text-[11px] text-[#8E9BAE] mt-1">Chemistry lab block 4</div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                      RETURNED
                    </span>
                    <span className="text-[11px] text-[#717E91]">Apparel</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Framework</div>
                <div className="text-sm font-bold text-white mt-0.5">Next.js 16</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Database</div>
                <div className="text-sm font-bold text-cyan-400 mt-0.5">Supabase RLS</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Realtime</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">WebSockets</div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'air-quality':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="h-[180px] sm:h-[200px] md:h-[220px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#161618] to-[#0d0d0f] border border-[#2b2f3a] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <LineChart size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    TimeSeriesSplit Validation
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                  5-FOLD CHRONO
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-xs text-[#8E9BAE]">
                <div className="flex justify-between">
                  <span>Leakage Prevention:</span>
                  <span className="text-emerald-400 font-bold">STRICT PAST-ONLY</span>
                </div>
                <div className="flex justify-between">
                  <span>Temporal Windows:</span>
                  <span className="text-white">t-1, t-2, t-24 lags</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Variable:</span>
                  <span className="text-cyan-300">CO Concentration (1h)</span>
                </div>
              </div>

              <div className="text-[11px] text-[#717E91] border-t border-[#232733] pt-2 flex justify-between">
                <span>Cyclic Encodings: sin/cos(hour)</span>
                <span className="text-white font-mono">Scikit-learn</span>
              </div>
            </div>

            <div className="h-[210px] sm:h-[250px] md:h-[280px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#121318] to-[#0a0b0e] border border-[#2b2f3a] p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Activity size={16} />
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#BBCCD7]">
                    Model Performance Delta
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">+10.7% MAE GAIN</span>
              </div>

              <div className="space-y-2 py-1 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-[#191b24] border border-[#262a38] flex justify-between items-center">
                  <span className="text-[#8E9BAE]">Linear Regression (Trained)</span>
                  <span className="text-emerald-400 font-bold">MAE: 0.4652</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#191b24] border border-[#262a38] flex justify-between items-center">
                  <span className="text-[#8E9BAE]">Naive Persistence Baseline</span>
                  <span className="text-rose-400 font-bold">MAE: 0.5208</span>
                </div>
              </div>

              <div className="text-[11px] text-[#8E9BAE] border-t border-[#232733] pt-2 flex justify-between">
                <span>R²: 0.7377</span>
                <span>RMSE: 0.6939</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[400px] sm:h-[460px] md:h-[516px] rounded-[30px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-br from-[#111218] via-[#0d0e12] to-[#070709] border border-[#2b2f3a] p-6 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#232733]">
                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <LineChart size={16} />
                  </span>
                  <span className="text-sm font-semibold tracking-wide text-white">
                    Forecast vs. Observed Ground Truth
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400">AI/ML Club Evaluation</span>
              </div>

              {/* Graphical Simulation of Time-Series Plot */}
              <div className="mt-4 p-4 rounded-2xl bg-[#08090c] border border-[#1e222d]">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E9BAE] mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                    Predicted CO
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 inline-block" />
                    Actual Observed
                  </span>
                </div>

                <div className="h-32 flex items-end gap-1.5 pt-4 border-b border-[#222738] pb-1">
                  {[45, 52, 60, 58, 70, 78, 85, 80, 72, 64, 55, 48, 54, 66, 75, 82, 88, 81, 70, 62].map(
                    (val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col justify-end items-center gap-1">
                        <div
                          className="w-full bg-cyan-400/80 rounded-t"
                          style={{ height: `${val}%` }}
                        />
                      </div>
                    )
                  )}
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#627083] mt-2">
                  <span>Hour 00:00</span>
                  <span>Hour 12:00</span>
                  <span>Hour 23:00</span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Model R²</div>
                <div className="text-sm font-bold text-white mt-0.5">0.7377</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">Model RMSE</div>
                <div className="text-sm font-bold text-cyan-400 mt-0.5">0.6939</div>
              </div>
              <div className="p-3 rounded-xl bg-[#171922] border border-[#262b3a] text-center">
                <div className="text-[11px] text-[#7c8b9e]">MAE Score</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">0.4652</div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
