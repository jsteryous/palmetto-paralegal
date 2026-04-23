const baseUrl = "https://www.palmettoparalegal.com";

export default function StructuredData({ brand }) {
  const foundingYear = new Date().getFullYear() - brand.yearsExperience;

  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${baseUrl}/#business`,
    name: brand.name,
    url: baseUrl,
    email: brand.email,
    telephone: brand.phone,
    priceRange: "$$",
    foundingDate: `${foundingYear}-01-01`,
    slogan: "Title Search Specialists",
    description:
      "Title search overflow and paralegal support for solo attorneys and small firms in Greenville and Upstate South Carolina. Attorney-ready reports covering deed chain, liens, easements, and exceptions, backed by 20+ years of property records experience.",
    areaServed: [
      { "@type": "City", name: "Greenville", containedInPlace: { "@type": "State", name: "South Carolina" } },
      { "@type": "City", name: "Spartanburg" },
      { "@type": "City", name: "Anderson" },
      { "@type": "City", name: "Easley" },
      { "@type": "AdministrativeArea", name: "Upstate South Carolina" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "105 River Street",
      addressLocality: brand.city,
      addressRegion: brand.region,
      postalCode: "29601",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paralegal &amp; Title Search Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Title Search",
            serviceType: "Real estate title search",
            description:
              "Full chain-of-title search with deed history, lien review, easements, and an attorney-ready summary.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deed &amp; Lien Research",
            description: "Targeted deed, mortgage, judgment, and tax lien research with source documents.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Property Document Preparation",
            description: "Clean packets for real estate matters, including legal descriptions and supporting exhibits.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Overflow Paralegal Support",
            description: "Flexible paralegal capacity for busy periods — intake, filings, and document prep.",
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: brand.name,
    publisher: { "@id": `${baseUrl}/#business` },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
