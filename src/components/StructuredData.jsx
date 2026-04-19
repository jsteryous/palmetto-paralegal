const baseUrl = "https://www.palmettoparalegal.com";

export default function StructuredData({ brand }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: brand.name,
    url: baseUrl,
    email: brand.email,
    telephone: brand.phone,
    areaServed: [brand.city, brand.serviceArea],
    address: {
      "@type": "PostalAddress",
      streetAddress: "105 River Street",
      addressLocality: brand.city,
      addressRegion: brand.region,
      postalCode: "29601",
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 08:30-17:30",
    description:
      "Professional paralegal services in Greenville, SC for document preparation, intake support, case organization, and legal administrative assistance.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
