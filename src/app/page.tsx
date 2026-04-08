import Image from "next/image";

const LOGO =
  "https://zupikgtoimkjpcfiwbes.supabase.co/storage/v1/object/public/ChipFix/logo/ChatGPT%20Image%20Apr%208,%202026,%2007_13_17%20AM.png";
const HERO_IMG =
  "https://zupikgtoimkjpcfiwbes.supabase.co/storage/v1/object/public/ChipFix/images/Image.jpg";

const PHONE = "+18005551234";
const SMS_MESSAGE = encodeURIComponent(
  "Hi, I have a windshield chip. I'm sending a photo now. My location is:"
);

const benefits = [
  {
    title: "1 Click to Call",
    desc: "Call us fast and get help right away.",
  },
  {
    title: "1 Click to Text",
    desc: "Text your chip photo and location in seconds.",
  },
  {
    title: "Fast Local Help",
    desc: "Serving local drivers with quick windshield chip repair.",
  },
];

const steps = [
  {
    num: "1",
    title: "Call or text us",
    desc: "Reach us in 1 click from your phone.",
    icon: (
      <svg className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Send a photo of your chip",
    desc: "A quick photo helps us understand the damage.",
    icon: (
      <svg className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
          d="M5 7h2l1-2h8l1 2h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-2 2l-2-2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
        <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Tell us your location",
    desc: "Send your city so we can help you fast.",
    icon: (
      <svg className="h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
          d="M12 21c4.418 0 8-3.582 8-8 0-4.147-3.214-7.55-7.305-7.93a1 1 0 00-.328 0C7.214 5.45 4 8.853 4 13c0 4.418 3.582 8 8 8z" />
        <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">

      {/* ── NAV ── */}
      <header className="bg-black">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-1 leading-none">
          <Image
            src={LOGO}
            alt="1ChipFix"
            width={720}
            height={360}
            className="h-[220px] w-auto object-contain block my-0"
            priority
          />
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
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
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="text-base font-bold uppercase tracking-wide text-[#CC0000]">
            QUICK AND RELIABLE
          </p>
          <h1 className="mt-3 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Windshield chip{" "}
            <span className="text-[#CC0000]">repair.</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-gray-700">
            1 Click to Call or Text.<br />
            Send a photo of your chip and your location.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-[#1B4FD8] px-8 text-base font-bold text-white shadow-lg transition hover:bg-[#1540b8] active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href={`sms:${PHONE}?&body=${SMS_MESSAGE}`}
              className="flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-[#1B4FD8] bg-white px-8 text-base font-bold text-[#1B4FD8] shadow-sm transition hover:bg-blue-50 active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Text Now
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Tap to call or tap to text.<br />
            Text us a photo of your chip and your city.
          </p>
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
      <section className="border-y border-gray-100 bg-white py-10 text-center">
        <div className="flex justify-center gap-1 text-3xl">
          {"★★★★★".split("").map((s, i) => (
            <span key={i} className="text-yellow-400">{s}</span>
          ))}
        </div>
        <h2 className="mt-3 text-xl font-extrabold text-gray-900">
          Customers rate 1ChipFix 4.9 out of 5
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Our customers trust us to deliver the best chip repairs and service every time.
        </p>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center rounded-2xl border border-gray-200 p-8 text-center shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-[#CC0000]">{b.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{b.desc}</p>
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
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="flex flex-col items-center gap-3">
                  <div>{step.icon}</div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#CC0000] text-xl font-extrabold text-white shadow-md">
                    {step.num}
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RED CTA BAND ── */}
      <section className="bg-[#CC0000] py-14 text-center text-white">
        <h2 className="text-3xl font-extrabold">Got a chip? Call or text now.</h2>
        <p className="mt-3 text-red-100">
          Send a photo of your chip and your location.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-8 text-base font-bold text-[#CC0000] shadow-lg transition hover:bg-gray-100 active:scale-95"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <a
            href={`sms:${PHONE}?&body=${SMS_MESSAGE}`}
            className="flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#CC0000] px-8 text-base font-bold text-white shadow-lg transition hover:bg-red-700 active:scale-95"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Text Now
          </a>
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
          <a href={`tel:${PHONE}`} className="hover:text-gray-200 transition">(800) 555-1234</a>
          {" · "}
          <a href="mailto:hello@1chipfix.com" className="hover:text-gray-200 transition">hello@1chipfix.com</a>
        </p>
      </footer>

      {/* ── MOBILE STICKY BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-0 border-t border-gray-300 bg-white shadow-2xl md:hidden">
        <a
          href={`tel:${PHONE}`}
          className="flex flex-1 items-center justify-center gap-2 py-4 text-base font-bold text-[#1B4FD8] transition active:bg-blue-50"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <div className="w-px bg-gray-300"></div>
        <a
          href={`sms:${PHONE}?&body=${SMS_MESSAGE}`}
          className="flex flex-1 items-center justify-center gap-2 py-4 text-base font-bold text-[#1B4FD8] transition active:bg-blue-50"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Text Now
        </a>
      </div>

    </div>
  );
}
