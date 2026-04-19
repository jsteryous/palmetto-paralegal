function ServiceCard({ title, description }) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 transition group-hover:bg-slate-900 group-hover:text-white">
        PP
      </div>
      <h3 className="font-serif text-2xl text-slate-950">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default function ServicesSection({ brand, services, seoPhrases }) {
  return (
    <section id="services" className="bg-slate-50 py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Services
            </p>
            <h2 id="services-heading" className="mt-4 font-serif text-4xl text-slate-950">
              Professional paralegal services designed to keep matters organized and moving
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {brand.name} supports attorneys, firms, and self-directed clients with
              disciplined administrative help, polished documentation, and dependable
              communication across {brand.city} and {brand.serviceArea}.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm">
            <p className="font-semibold uppercase tracking-[0.28em] text-slate-500">
              Local SEO Focus
            </p>
            <ul className="mt-4 space-y-2">
              {seoPhrases.map((phrase) => (
                <li key={phrase}>{phrase}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
