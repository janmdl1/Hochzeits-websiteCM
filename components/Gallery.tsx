"use client";

import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  // Beispielbilder für die Galerie
  const galleryImages = [
    "/Paarbild1.png",
    "/Paarbild2.png",
    "/gifts.png",
    "/Paarbild1.png",
    "/Paarbild2.png",
    "/gifts.png",
  ];

  // Aktives Bild in der Bildschirmmitte
  const [activeImage, setActiveImage] = useState(0);

  // Referenzen für Scrollbereich und Bilder
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Ermittelt automatisch das Bild in der Mitte
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const updateActiveImage = () => {
      const containerRect = container.getBoundingClientRect();

      const containerCenter =
        containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      imageRefs.current.forEach((image, index) => {
        if (!image) return;

        const imageRect = image.getBoundingClientRect();

        const imageCenter =
          imageRect.left + imageRect.width / 2;

        const distance = Math.abs(
          containerCenter - imageCenter
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveImage(closestIndex);
    };

    // Initialer Aufruf
    updateActiveImage();

    // Scroll- und Resize-Events
    container.addEventListener("scroll", updateActiveImage);

    window.addEventListener("resize", updateActiveImage);

    return () => {
      container.removeEventListener(
        "scroll",
        updateActiveImage
      );

      window.removeEventListener(
        "resize",
        updateActiveImage
      );
    };
  }, []);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-20 overflow-hidden bg-[#fbf7f1] px-6 py-32 text-center"
    >
      {/* Linke vertikale Designlinie */}
      <div className="absolute left-10 top-24 hidden h-[82%] w-px bg-[#c49a5d]/25 xl:block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>

        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
      </div>

      {/* Rechte vertikale Designlinie */}
      <div className="absolute right-10 top-24 hidden h-[82%] w-px bg-[#c49a5d]/25 xl:block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>

        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
      </div>

      {/* Titelbereich */}
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-base uppercase tracking-[0.45em] text-[#8e7a63]">
          Galerie
        </p>

        {/* Oberes Designelement */}
        <div className="mb-7 flex items-center justify-center gap-5 text-[#c49a5d]">
          <span className="h-px w-24 bg-[#c49a5d]/70" />

          <span className="text-2xl">♡</span>

          <span className="h-px w-24 bg-[#c49a5d]/70" />
        </div>

        {/* Hauptüberschrift */}
        <h2 className="font-serif text-4xl font-light leading-[1.2] tracking-[0.05em] text-[#2b2723] sm:text-6xl">
          Unsere schönsten Momente
        </h2>

        {/* Florales Designelement */}
        <div className="mt-8 flex items-center justify-center gap-5 text-[#c49a5d]/80">
          {/* Linker Zweig */}
          <svg width="90" height="24" viewBox="0 0 90 24" fill="none">
            <path
              d="M88 12H2"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M14 12C18 8 22 7 27 8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M26 12C30 16 34 17 39 16"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M38 12C42 8 46 7 51 8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M50 12C54 16 58 17 63 16"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-2xl">♡</span>

          {/* Rechter Zweig */}
          <svg width="90" height="24" viewBox="0 0 90 24" fill="none">
            <path
              d="M2 12H88"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M14 12C18 8 22 7 27 8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M26 12C30 16 34 17 39 16"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M38 12C42 8 46 7 51 8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M50 12C54 16 58 17 63 16"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Uploadbereich */}
      <div className="mx-auto mt-24 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
          Teilt eure Erinnerungen mit uns
        </p>

        <div className="mt-4 text-xl text-[#c49a5d]">♥</div>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#2b2723]/70">
          Ladet hier eure schönsten Momente und Schnappschüsse von unserem
          besonderen Tag hoch.
        </p>

        {/* Uploadfeld */}
        <label className="mx-auto mt-12 flex min-h-[320px] cursor-pointer flex-col items-center justify-center border border-dashed border-[#c49a5d]/60 px-8 py-10 transition duration-300 hover:bg-[#c49a5d]/10">
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
          />

          {/* Upload-Symbol */}
          <div className="mb-8 flex items-center justify-center gap-5 text-[#c49a5d]/80">
            {/* Linker Zweig */}
            <svg width="70" height="28" viewBox="0 0 70 28" fill="none">
              <path
                d="M68 14C48 14 36 14 18 14"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />

              <path
                d="M30 14C24 8 18 6 10 7"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />

              <path
                d="M38 14C31 20 23 22 14 21"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>

            {/* Wolke */}
            <svg
              width="78"
              height="58"
              viewBox="0 0 78 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#c49a5d]"
            >
              <path
                d="M25 43H56C66 43 73 36 73 27C73 18 66 11 57 11C54 4 47 1 39 1C29 1 21 8 20 18C11 19 5 25 5 33C5 39 10 43 17 43H25Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M39 34V18"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />

              <path
                d="M31 26L39 18L47 26"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Rechter Zweig */}
            <svg width="70" height="28" viewBox="0 0 70 28" fill="none">
              <path
                d="M2 14C22 14 34 14 52 14"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />

              <path
                d="M40 14C46 8 52 6 60 7"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />

              <path
                d="M32 14C39 20 47 22 56 21"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
            Bilder hochladen
          </p>

          <p className="mt-3 text-sm text-[#2b2723]/60">
            oder per Drag & Drop hierher ziehen
          </p>

          <p className="mt-8 text-xs tracking-[0.12em] text-[#2b2723]/45">
            JPG, PNG oder HEIC · max. 20 MB pro Bild
          </p>
        </label>

        {/* Hinweis */}
        <div className="mx-auto mt-5 bg-[#efe3d9]/45 px-5 py-4 text-sm leading-7 text-[#2b2723]/65">
          Mit dem Hochladen stimmt ihr zu, dass wir eure Bilder später auf
          unserer Website teilen dürfen.
        </div>

        {/* Hashtag */}
        <div className="mt-10 text-center">
          <div className="text-xl text-[#c49a5d]">♥</div>

          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
            #ChristinaUndMarc
          </p>
        </div>
      </div>

      {/* Trennlinie */}
      <div className="mx-auto mt-16 flex max-w-5xl items-center justify-center gap-5 text-[#c49a5d]">
        <span className="h-px flex-1 bg-[#c49a5d]/35" />

        <span className="text-xl">♡</span>

        <span className="h-px flex-1 bg-[#c49a5d]/35" />
      </div>

      {/* Galerieüberschrift */}
      <div className="mt-16">
        <p className="text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
          Unsere Hochzeitserinnerungen
        </p>

        <div className="mt-4 text-xl text-[#c49a5d]">♥</div>
      </div>

      {/* Automatisch hervorgehobene Galerie */}
      <div
        ref={scrollContainerRef}
        className="mt-16 overflow-x-auto pb-14"
      >
        <div className="flex min-w-max items-center px-[45vw]">
          {galleryImages.map((image, index) => {
            const distance = Math.abs(index - activeImage);

            const sizeClass =
              distance === 0
                ? "z-30 scale-110 opacity-100"
                : distance === 1
                  ? "z-20 scale-95 opacity-80"
                  : "z-10 scale-85 opacity-55";

            return (
              <div
                key={`${image}-${index}`}
                ref={(element) => {
                  imageRefs.current[index] = element;
                }}
                className={`-ml-14 first:ml-0 shrink-0 overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.14)] transition duration-300 ${sizeClass}`}
              >
                <img
                  src={image}
                  alt={`Hochzeitsbild ${index + 1}`}
                  className="h-[380px] w-[260px] object-cover sm:w-[320px]"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Abschlusstext */}
      <div className="mx-auto mt-10 max-w-3xl text-center">
        <p className="font-serif text-3xl font-light italic leading-[1.4] text-[#2b2723]/75">
          Danke, dass ihr diesen Tag mit uns unvergesslich macht.
        </p>

        <div className="mt-8 flex items-center justify-center gap-5 text-[#c49a5d]/80">
          <span className="h-px w-20 bg-[#c49a5d]/50" />

          <span className="text-xl">♥</span>

          <span className="h-px w-20 bg-[#c49a5d]/50" />
        </div>
      </div>
    </section>
  );
}