export default function Gallery() {
  // Beispielbilder der Galerie
  const galleryImages = [
    "/couple-1.jpg",
    "/couple-2.jpeg",
    "/couple-1.jpg",
  ];

  return (
    <section id="gallery" className="px-6 py-24 text-center">
      <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
        Galerie
      </h2>

      {/* Upload-Bereich */}
      <div className="mx-auto mt-12 max-w-xl border border-dashed border-[#d4af7f] px-6 py-10">
        <p className="text-sm uppercase tracking-[0.25em]">
          Fotos hochladen
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          className="mt-6 w-full"
        />
      </div>

      {/* Galerie */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Hochzeitsbild"
            className="h-[320px] w-full object-cover shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}