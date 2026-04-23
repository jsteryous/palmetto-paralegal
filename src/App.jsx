import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PalmettoMark from "./components/PalmettoMark";
import ServicesSection from "./components/ServicesSection";
import StructuredData from "./components/StructuredData";
import ThemeToggle from "./components/ThemeToggle";

const brand = {
  name: "Palmetto Paralegal",
  tagline: "Title Search Specialists",
  city: "Greenville",
  region: "SC",
  serviceArea: "Upstate South Carolina",
  yearsExperience: 20,
  phone: "(864) 555-0148",
  email: "consultations@palmettoparalegal.com",
  address: "105 River Street, Greenville, SC 29601",
  hours: "Monday-Friday | 8:30 AM-5:30 PM",
};

const services = [
  {
    title: "Title Searches",
    description:
      "Full-chain title searches delivered as an attorney-ready report: deed history, recorded encumbrances, easements, and exceptions — organized for your file and the closing table.",
  },
  {
    title: "Deed & Lien Research",
    description:
      "Targeted deed, mortgage, judgment, and tax lien pulls with source documents attached, so nothing important surfaces after closing.",
  },
  {
    title: "Property Document Prep",
    description:
      "Clean packets for real estate matters: legal descriptions, ownership history, supporting exhibits, and a summary you can hand straight to your client.",
  },
  {
    title: "Overflow Paralegal Support",
    description:
      "Extra capacity when your matters stack up — title work, intake, filings, and document prep — without the cost of a full-time hire.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--canvas)] text-slate-900 dark:text-sand-100">
      <StructuredData brand={brand} />

      <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--canvas)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-palmetto-900 text-sand-100 shadow-mark dark:bg-palmetto-800">
              <PalmettoMark className="h-8 w-8" title="Palmetto Paralegal logo" />
            </div>
            <div className="min-w-0">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-palmetto-700 dark:text-palmetto-200">
                {brand.tagline}
              </p>
              <p className="truncate font-display text-[1.35rem] font-bold leading-[1.15] text-palmetto-900 dark:text-sand-50">
                {brand.name}
              </p>
            </div>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full border border-[color:var(--line)] bg-white p-1 text-sm text-slate-700 dark:bg-charcoal-900 dark:text-sand-100 md:flex"
          >
            <a
              className="rounded-full px-4 py-2 transition hover:bg-palmetto-900 hover:text-white dark:hover:bg-palmetto-700"
              href="#services"
            >
              Services
            </a>
            <a
              className="rounded-full px-4 py-2 transition hover:bg-palmetto-900 hover:text-white dark:hover:bg-palmetto-700"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-full px-4 py-2 transition hover:bg-palmetto-900 hover:text-white dark:hover:bg-palmetto-700"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-palmetto-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-palmetto-700 dark:bg-palmetto-600 dark:hover:bg-palmetto-500"
            >
              Request a Title Search
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <HeroSection brand={brand} />
        <ServicesSection brand={brand} services={services} />
        <AboutSection brand={brand} />
        <ContactSection brand={brand} />
      </main>

      <Footer brand={brand} />
    </div>
  );
}
