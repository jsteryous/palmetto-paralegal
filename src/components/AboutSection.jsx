export default function AboutSection({ brand }) {
  return (
    <section id="about" className="bg-white py-24" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-[2rem] bg-slate-900 p-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            About
          </p>
          <h2 id="about-heading" className="mt-4 font-serif text-4xl leading-tight">
            A dependable legal support partner for modern firms in {brand.city}
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300">
            Based in {brand.city}, {brand.region}, {brand.name} is positioned as a
            responsive freelance paralegal resource for solo attorneys, small firms,
            and growing practices that need organized support behind the scenes. This
            section should ultimately highlight credentials, legal workflow experience,
            software familiarity, and the standards of professionalism the business brings
            to every matter.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-300">
            The message should reinforce the business case for hiring outside support:
            less administrative drag, more consistent execution, and added capacity
            without committing to a full-time in-house role.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            What sets the brand apart
          </p>
          <div className="mt-8 space-y-8 text-slate-600">
            <div>
              <h3 className="font-serif text-2xl text-slate-950">Protect attorney time</h3>
              <p className="mt-3 leading-7">
                The strongest firms delegate repeatable workflow tasks so attorneys can
                focus on billable work, case strategy, and client relationships.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-slate-950">Reduce operational drag</h3>
              <p className="mt-3 leading-7">
                Organized intake, clean files, and dependable follow-through help firms
                move faster with less bottlenecking around administrative work.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-slate-950">Add flexible capacity</h3>
              <p className="mt-3 leading-7">
                Contract-style paralegal support gives smaller practices room to grow
                without immediately taking on the cost of a full-time employee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
