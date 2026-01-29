import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { company, siteConfig } from "@/data/visual/sample";
import { generateOrganizationSchema, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.siteDescription,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Organization schema for LLMO
const organizationSchema = generateOrganizationSchema({
  name: company.name,
  description: company.businessDescription,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/logo.png`,
  address: {
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.prefecture,
    postalCode: company.address.postalCode,
  },
  telephone: company.phone,
  email: company.email,
  foundingDate: company.establishedYear.toString(),
  numberOfEmployees: company.employees,
});

export default function VisualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-template="visual">
      <JsonLd data={organizationSchema} />
      <Header companyName={company.name} templateType="visual" />
      <main>{children}</main>
      <Footer company={company} />
    </div>
  );
}
