import Image from "next/image";

const features = [
  {
    title: "Same-day dispatch",
    desc: "Technicians arrive within hours and keep the chip from cracking further.",
  },
  {
    title: "Mobile repairs",
    desc: "We service homes, offices, and insurance lots without extra fees.",
  },
  {
    title: "Lifetime-backed work",
    desc: "Every repair is guaranteed against leaks, stress cracks, and new chips.",
  },
  {
    title: "Insurance friendly",
    desc: "We handle documentation for most major providers and send it instantly.",
  },
];

const steps = [
  {
    title: "Tell us about your chip",
    desc: "Share your ZIP, vehicle, and damage type — takes less than a minute.",
  },
  {
    title: "Technician confirms",
    desc: "We call inside 30 minutes to lock in paperwork and scheduling.",
  },
  {
    title: "Fast, clean repair",
    desc: "The chip is drilled, filled, and polished in about 30 minutes.",
  },
];

const stats = [
  { value: "500+", label: "Repairs completed" },
  { value: "4.9★", label: "Average rating" },
  { value: "30 min", label: "Response time" },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="hero-bg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden rounded-2xl bg-white/10 p-1">
              <Image
                src="/1chipfix-logo.png"
                alt="1ChipFix logo"
                width={48}
                height={48}
                className="h-10 w-10 object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white">1ChipFix</span>
          </div>
          <a
            href="tel:+18005551234"
            className="flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            (800) 555-1234
          </a>
        </nav>

        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-16 pt-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/30 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-white">
              Mobile windshield chip repair
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              1ChipFix keeps windshield damage from becoming a{" "}
              <span className="text-blue-200">crack.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-200">
              1ChipFix sends licensed technicians with a fully equipped van so you can keep your day moving.
              No dealer trips, no surprises.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@windowfix.com"
                className="btn-primary rounded-xl px-6 py-3 text-sm font-bold text-white"
              >
                Request a quote
              </a>
              <div className="flex h-11 items-center gap-2 rounded-full border border-white/40 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Insured crew
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <Image
              src="/window-hero.png"
              alt="Technician repairing a windshield chip"
              width={580}
              height={420}
              className="h-auto w-full rounded-[28px] object-cover"
              priority
            />
            <div className="mt-3 space-y-1 text-sm text-white">
              <p className="font-semibold">Free mobile repairs</p>
              <p className="text-xs text-slate-200">Fully stocked vans show up with every tool.</p>
            </div>
          </div>
        </section>
      </header>

      <main className="flex flex-1 flex-col gap-12 px-6 py-12">
        <section className="mx-auto w-full max-w-6xl rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900">Why you’ll love 1ChipFix</h2>
          <p className="mt-2 text-sm text-slate-500">We keep your day moving while we take care of the windshield.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-100/80 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100/80 p-6">
                <span className="text-sm font-semibold text-blue-500">Step {index + 1}</span>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900">Talk to a tech right now</h3>
          <p className="mt-2 text-sm text-slate-500">
            Call (800) 555-1234 or email hello@windowfix.com. We’ll confirm coverage and timing.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200/70 bg-slate-900 p-8 text-center text-white shadow-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-200">Mobile service nationwide</p>
          <p className="mt-3 text-lg font-semibold">Open Monday–Saturday, 8am–8pm</p>
        </section>

        <footer className="mx-auto w-full max-w-6xl rounded-3xl border border-slate-200/70 bg-white py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} 1ChipFix · All rights reserved
        </footer>
      </main>
    </div>
  );
}
