import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Zn7XRxnnbSat5OJG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradients overlays that don't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-24 lg:grid-cols-12 lg:py-28 xl:py-36">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            >
              AI CBCT Insights for Modern Chiropractors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Turn CBCT scans into clear, actionable reports. VerteX-Ray automates measurements, flags anomalies, and generates patient-ready visuals — all in minutes.
            </motion.p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
                Start free trial
              </motion.a>
              <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-200/90 hover:bg-white/5">
                Explore features
              </motion.a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                HIPAA-ready infrastructure
              </div>
              <div className="hidden sm:block">•</div>
              <div>FDA guidance aligned</div>
              <div className="hidden sm:block">•</div>
              <div>Cloud or on‑prem</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Auto Ceph', value: '1.4s' },
                  { label: 'Anomaly AI', value: '98.7%' },
                  { label: 'Report Time', value: '-72%' },
                ].map((card) => (
                  <div key={card.label} className="rounded-xl bg-slate-800/60 p-4 text-center">
                    <p className="text-xs text-slate-300/70">{card.label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{card.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-slate-800/60 p-4 text-slate-300">
                Drag your DICOM files to preview anonymized slices. No data leaves your device until you confirm upload.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
