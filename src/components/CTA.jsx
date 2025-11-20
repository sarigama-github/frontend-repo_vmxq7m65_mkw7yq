import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Bring AI CBCT to your practice</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Start with a free trial. No credit card. White-glove onboarding included.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#" className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
              Start free trial
            </motion.a>
            <motion.a whileHover={{ y: -2 }} whileTap={{ y: 0 }} href="#" className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-slate-200/90 hover:bg-white/5">
              Book a demo
            </motion.a>
          </div>
          <p className="mt-4 text-xs text-slate-400">HIPAA-ready • SSO • On‑prem options</p>
        </div>
      </div>
    </section>
  );
}
