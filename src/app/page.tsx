import Image from "next/image";
import ZipForm from "@/components/ZipForm";

const LOGO =
  "https://zupikgtoimkjpcfiwbes.supabase.co/storage/v1/object/public/ChipFix/logo/ChatGPT%20Image%20Apr%208,%202026,%2007_13_17%20AM.png";
const HERO_IMG =
  "https://zupikgtoimkjpcfiwbes.supabase.co/storage/v1/object/public/ChipFix/images/Window1.jpg";

const features = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none">
        <rect x="14" y="8" width="36" height="48" rx="4" stroke="#CC0000" strokeWidth="3" />
        <path d="M24 28l6 6 10-10" stroke="#CC0000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Nationwide guarantee",
    desc: "Your vehicle is safe with us. We back all windshield chip repairs with a nationwide guarantee.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none">
        <rect x="6" y="24" width="36" height="22" rx="3" stroke="#CC0000" strokeWidth="3" />
        <path d="M42 32h10l6 10H42V32z" stroke="#CC0000" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="18" cy="46" r="4" stroke="#CC0000" strokeWidth="3" />
        <circle cx="50" cy="46" r="4" stroke="#CC0000" strokeWidth="3" />
      </svg>
    ),
    title: "Come to us or we'll come to you",
    desc: "Book a chip repair at your nearest location, or have a mobile tech come directly to you.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none">
        <rect x="18" y="6" width="28" height="52" rx="4" stroke="#CC0000" strokeWidth="3" />
        <circle cx="32" cy="48" r="3" fill="#CC0000" />
        <path d="M24 16h16" stroke="#CC0000" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Easy online scheduling",
    desc: "Three quick steps to get your windshield chip repaired so we can get you back on the road fast.",
  },
];

const steps = [
  {
    num: "1",
    title: "Enter your ZIP",
    desc: "Tell us where you are and we match you to the nearest available technician.",
  },
  {
    num: "2",
    title: "Pick your time",
    desc: "Choose a same-day or next-day slot that fits your schedule — we come to you.",
  },
  {
    num: "3",
    title: "Chip fixed. Done.",
    desc: "Our certified tech repairs the chip in about 30 minutes. Guaranteed.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">

      {/* ── NAV ── */}
      <header className="bg-black">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Image
            src={LOGO}
            alt="1ChipFix"
            width={220}
            height={110}
            className="h-28 w-auto object-contain"
            priority
          />
          <a
            href="tel:+18005551234"
            className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            <svg className="h-4 w-4 text-[#CC0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (800) 555-1234
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          <p className="text-lg font-bold uppercase tracking-wide text-[#CC0000]">
            Quick and reliable
          </p>
          <h1 className="mt-2 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            windshield chip{" "}
            <span className="text-[#CC0000]">repairs.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get a quote or work with your insurance — we handle it all.
          </p>
          <div className="mt-8">
            <ZipForm />
          </div>
          <a
            href="tel:+18005551234"
            className="mt-4 inline-block text-sm font-semibold text-[#1B4FD8] underline underline-offset-2 hover:text-blue-800"
          >
            Call to book an appointment →
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={HERO_IMG}
            alt="Windshield chip repair"
            width={720}
            height={520}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* ── RATING STRIP ── */}
      <section className="border-y border-gray-100 bg-white py-12 text-center">
        <div className="flex justify-center gap-1 text-4xl">
          {"★★★★★".split("").map((s, i) => (
            <span key={i} className="text-yellow-400">{s}</span>
          ))}
        </div>
        <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
          Customers rate 1ChipFix 4.9 out of 5
        </h2>
        <p className="mt-2 text-gray-500">
          Our customers trust us to deliver the best chip repairs and service every time.
        </p>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            #1 windshield chip specialist in the country
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-2xl border border-gray-200 p-8 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-[#CC0000]">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            How it works
          </h2>
          <p className="mt-3 text-center text-gray-500">
            Three simple steps and your windshield chip is fixed.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#CC0000] text-xl font-extrabold text-white shadow-md">
                  {step.num}
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[#CC0000] py-14 text-center text-white">
        <h2 className="text-3xl font-extrabold">Don&rsquo;t let a chip become a crack.</h2>
        <p className="mt-3 text-red-100">
          Call us or enter your ZIP to get started. Same-day service available.
        </p>
        <div className="mt-8 flex justify-center">
          <ZipForm />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black py-10 text-center text-sm text-gray-400">
        <Image
          src={LOGO}
          alt="1ChipFix"
          width={220}
          height={110}
          className="mx-auto mb-5 h-28 w-auto object-contain"
        />
        <p>© {new Date().getFullYear()} 1ChipFix · All rights reserved</p>
        <p className="mt-1">
          <a href="tel:+18005551234" className="hover:text-gray-600 transition">(800) 555-1234</a>
          {" · "}
          <a href="mailto:hello@1chipfix.com" className="hover:text-gray-600 transition">hello@1chipfix.com</a>
        </p>
      </footer>

    </div>
  );
}
