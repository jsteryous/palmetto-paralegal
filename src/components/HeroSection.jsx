export default function HeroSection({ brand }) {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.28),_transparent_38%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(30,41,59,0.92))]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
            Trusted legal support in {brand.city}, {brand.region}
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl font-serif text-5xl leading-tight text-white md:text-6xl"
          >
            Professional paralegal support for attorneys, firms, and clients across{" "}
            {brand.serviceArea}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {brand.name} delivers polished document preparation, case organization,
            and intake support with the discretion and responsiveness serious legal
            work requires. Built for the pace of modern practice, grounded in local
            service.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Schedule a Consultation
            </a>
            <a
              href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Call {brand.phone}
            </a>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 text-sm text-slate-300 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-serif text-white">24h</p>
              <p className="mt-2 leading-6">Response target for consultation inquiries.</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-white">Local</p>
              <p className="mt-2 leading-6">Focused on Greenville and the wider Upstate market.</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-white">Detail-first</p>
              <p className="mt-2 leading-6">Professional workflows designed around accuracy.</p>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-soft backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            Why clients choose {brand.name}
          </p>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-4xl font-serif text-white">Strategic</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Every engagement starts with clear scope, practical next steps, and a
                professional intake experience.
              </p>
            </div>
            <div>
              <p className="text-4xl font-serif text-white">Responsive</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Timely updates and organized communication help attorneys and clients
                stay informed without friction.
              </p>
            </div>
            <div>
              <p className="text-4xl font-serif text-white">Trusted</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Built for credibility with a restrained, high-end presentation and
                service language tailored to legal work.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
