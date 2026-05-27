import Image from "next/image";

const drops = [
  {
    title: "Creator Intro: White Hoodie Era",
    tag: "featured profile",
    views: "1.2M",
    time: "03:18",
  },
  {
    title: "Late Night Q&A With Jason",
    tag: "subscriber pick",
    views: "840K",
    time: "08:44",
  },
  {
    title: "Behind The Handle",
    tag: "bio drop",
    views: "690K",
    time: "05:12",
  },
  {
    title: "Creator Of The Month Speech",
    tag: "ranked #1",
    views: "2.4M",
    time: "02:59",
  },
];

const stats = [
  ["Rank", "#1"],
  ["Month", "May"],
  ["Fans", "18+"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/90 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-4 sm:px-6">
          <a href="#" className="flex shrink-0 items-center text-2xl font-black">
            <span className="rounded-l-sm bg-white px-2 py-1 text-black">Nupid</span>
            <span className="rounded-r-sm bg-[#ff9d00] px-2 py-1 text-black">Stigger</span>
          </a>
          <div className="hidden min-w-0 flex-1 items-center rounded-sm border border-white/10 bg-[#1a1a1a] md:flex">
            <span className="px-4 text-sm text-zinc-500">Search the archive</span>
            <span className="ml-auto bg-[#ff9d00] px-5 py-2 text-sm font-black text-black">
              GO
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2 text-sm font-bold">
            <a href="#drops" className="hidden px-3 py-2 text-zinc-300 hover:text-white sm:block">
              Drops
            </a>
            <a href="#contact" className="rounded-sm bg-[#ff9d00] px-4 py-2 text-black">
              Subscribe
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="/jason-ep.jpg"
            alt="Jason aka Nupid Stigger seated in a light hoodie"
            fill
            priority
            className="object-cover object-center opacity-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#080808_0%,rgba(8,8,8,.8)_42%,rgba(8,8,8,.35)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-end px-4 pb-10 pt-24 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:pb-14">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-sm bg-[#ff9d00] px-3 py-1 text-sm font-black uppercase text-black">
              #1 Creator Of The Month
            </div>
            <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              Jason aka
              <span className="block text-[#ff9d00]">Nupid Stigger</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              The top-ranked adult creator profile of the month: clean camera
              presence, confident fan-service energy, and a subscriber page built
              strictly for grown audiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#drops"
                className="rounded-sm bg-[#ff9d00] px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-white"
              >
                View Profile
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-white/25 px-6 py-3 text-sm font-black uppercase text-white transition hover:border-[#ff9d00] hover:text-[#ff9d00]"
              >
                Slide In
              </a>
            </div>
          </div>

          <aside className="mt-10 grid gap-3 rounded-sm border border-white/10 bg-black/70 p-4 shadow-2xl shadow-black/50 backdrop-blur lg:ml-auto lg:w-full lg:max-w-md">
            {stats.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-white/10 py-3 last:border-b-0"
              >
                <span className="text-sm uppercase tracking-wide text-zinc-400">{label}</span>
                <span className="text-2xl font-black text-[#ff9d00]">{value}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section id="drops" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase text-[#ff9d00]">Featured uploads</p>
            <h2 className="mt-1 text-3xl font-black sm:text-4xl">The Nupid Feed</h2>
          </div>
          <p className="hidden max-w-sm text-right text-sm text-zinc-400 sm:block">
            Adult-platform parody copy, ranked stats, and a creator bio without
            harmful claims.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {drops.map((drop, index) => (
            <article
              key={drop.title}
              className="group overflow-hidden rounded-sm border border-white/10 bg-[#141414] transition hover:-translate-y-1 hover:border-[#ff9d00]"
            >
              <div className="relative aspect-video bg-[radial-gradient(circle_at_30%_20%,#ff9d00_0%,#9a3f00_32%,#151515_70%)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,.16)_48%,transparent_49%)] opacity-60" />
                <div className="absolute left-3 top-3 rounded-sm bg-black/80 px-2 py-1 text-xs font-black uppercase text-[#ff9d00]">
                  #{index + 1}
                </div>
                <div className="absolute bottom-3 right-3 rounded-sm bg-black px-2 py-1 text-xs font-bold">
                  {drop.time}
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-black uppercase text-[#ff9d00]">{drop.tag}</p>
                <h3 className="mt-2 min-h-14 text-lg font-black leading-tight">{drop.title}</h3>
                <p className="mt-3 text-sm text-zinc-400">{drop.views} views - verified adult audience</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:py-16">
          <h2 className="text-3xl font-black sm:text-5xl">Creator Bio</h2>
          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              Jason, known online as Nupid Stigger, is the month&apos;s #1 creator
              thanks to sharp visuals, deadpan confidence, and a profile that
              knows exactly how to keep adult subscribers watching.
            </p>
            <p>
              His lane is polished, playful, and adults-only: premium updates,
              fan Q&amp;As, creator rankings, and a bio that sells the persona
              without crossing into harmful or illegal claims.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-2xl font-black">
              <span className="text-[#ff9d00]">@</span>nupidstigger
            </p>
            <p className="mt-1 text-sm text-zinc-400">Bookings, collabs, and 18+ creator inquiries.</p>
          </div>
          <a
            href="mailto:jason@nupidstigger.com"
            className="w-fit rounded-sm bg-white px-5 py-3 text-sm font-black uppercase text-black transition hover:bg-[#ff9d00]"
          >
            Email Jason
          </a>
        </div>
      </footer>
    </main>
  );
}
