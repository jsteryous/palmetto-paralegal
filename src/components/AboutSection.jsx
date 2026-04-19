export default function AboutSection({ brand }) {
  return (
    <section id="about" className="bg-white py-24" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 p-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            About
          </p>
          <h2 id="about-heading" className="mt-4 font-serif text-4xl leading-tight">
            Professional support with the polish expected in modern legal practice
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Based in {brand.city}, {brand.region}, {brand.name} is positioned as a
            responsive local partner for document preparation, intake support, and
            matter coordination. This section can be finalized with credentials,
            practice background, software proficiency, and experience supporting
            attorneys or legal departments in South Carolina.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-300">
            The copy is intentionally structured to support local search terms such as
            Greenville SC paralegal services, Upstate legal document preparation, and
            administrative legal support in South Carolina.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            What sets the brand apart
          </p>
          <div className="mt-8 space-y-8 text-slate-600">
            <div>
              <h3 className="font-serif text-2xl text-slate-950">Executive presentation</h3>
              <p className="mt-3 leading-7">
                The site uses restrained typography, disciplined spacing, and a premium
                navy-led palette to signal trust from the first screen.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-slate-950">Conversion-first flow</h3>
              <p className="mt-3 leading-7">
                Service clarity, local relevance, and a consultation CTA are repeated in
                the right places without feeling pushy or generic.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-slate-950">Search visibility ready</h3>
              <p className="mt-3 leading-7">
                The page now includes semantic sections, metadata, and structured data
                that can be expanded as soon as final business details are confirmed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
