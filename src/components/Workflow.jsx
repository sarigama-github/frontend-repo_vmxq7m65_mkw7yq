import { ArrowRight, ScanLine, ListChecks, Sparkles, Users, Clock } from "lucide-react";

export default function Workflow() {
  const steps = [
    { icon: ScanLine, title: "Import CBCT", desc: "Drag-and-drop DICOM or connect PACS. Optional local-only pre-processing." },
    { icon: Sparkles, title: "AI Analyze", desc: "Segmentation, anomaly spotting, and auto measurements." },
    { icon: ListChecks, title: "Review & Edit", desc: "Quick clinician review with easy overrides and notes." },
    { icon: Users, title: "Share with Patient", desc: "Beautiful annotated reports and 3D views." },
    { icon: Clock, title: "Track Outcomes", desc: "Compare scans over time and quantify change." },
  ];

  return (
    <section id="workflow" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A streamlined, clinician-first workflow</h2>
          <p className="mt-4 text-slate-300">Everything you need, exactly where you need it.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-slate-500 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
