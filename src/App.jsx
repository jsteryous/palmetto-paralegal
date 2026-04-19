import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StructuredData from "./components/StructuredData";

const brand = {
  name: "Palmetto Paralegal",
  city: "Greenville",
  region: "SC",
  serviceArea: "Upstate South Carolina",
  phone: "(864) 555-0148",
  email: "consultations@palmettoparalegal.com",
  address: "105 River Street, Greenville, SC 29601",
  hours: "Monday-Friday | 8:30 AM-5:30 PM",
};

const services = [
  {
    title: "Document Preparation",
    description:
      "Preparation of affidavits, pleadings, discovery responses, demand packages, and court-ready filings with a disciplined review process.",
  },
  {
    title: "Case Management Support",
    description:
      "Deadline tracking, matter organization, file assembly, and administrative coordination for attorneys and growing law offices.",
  },
  {
    title: "Client Intake And File Review",
    description:
      "Structured intake systems that capture the right facts early, improve responsiveness, and reduce administrative drag.",
  },
  {
    title: "Research And Procedural Support",
    description:
      "Targeted legal and procedural research assistance for matters that require careful documentation and dependable follow-through.",
  },
];

const seoPhrases = [
  "Professional Paralegal Services in Upstate SC",
  "Greenville SC paralegal support",
  "Legal document preparation in Greenville",
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <StructuredData brand={brand} />

      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              PP
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {brand.city}, {brand.region}
              </p>
              <p className="font-serif text-xl text-slate-950">{brand.name}</p>
            </div>
          </a>

          <nav aria-label="Primary" className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#services">
              Services
            </a>
            <a className="transition hover:text-slate-950" href="#about">
              About
            </a>
            <a className="transition hover:text-slate-950" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Schedule a Consultation
          </a>
        </div>
      </header>

      <main id="top">
        <HeroSection brand={brand} />
        <ServicesSection brand={brand} services={services} seoPhrases={seoPhrases} />
        <AboutSection brand={brand} />
        <ContactSection brand={brand} />
      </main>

      <Footer brand={brand} />
    </div>
  );
}
