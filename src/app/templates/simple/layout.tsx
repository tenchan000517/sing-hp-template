import { Metadata } from "next";
import { company, siteConfig } from "@/data/simple/sample";
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

export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-template="simple" className="bg-white">
      <JsonLd data={organizationSchema} />
      {/* シンプル型はヘッダーなしでミニマルに */}
      <main>{children}</main>
      {/* シンプルなフッター */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                {company.name}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {company.address.full}
              </p>
            </div>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} {company.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
