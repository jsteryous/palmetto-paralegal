const counties = [
  { name: "Greenville", seat: "Greenville", primary: true },
  { name: "Spartanburg", seat: "Spartanburg" },
  { name: "Anderson", seat: "Anderson" },
  { name: "Pickens", seat: "Pickens" },
  { name: "Oconee", seat: "Walhalla" },
  { name: "Laurens", seat: "Laurens" },
];

function CoverageGrid() {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {counties.map((c) => (
        <li
          key={c.name}
          className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${
            c.primary
              ? "border-palmetto-700 bg-palmetto-900 text-sand-50 dark:border-palmetto-500"
              : "border-palmetto-100 bg-white text-slate-700 dark:border-charcoal-700 dark:bg-charcoal-800 dark:text-sand-50"
          }`}
        >
          <svg
            className={`mt-0.5 h-4 w-4 shrink-0 ${c.primary ? "text-sand-50" : "text-palmetto-600 dark:text-palmetto-200"}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z" />
          </svg>
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-semibold leading-tight">
              {c.name} County
            </p>
            <p
              className={`mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${
                c.primary ? "text-sand-100/90" : "text-palmetto-700 dark:text-palmetto-200"
              }`}
            >
              Seat · {c.seat}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const pillars = [
  {
    title: "Two decades in SC property records",
    description:
      "Two-plus decades working Upstate courthouses and online record systems means fewer missed documents and fewer closing-day surprises.",
  },
  {
    title: "Attorney-ready deliverables",
    description:
      "Every report is formatted for quick review: clear chain, flagged exceptions, source documents attached, and a summary your attorney can hand straight to the client.",
  },
  {
    title: "Responsive and straightforward",
    description:
      "Clear scope, predictable timelines, and no hand-holding required. Most new matters get a reply within 24 hours.",
  },
];

export default function AboutSection({ brand }) {
  return (
    <section
      id="about"
      className="border-y border-[color:var(--line)] bg-white py-24 dark:bg-charcoal-950"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palmetto-700 dark:text-palmetto-200">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-4 max-w-[16ch] font-display text-4xl font-semibold leading-tight text-palmetto-900 dark:text-sand-50 md:text-5xl"
          >
            {brand.yearsExperience}+ years researching South Carolina property records.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-sand-100/90">
            Based in {brand.city}, {brand.region}, {brand.name} is a focused paralegal
            practice specializing in title searches and real estate document work for
            attorneys, small firms, and growing practices across the Upstate.
          </p>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-palmetto-200 bg-sand-50 dark:border-charcoal-700 dark:bg-charcoal-800">
            <div className="bg-palmetto-900 px-7 py-5 text-sand-50 dark:bg-palmetto-700">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-sand-100">
                Best Fit
              </p>
              <p className="mt-2 font-display text-xl font-semibold">
                Real estate attorneys and small firms
              </p>
            </div>
            <div className="px-7 py-6">
              <p className="text-base leading-7 text-slate-700 dark:text-sand-100/90">
                Firms that close real estate matters regularly and want a trusted hand
                running title searches, pulling supporting documents, and keeping files
                clean from first call through closing.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-palmetto-100 bg-sand-50 p-6 shadow-sm dark:border-charcoal-700 dark:bg-charcoal-900">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-palmetto-700 dark:text-palmetto-200">
                  Coverage Area
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-palmetto-900 dark:text-sand-50">
                  Greenville &amp; Upstate South Carolina
                </p>
              </div>
              <span className="rounded-full border border-palmetto-200 bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-palmetto-800 dark:border-charcoal-700 dark:bg-charcoal-800 dark:text-palmetto-200">
                6 counties
              </span>
            </div>
            <CoverageGrid />
            <p className="mt-5 text-xs leading-6 text-slate-600 dark:text-sand-100/80">
              County seats shown. Title searches conducted on-site or through the
              relevant Register of Deeds record system.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.5rem] border border-[color:var(--line)] bg-sand-50 p-7 shadow-sm dark:border-charcoal-700 dark:bg-charcoal-900"
            >
              <h3 className="font-display text-2xl font-semibold leading-tight text-palmetto-900 dark:text-sand-50">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 dark:text-sand-100/90">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
