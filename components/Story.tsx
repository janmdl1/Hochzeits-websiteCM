export default function Story() {
  // Story-Absätze
  const storyParagraphs = [
  "Manchmal begegnen sich zwei Menschen nicht zum ersten Mal, sondern zum ersten Mal richtig.",

  "Was mit einem gemeinsamen Abendessen begann, fühlte sich schnell nach Vertrautheit, Leichtigkeit und Zuhause an.",

  "Aus vielen kleinen Momenten wurde Schritt für Schritt etwas Großes: eine Liebe voller Vertrauen, Nähe und gemeinsamer Erinnerungen.",

  "Seitdem gehen wir gemeinsam durchs Leben, stehen immer füreinander ein und freuen uns darauf, unsere Zukunft Seite an Seite weiterzuschreiben.",
];

  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#f8f4ef] px-6 py-32"
    >
      {/* Hintergrundbild */}
      <img
        src="/floral_Story.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45 md:opacity-90"
      />

      {/* Inhalt */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
        {/* Textbereich */}
        <div className="relative order-2 md:order-1">
          {/* Textkarte */}
          <div className="relative bg-[#fbf7f1]/25 px-8 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-[6px] sm:px-12 md:px-14">
            {/* Doppelter Rahmen */}
            {/* Äußerer Rahmen */}
            <div className="pointer-events-none absolute inset-0 border border-[#c49a5d]/65 shadow-[0_0_25px_rgba(196,154,93,0.08)]" />

            {/* Innerer Rahmen */}
            <div className="pointer-events-none absolute inset-[10px] border border-[#d4af7f]/40" />

            {/* Rechte Designlinie an der Textkarte */}
            <div className="absolute -right-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-[#c49a5d]/70 md:block">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]">
                ✦
              </span>

              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]">
                ✦
              </span>
            </div>

            {/* Oberer Titelbereich */}
            <div className="mb-6 mt-6 text-center">
              <p className="mb-3 text-sm uppercase tracking-[0.45em] text-[#8e7a63]">
                Unsere Geschichte
              </p>

              <div className="flex items-center justify-center gap-5 text-[#c49a5d]">
                <span className="h-px w-20 bg-[#c49a5d]/70" />
                <span className="text-xl">♥</span>
                <span className="h-px w-20 bg-[#c49a5d]/70" />
              </div>
            </div>

            {/* Hauptüberschrift */}
            <h2 className="text-center font-serif text-5xl font-light leading-[1.2] tracking-[0.08em] text-[#2b2723]">
              Wie alles begann
            </h2>

            {/* Mittleres Designelement */}
            <div className="mt-7 flex items-center justify-center gap-5 text-[#c49a5d]">
              <span className="h-px w-20 bg-[#c49a5d]/70" />
              <span className="text-xl">♥</span>
              <span className="h-px w-20 bg-[#c49a5d]/70" />
            </div>

            {/* Story-Text */}
            <div className="mt-9 space-y-6 text-center text-sm leading-8 text-[#2b2723]/75">
              {storyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Unteres Designelement */}
            <div className="mt-10 flex items-center justify-center gap-5 text-[#c49a5d]">
              <span className="h-px w-20 bg-[#c49a5d]/70" />
              <span className="text-xl">♥</span>
              <span className="h-px w-20 bg-[#c49a5d]/70" />
            </div>
          </div>
        </div>

        {/* Bild-Collage */}
        <div className="relative order-1 mx-auto h-[620px] w-full max-w-[520px] md:order-2">
          {/* Goldener Rahmen hinter den Bildern */}
          <div className="absolute right-10 top-8 h-[430px] w-[310px] rotate-[6deg] border border-[#c49a5d]/45" />

          {/* Vertikale Designlinie rechts neben den Bildern */}
          <div className="absolute right-[-24px] top-10 hidden h-[480px] w-px bg-[#c49a5d]/55 md:block">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-sm text-[#c49a5d]">
              ✦
            </span>

            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-sm text-[#c49a5d]">
              ✦
            </span>
          </div>

          {/* Vertikale Designlinie links unten neben den Bildern */}
          <div className="absolute left-[-18px] bottom-6 hidden h-[180px] w-px bg-[#c49a5d]/40 md:block">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-sm text-[#c49a5d]/80">
              ✦
            </span>

            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-sm text-[#c49a5d]/80">
              ✦
            </span>
          </div>

          {/* Großes Hauptbild hinten */}
          <div className="absolute right-0 top-0 z-10 rotate-[-2deg] bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.14)]">
            <img
              src="/Paarbild1.png"
              alt="Christina und Marc"
              className="h-[420px] w-[320px] object-cover"
            />
          </div>

          {/* Vorderes kleineres Bild */}
          <div className="absolute bottom-0 left-6 z-30 rotate-[6deg] bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.16)]">
            <img
              src="/Paarbild2.png"
              alt="Christina und Marc"
              className="h-[320px] w-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}