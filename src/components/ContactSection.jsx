import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

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
      `Consultation Request - ${formValues.firstName} ${formValues.lastName}`,
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
      message: `Your email app has been opened to contact ${brand.name}.`,
    });
    setFormValues(initialValues);
  }

  return (
    <section id="contact" className="bg-slate-100 py-24" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Contact
          </p>
          <h2 id="contact-heading" className="mt-4 font-serif text-4xl text-slate-950">
            Schedule a confidential consultation in {brand.city}, {brand.region}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Start with a concise intake. This form is designed to capture qualified
            consultation requests from prospective clients, attorneys, and referral
            partners seeking professional paralegal services in {brand.serviceArea}.
          </p>

          <ul className="mt-10 space-y-4 text-sm text-slate-600">
            <li className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
              {brand.address}
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
              {brand.phone} | {brand.email}
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
              {brand.hours}
            </li>
          </ul>
        </div>

        <form
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">First Name *</span>
              <input
                type="text"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                placeholder="Jane"
                autoComplete="given-name"
                required
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Last Name *</span>
              <input
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                placeholder="Doe"
                autoComplete="family-name"
                required
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email *</span>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                placeholder="jane@example.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                placeholder="(864) 555-0148"
                autoComplete="tel"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">
                How can we help? *
              </span>
              <textarea
                name="message"
                rows="5"
                value={formValues.message}
                onChange={handleChange}
                className="w-full rounded-[1.5rem] border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                placeholder="Tell us about the matter, support needed, and any deadlines."
                required
              />
            </label>
          </div>

          {status.type !== "idle" && (
            <p
              className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-emerald-50 text-emerald-800"
                  : "bg-rose-50 text-rose-800"
              }`}
            >
              {status.message}
            </p>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-500">
              By submitting, you are requesting a reply regarding paralegal services in{" "}
              {brand.city}, {brand.region}.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Send Consultation Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
