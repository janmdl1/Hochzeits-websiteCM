export default function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-[#efe3d9] px-6 py-24 text-center"
    >
      {/* Hauptüberschrift der Galerie-Section */}
      <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
        Galerie
      </h2>

      {/* Beschreibung für Gäste */}
      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#2b2723]/70">
        Nach der Hochzeit findet ihr hier eine Auswahl unserer schönsten
        Erinnerungen. Ihr könnt außerdem eure eigenen Fotos mit uns teilen.
      </p>

      {/* Upload-Bereich für Gästefotos */}
      <div className="mx-auto mt-12 max-w-xl border border-dashed border-[#d4af7f] bg-white/40 px-6 py-10">
        <p className="text-sm uppercase tracking-[0.25em] text-[#2b2723]/60">
          Fotos hochladen
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          className="mt-6 w-full text-sm text-[#2b2723]/70"
        />

        <p className="mt-4 text-xs leading-6 text-[#2b2723]/55">
          Der Upload ist aktuell nur als sichtbares Feld angelegt. Für eine
          echte Speicherung braucht ihr später noch eine technische Anbindung.
        </p>
      </div>

      {/* Beispiel-Galerie bis echte Hochzeitsfotos vorhanden sind */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
        <img
          src="/couple-1.jpg"
          alt="Beispielbild Hochzeit"
          className="h-[320px] w-full rounded-sm object-cover shadow-lg"
        />

        <img
          src="/couple-2.jpeg"
          alt="Beispielbild Hochzeit"
          className="h-[320px] w-full rounded-sm object-cover shadow-lg"
        />

        <img
          src="/couple-1.jpg"
          alt="Beispielbild Hochzeit"
          className="h-[320px] w-full rounded-sm object-cover shadow-lg"
        />
      </div>
    </section>
  );
}