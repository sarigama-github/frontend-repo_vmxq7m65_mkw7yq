import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <CTA />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} VerteX-Ray • Built for chiropractors
      </footer>
    </div>
  );
}

export default App;