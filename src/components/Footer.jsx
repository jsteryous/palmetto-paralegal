import PalmettoMark from "./PalmettoMark";

export default function Footer({ brand }) {
  return (
    <footer className="bg-palmetto-950 py-12 text-sand-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-50/10 text-sand-100">
              <PalmettoMark className="h-7 w-7" title="Palmetto Paralegal logo" />
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-sand-200">
                {brand.tagline}
              </p>
              <p className="font-display text-xl font-semibold text-white">{brand.name}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-sand-100">
            Title searches, deed and lien research, and paralegal support for real
            estate attorneys across {brand.city} and {brand.serviceArea}. {brand.yearsExperience}+
            years of SC property records experience.
          </p>
        </div>

        <div className="grid gap-2 text-sm leading-7 text-sand-100 sm:text-right">
          <a className="hover:text-white" href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}>
            {brand.phone}
          </a>
          <a className="hover:text-white" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          <p>{brand.address}</p>
          <p>{brand.hours}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/20 px-6 pt-6 text-xs leading-6 text-sand-100 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} {brand.name}. Title search and paralegal services in Greenville, SC.
        </p>
        <p>Greenville · Spartanburg · Anderson · Pickens · Oconee · Laurens</p>
      </div>
    </footer>
  );
}
