const serviceIcons = {
  "Title Searches": (
    <path d="M10 4a6 6 0 1 0 3.9 10.55l4.28 4.28a1 1 0 0 0 1.42-1.42l-4.28-4.28A6 6 0 0 0 10 4Zm-4 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Z" />
  ),
  "Deed & Lien Research": (
    <path d="M5 3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6H5Zm6 0v5a1 1 0 0 0 1 1h5M7 12h8M7 15h5" />
  ),
  "Property Document Prep": (
    <path d="M4 5a2 2 0 0 1 2-2h6l2 2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z" />
  ),
  "Overflow Paralegal Support": (
    <path d="M12 3v18M3 12h18" />
  ),
};

function ServiceIcon({ title, featured }) {
  const icon = serviceIcons[title] ?? serviceIcons["Overflow Paralegal Support"];
  const filled = title === "Title Searches" || title === "Property Document Prep";
  return (
    <span
      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
        featured
          ? "bg-sand-50/15 text-sand-50"
          : "bg-palmetto-50 text-palmetto-800 dark:bg-charcoal-800 dark:text-palmetto-200"
      }`}
      aria-hidden="true"
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icon}
      </svg>
    </span>
  );
}

function ServiceCard({ index, title, description, featured }) {
  return (
    <article
      className={`rounded-[1.5rem] border p-7 transition ${
        featured
          ? "border-palmetto-900 bg-palmetto-900 text-sand-50 shadow-panel dark:border-palmetto-500 dark:bg-palmetto-700"
          : "border-[color:var(--line)] bg-white text-slate-900 shadow-sm hover:border-palmetto-300 dark:bg-charcoal-900 dark:text-sand-50 dark:hover:border-palmetto-400"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <ServiceIcon title={title} featured={featured} />
        <div className="flex items-center gap-3">
          <p
            className={`text-[0.7rem] font-semibold uppercase tracking-[0.26em] ${
              featured ? "text-sand-100" : "text-palmetto-700 dark:text-palmetto-200"
            }`}
          >
            {String(index).padStart(2, "0")}
          </p>
          {featured ? (
            <span className="rounded-full bg-sand-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-palmetto-900">
              Primary Service
            </span>
          ) : null}
        </div>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">{title}</h3>
      <p className={`mt-4 text-base leading-7 ${featured ? "text-sand-50/95" : "text-slate-600 dark:text-sand-100/90"}`}>
        {description}
      </p>
    </article>
  );
}

export default function ServicesSection({ brand, services }) {
  const included = [
    "Full chain-of-title search",
    "Deeds, mortgages, and assignments",
    "Judgment &amp; tax lien review",
    "Easements, restrictions, and exceptions",
    "Legal description verification",
    "Clean, attorney-ready summary",
  ];

  return (
    <section
      id="services"
      className="bg-[color:var(--canvas-strong)] py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palmetto-700 dark:text-palmetto-200">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-4 max-w-[18ch] font-display text-4xl font-semibold leading-tight text-palmetto-900 dark:text-sand-50 md:text-5xl"
            >
              Built for attorneys who need overflow capacity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-sand-100/90">
              {brand.name} works alongside real estate attorneys and small firms across
              {" "}{brand.city} and {brand.serviceArea} — running thorough title searches
              and document prep so your matters keep moving. Every file gets the same
              careful eye, because closings shouldn&rsquo;t hinge on a missed record.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-palmetto-200 bg-white shadow-sm dark:border-charcoal-700 dark:bg-charcoal-900">
            <img
              src="/img/organized-files.jpg"
              alt="Organized real estate files and folders ready for attorney review"
              loading="lazy"
              className="h-40 w-full object-cover"
            />
            <div className="p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-palmetto-700 dark:text-palmetto-200">
                What&rsquo;s Included in a Title Search
              </p>
              <ul className="mt-5 grid gap-2 text-sm leading-7 text-slate-700 dark:text-sand-100/90">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg
                      className="mt-1.5 h-3.5 w-3.5 shrink-0 text-palmetto-600 dark:text-palmetto-200"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M7.7 13.3 4.4 10l-1.4 1.4 4.7 4.7 10-10L16.3 4.7Z" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index + 1}
              featured={index === 0}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
