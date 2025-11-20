import { Brain, Ruler, FileText, UploadCloud, Shield, Bot } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Brain,
      title: "CBCT Anomaly Detection",
      desc: "Deep-learning models highlight sinus, airway, and TMJ irregularities with confidence scoring.",
    },
    {
      icon: Ruler,
      title: "Automated Measurements",
      desc: "Auto cephalometrics, Cobb angles, and atlas alignment with clinician override.",
    },
    {
      icon: FileText,
      title: "Instant Reports",
      desc: "Generate clean, patient-friendly PDFs with annotated slices in one click.",
    },
    {
      icon: UploadCloud,
      title: "DICOM Anywhere",
      desc: "Upload from PACS or drag-and-drop. Zero-footprint web viewer included.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      desc: "HIPAA-ready, audit logs, SSO, and granular roles. Encryption in transit and at rest.",
    },
    {
      icon: Bot,
      title: "Clinical Copilot",
      desc: "Ask natural-language questions about a scan and get evidence-linked answers.",
    },
  ];

  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(50%_50%_at_90%_20%,rgba(59,130,246,0.12),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for CBCT-driven chiropractic care
          </h2>
          <p className="mt-4 text-slate-300">
            From intake to outcome, streamline your imaging workflow while keeping patients at the center.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-cyan-400/30">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
