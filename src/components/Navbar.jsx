import { Menu, Stethoscope, ShieldCheck, LogIn } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium text-cyan-300">VerteX-Ray</p>
                <p className="text-xs text-slate-300/70">CBCT Intelligence for Chiropractors</p>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-slate-200 md:flex">
              <a href="#features" className="hover:text-white/90 transition-colors">Features</a>
              <a href="#workflow" className="hover:text-white/90 transition-colors">Workflow</a>
              <a href="#security" className="hover:text-white/90 transition-colors">Security</a>
              <a href="#pricing" className="hover:text-white/90 transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-3">
              <motion.a whileHover={{ y: -1 }} whileTap={{ y: 0 }} href="#" className="hidden rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200/90 transition-colors hover:bg-white/5 md:block">
                Book a demo
              </motion.a>
              <motion.a whileHover={{ y: -1 }} whileTap={{ y: 0 }} href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
                <LogIn className="h-4 w-4" /> Sign in
              </motion.a>
              <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
