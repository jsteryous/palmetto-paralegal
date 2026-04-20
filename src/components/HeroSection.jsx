import DocumentIllustration from "./DocumentIllustration";

export default function HeroSection({ brand }) {
  return (
    <section
      className="relative overflow-hidden border-b border-[color:var(--line)] bg-[color:var(--canvas)]"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 85% 10%, rgba(47,127,92,0.15), transparent 60%), radial-gradient(40% 40% at 10% 90%, rgba(15,61,46,0.1), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] lg:items-center lg:px-8 lg:py-24">
        <div className="min-w-0 max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-palmetto-200 bg-white px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-palmetto-800 dark:border-charcoal-700 dark:bg-charcoal-800 dark:text-palmetto-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-palmetto-600 dark:bg-palmetto-300" />
            Title Searches · Greenville &amp; Upstate SC
          </p>

          <h1
            id="hero-heading"
            className="mt-7 font-display text-5xl font-semibold leading-[1.02] text-palmetto-900 dark:text-sand-50 md:text-6xl"
          >
            Title searches you can trust,
            <span className="text-palmetto-700 dark:text-palmetto-200"> backed by {brand.yearsExperience}+ years of experience.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-sand-100/85">
            {brand.name} delivers clear, attorney-ready title reports for real estate
            matters across {brand.city} and {brand.serviceArea}. Thorough research.
            Organized documents. No surprises at closing.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-palmetto-900 px-7 py-4 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-palmetto-700 dark:bg-palmetto-600 dark:hover:bg-palmetto-500"
            >
              Request a Title Search
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-palmetto-300 bg-white px-7 py-4 text-sm font-semibold text-palmetto-900 hover:border-palmetto-600 hover:bg-palmetto-50 dark:border-charcoal-600 dark:bg-charcoal-800 dark:text-sand-50 dark:hover:border-palmetto-400 dark:hover:bg-charcoal-700"
            >
              See What&rsquo;s Included
            </a>
          </div>

          <dl className="mt-12 grid gap-6 border-t border-[color:var(--line)] pt-8 sm:grid-cols-3">
            <div>
              <dt className="font-display text-3xl font-semibold text-palmetto-900 dark:text-sand-50">{brand.yearsExperience}+</dt>
              <dd className="mt-1 text-sm leading-6 text-slate-600 dark:text-sand-100/85">Years researching SC property records</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold text-palmetto-900 dark:text-sand-50">Upstate</dt>
              <dd className="mt-1 text-sm leading-6 text-slate-600 dark:text-sand-100/85">Greenville, Spartanburg, Anderson &amp; Pickens counties</dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-semibold text-palmetto-900 dark:text-sand-50">24h</dt>
              <dd className="mt-1 text-sm leading-6 text-slate-600 dark:text-sand-100/85">Typical response on new matters</dd>
            </div>
          </dl>
        </div>

        <aside className="min-w-0 lg:justify-self-end">
          <div className="rounded-[1.75rem] border border-palmetto-100 bg-white p-4 shadow-panel sm:p-6 dark:border-charcoal-700 dark:bg-charcoal-900">
            <div className="rounded-[1.4rem] border border-palmetto-100 bg-sand-50 p-4 sm:p-5 dark:border-charcoal-700 dark:bg-charcoal-950">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-palmetto-100 pb-4 dark:border-charcoal-700">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-palmetto-700 dark:text-palmetto-200">
                    Sample Deliverable
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-palmetto-900 dark:text-sand-50">
                    Title search summary packet
                  </p>
                </div>
                <div className="rounded-full border border-palmetto-200 bg-white px-3 py-2 text-xs font-semibold text-palmetto-800 dark:border-charcoal-700 dark:bg-charcoal-800 dark:text-palmetto-200">
                  {brand.city}, {brand.region}
                </div>
              </div>

              <DocumentIllustration />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
