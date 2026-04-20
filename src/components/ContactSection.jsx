import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const fieldClassName =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none placeholder:text-slate-400 focus:border-palmetto-700 dark:border-charcoal-600 dark:bg-charcoal-800 dark:text-sand-50 dark:placeholder:text-sand-100/50 dark:focus:border-palmetto-400";

export default function ContactSection({ brand }) {
  const [formValues, setFormValues] = useState(initialValues);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const requiredFields = ["firstName", "lastName", "email", "message"];
    const missingField = requiredFields.find((field) => !formValues[field].trim());

    if (missingField) {
      setStatus({
        type: "error",
        message: "Complete all required fields before sending your consultation request.",
      });
      return;
    }

    const subject = encodeURIComponent(
      `Title Search Request - ${formValues.firstName} ${formValues.lastName}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${formValues.firstName} ${formValues.lastName}`,
        `Email: ${formValues.email}`,
        `Phone: ${formValues.phone || "Not provided"}`,
        "",
        "Matter details:",
        formValues.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: "success",
      message: `Your default email app has been opened to contact ${brand.name}.`,
    });
    setFormValues(initialValues);
  }

  return (
    <section id="contact" className="relative py-24" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-palmetto-700 dark:text-palmetto-200">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 max-w-[14ch] font-display text-4xl font-semibold leading-tight text-palmetto-900 dark:text-sand-50 md:text-5xl"
          >
            Request a title search or scope a new matter.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-sand-100/90">
            Share the property and your timeline. A drafted email will open with the
            details needed to kick off the search. Most requests get a reply within 24 hours.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-[1.25rem] border border-palmetto-100 bg-white p-5 shadow-sm dark:border-charcoal-700 dark:bg-charcoal-900">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-palmetto-700 dark:text-palmetto-200">
                Office
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700 dark:text-sand-100/90">{brand.address}</p>
            </div>
            <div className="rounded-[1.25rem] border border-palmetto-100 bg-white p-5 shadow-sm dark:border-charcoal-700 dark:bg-charcoal-900">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-palmetto-700 dark:text-palmetto-200">
                Direct Contact
              </p>
              <div className="mt-3 space-y-2 text-base leading-7 text-slate-700 dark:text-sand-100/90">
                <a href={`tel:${brand.phone.replace(/[^\d]/g, "")}`} className="block">
                  {brand.phone}
                </a>
                <a href={`mailto:${brand.email}`} className="block">
                  {brand.email}
                </a>
              </div>
            </div>
            <div className="rounded-[1.25rem] bg-palmetto-900 p-5 text-sand-100 shadow-soft">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sand-200">
                Availability
              </p>
              <p className="mt-3 text-base leading-7">{brand.hours}</p>
            </div>
          </div>
        </div>

        <form
          className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-9 dark:border-charcoal-700 dark:bg-charcoal-900"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="mb-8 flex flex-col gap-4 border-b border-palmetto-100 pb-6 sm:flex-row sm:items-end sm:justify-between dark:border-charcoal-700">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-palmetto-700 dark:text-palmetto-200">
                Title Search Request
              </p>
              <p className="mt-3 max-w-md text-base leading-7 text-slate-700 dark:text-sand-100/90">
                Share the property details, county, and your closing or review timeline.
              </p>
            </div>
            <div className="rounded-full border border-palmetto-200 bg-palmetto-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-palmetto-800 dark:border-palmetto-700 dark:bg-palmetto-700 dark:text-palmetto-100">
              Response target: 24h
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-sand-100/90">First name *</span>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                className={fieldClassName}
                placeholder="Jane"
                autoComplete="given-name"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-sand-100/90">Last name *</span>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className={fieldClassName}
                placeholder="Doe"
                autoComplete="family-name"
                required
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-sand-100/90">Email *</span>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className={fieldClassName}
                placeholder="jane@example.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-sand-100/90">Phone</span>
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className={fieldClassName}
                placeholder="(864) 555-0148"
                autoComplete="tel"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-sand-100/90">
                Property &amp; matter details *
              </span>
              <textarea
                name="message"
                rows="6"
                value={formValues.message}
                onChange={handleChange}
                className={fieldClassName}
                placeholder="Property address or parcel ID, county, type of matter (purchase, refi, foreclosure, etc.), and your target date."
                required
              />
            </label>
          </div>

          {status.type !== "idle" && (
            <p
              aria-live="polite"
              className={`mt-6 rounded-xl px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-emerald-50 text-emerald-800"
                  : "bg-rose-50 text-rose-800"
              }`}
            >
              {status.message}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-4 border-t border-palmetto-100 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-charcoal-700">
            <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-sand-100/80">
              By submitting, you&rsquo;re requesting a reply about title search or
              paralegal support in {brand.city}, {brand.region}.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-palmetto-900 px-6 py-4 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-palmetto-700 dark:bg-palmetto-600 dark:hover:bg-palmetto-500"
            >
              Send Title Search Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
