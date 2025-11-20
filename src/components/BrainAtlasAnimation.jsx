import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

function BrainAtlasAnimation() {
  const [playing, setPlaying] = useState(true);

  return (
    <section id="brain-atlas" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Brain with C1 Atlas Animation
          </h2>
          <p className="mt-4 text-slate-300">
            A focused illustration showing the brain and the C1 (atlas) vertebra. The atlas is
            highlighted with a gentle pulse to emphasize its relationship to the cranio-cervical
            junction.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-lg">
          <div className="flex items-center justify-between pb-4">
            <div className="text-sm text-slate-400">Interactive illustration</div>
            <button
              onClick={() => setPlaying(p => !p)}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition"
              aria-label={playing ? 'Pause animation' : 'Play animation'}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
              {playing ? 'Pause' : 'Play'}
            </button>
          </div>

          <div className="relative">
            <svg
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-[360px] w-full sm:h-[420px]"
            >
              <defs>
                <radialGradient id="brainGlow" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.7" />
                  <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
                </radialGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background subtle glow */}
              <ellipse cx="400" cy="260" rx="260" ry="200" fill="url(#brainGlow)" opacity="0.35" />

              {/* Brain outline (stylized) */}
              <g fill="none" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path
                  className={playing ? 'animate-draw' : ''}
                  d="M300,180 C270,170 250,190 245,215 C230,210 210,225 212,248 C195,255 188,275 200,292 C185,305 190,325 210,332 C205,360 230,375 252,368 C265,385 295,388 310,370 C335,380 365,375 380,355 C410,370 455,365 470,335 C500,335 510,315 500,295 C520,280 515,255 495,245 C505,225 490,205 468,205 C465,180 440,170 415,180"
                />
                <path
                  className={playing ? 'animate-draw delay-300' : ''}
                  d="M330,210 C320,200 300,205 295,220 C280,220 270,235 278,248 C268,255 270,270 286,275 C285,290 300,300 315,294 C328,305 345,300 352,288 C370,298 392,292 396,276 C415,275 425,262 418,248 C430,238 425,220 408,218 C405,205 390,198 375,203"
                />
              </g>

              {/* C1 Atlas (highlighted ring) */}
              <g>
                {/* Stylized skull base hint */}
                <path d="M300,205 C355,190 445,190 500,205" fill="none" stroke="#94a3b8" strokeOpacity="0.5" strokeWidth="2" />

                {/* Atlas ring */}
                <ellipse
                  cx="400"
                  cy="235"
                  rx="95"
                  ry="28"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="6"
                  filter="url(#softGlow)"
                  className={playing ? 'animate-pulse-soft' : ''}
                />

                {/* Lateral masses suggestion */}
                <ellipse cx="335" cy="235" rx="10" ry="14" fill="#22d3ee" opacity="0.5" />
                <ellipse cx="465" cy="235" rx="10" ry="14" fill="#22d3ee" opacity="0.5" />
              </g>

              {/* Simple cervical spine hint below atlas */}
              <g stroke="#475569" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round">
                <path d="M390,245 L390,320" />
                <path d="M410,245 L410,320" />
                <path d="M385,320 Q400,330 415,320" />
                <path d="M382,340 Q400,350 418,340" />
              </g>

              {/* Labels */}
              <g fontFamily="Inter, ui-sans-serif, system-ui" fontSize="16" textAnchor="middle">
                <text x="400" y="160" fill="#cbd5e1">Brain</text>
                <text x="400" y="275" fill="#22d3ee">C1 Atlas</text>
              </g>
            </svg>
          </div>

          <div className="mt-6 text-center text-xs text-slate-400">
            Illustration is stylized for concept demonstration and not a diagnostic reference.
          </div>
        </div>
      </div>

      <style>{`
        .animate-draw {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: dash 2.4s ease forwards;
        }
        .delay-300 { animation-delay: 0.3s; }
        .animate-pulse-soft {
          animation: pulse 1.8s ease-in-out infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
      `}</style>
    </section>
  );
}

export default BrainAtlasAnimation;
