import { lazy, useState, Suspense } from "react";
const Lightbox = lazy(() => import("yet-another-react-lightbox"))
import "yet-another-react-lightbox/styles.css";

// Importamos imágenes
const thumbs = import.meta.glob('/src/assets/gallery/thumbs/*.webp', { eager: true });
const fulls = import.meta.glob('/src/assets/gallery/full/*.webp', { eager: true });

// Ordenar por nombre
const sortedThumbs = Object.entries(thumbs).sort(([a], [b]) => a.localeCompare(b));
const sortedFulls = Object.entries(fulls).sort(([a], [b]) => a.localeCompare(b));

// Crear array con thumb + HD
const images = sortedFulls.map(([_, full], i) => ({
  src: (full as any).default,
  thumb: (sortedThumbs[i][1] as any).default,
}));

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      {/* Grilla de thumbnails cuadradas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {images.map((img, i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden cursor-pointer rounded"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={img.thumb}
              loading="lazy"
              alt={`Galería ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox con imágenes en HD */}
      <Suspense fallback={<div className="text-center py-5">Cargando galería...</div>}>
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images.map(img => ({ src: img.src }))}
          />
        )}
      </Suspense>
    </>
  );
}

export default Gallery;
