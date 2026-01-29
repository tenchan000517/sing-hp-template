import { Metadata } from "next";

// Base URL for the site
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

// Generate metadata for pages
export function generateMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/images/og-default.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// Organization Schema (JSON-LD)
export function generateOrganizationSchema({
  name,
  description,
  url,
  logo,
  address,
  telephone,
  email,
  foundingDate,
  numberOfEmployees,
  sameAs = [],
}: {
  name: string;
  description: string;
  url: string;
  logo: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry?: string;
  };
  telephone?: string;
  email?: string;
  foundingDate?: string;
  numberOfEmployees?: number;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url,
    logo,
    address: {
      "@type": "PostalAddress",
      ...address,
      addressCountry: address.addressCountry || "JP",
    },
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(foundingDate && { foundingDate }),
    ...(numberOfEmployees && {
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: numberOfEmployees,
      },
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
}

// JobPosting Schema (JSON-LD)
export function generateJobPostingSchema({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  hiringOrganization,
  jobLocation,
  baseSalary,
  experienceRequirements,
  educationRequirements,
  skills,
  benefits,
}: {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "TEMPORARY" | "INTERN";
  hiringOrganization: {
    name: string;
    sameAs: string;
    logo?: string;
  };
  jobLocation: {
    addressLocality: string;
    addressRegion: string;
    addressCountry?: string;
  };
  baseSalary?: {
    currency?: string;
    minValue: number;
    maxValue: number;
    unitText: "MONTH" | "YEAR" | "HOUR";
  };
  experienceRequirements?: string;
  educationRequirements?: string;
  skills?: string[];
  benefits?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    datePosted,
    ...(validThrough && { validThrough }),
    employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: hiringOrganization.name,
      sameAs: hiringOrganization.sameAs,
      ...(hiringOrganization.logo && { logo: hiringOrganization.logo }),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: jobLocation.addressLocality,
        addressRegion: jobLocation.addressRegion,
        addressCountry: jobLocation.addressCountry || "JP",
      },
    },
    ...(baseSalary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: baseSalary.currency || "JPY",
        value: {
          "@type": "QuantitativeValue",
          minValue: baseSalary.minValue,
          maxValue: baseSalary.maxValue,
          unitText: baseSalary.unitText,
        },
      },
    }),
    ...(experienceRequirements && { experienceRequirements }),
    ...(educationRequirements && { educationRequirements }),
    ...(skills && { skills: skills.join(", ") }),
    ...(benefits && { benefits }),
  };
}

// FAQPage Schema (JSON-LD)
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// BreadcrumbList Schema (JSON-LD)
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// WebSite Schema (JSON-LD)
export function generateWebSiteSchema({
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// JSON-LD Script Component Helper
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
