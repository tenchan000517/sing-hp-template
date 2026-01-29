"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Photo {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

interface PhotoGridProps {
  photos: Photo[];
  columns?: 2 | 3 | 4;
}

export default function PhotoGrid({ photos, columns = 4 }: PhotoGridProps) {
  // Distribute photos into columns for masonry effect
  const getColumnPhotos = () => {
    const cols: Photo[][] = Array.from({ length: columns }, () => []);
    photos.forEach((photo, index) => {
      cols[index % columns].push(photo);
    });
    return cols;
  };

  const columnPhotos = getColumnPhotos();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {columnPhotos.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((photo, photoIndex) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (colIndex * column.length + photoIndex) * 0.05,
                  }}
                  className="photo-card group relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400 + Math.random() * 200}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="photo-card-overlay absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm text-white">{photo.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
