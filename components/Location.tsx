export default function Location() {
  return (
    <section
      id="location"
      className="scroll-mt-20 bg-[#efe3d9] px-6 py-24 text-center"
    >
      {/* Hauptüberschrift der Location-Section */}
      <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
        Location
      </h2>

      {/* Adresse der Hochzeitslocation */}
      <p className="mt-6 text-[#2b2723]/70">
        Wallenburg, 83714 Miesbach
      </p>

      {/* Eingebettete Google Maps Karte */}
      <iframe
        title="Google Maps Wallenburg"
        className="mx-auto mt-10 h-[320px] w-full max-w-3xl rounded-sm shadow-lg"
        src="https://www.google.com/maps?q=Wallenburg,83714%20Miesbach&z=12&output=embed"
      />
    </section>
  );
}