import { Metadata } from "next";
import GalleryFilter from "@/components/templates/visual/GalleryFilter";
import { company, galleryCategories, galleryPhotos } from "@/data/visual/sample";

export const metadata: Metadata = {
  title: "GALLERY",
  description: `${company.name}のフォトギャラリー。社員・オフィス・仕事風景・イベントの写真をご覧いただけます。`,
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-widest opacity-80">
            GALLERY
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">フォトギャラリー</h1>
          <p className="mt-4 text-lg opacity-90">
            私たちの日常を写真でお届けします
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[var(--color-bg-secondary)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <GalleryFilter
            categories={galleryCategories}
            photos={galleryPhotos}
          />
        </div>
      </section>
    </>
  );
}
