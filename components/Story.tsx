export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(212,175,127,0.18),transparent_34%),linear-gradient(180deg,#f6eadf_0%,#efe3d9_55%,#fbf7f1_100%)] px-6 py-24"
    >
      {/* Inhalt: Bildbereich links, Textbereich rechts */}
      <div className="mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
        {/* Bild-Collage */}
        <div className="relative mx-auto h-[520px] w-full max-w-md">
          {/* Florales Dekoelement links */}
          <img
            src="/floral-corner-left.png"
            alt=""
            className="pointer-events-none absolute -left-10 bottom-[120px] z-30 w-[300px] opacity-100"
          />

          {/* Florales Dekoelement rechts */}
          <img
            src="/floral-corner-right.png"
            alt=""
            className="pointer-events-none absolute -right-12 top-[168px] z-40 w-[300px] opacity-95"
          />

          {/* Oberes Paarbild */}
          <img
            src="/couple-2.jpeg"
            alt="Christina und Marc"
            className="absolute left-0 top-0 z-0 h-[360px] w-[280px] rounded-sm object-cover shadow-xl"
          />

          {/* Unteres Paarbild */}
          <img
            src="/couple-1.jpg"
            alt="Christina und Marc"
            className="absolute bottom-0 right-0 z-30 h-[320px] w-[250px] rounded-sm object-cover shadow-xl"
          />
        </div>

        {/* Textbereich */}
        <div className="relative">
          {/* Transparenter Hintergrund hinter dem Text */}
          <div className="absolute -inset-8 -z-0 rounded-sm bg-white/25 backdrop-blur-[1px]" />

          {/* Textinhalt mit linker Akzentlinie */}
          <div className="relative z-10 border-l border-[#d4af7f]/60 pl-8">
            {/* Kleine Abschnittsüberschrift */}
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#2b2723]/45">
              Unsere Geschichte
            </p>

            {/* Hauptüberschrift */}
            <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em] text-[#2b2723]">
              Wie im Film
            </h2>

            {/* Fließtext */}
            <div className="mt-8 space-y-5 text-sm leading-8 text-[#2b2723]/75">
              <p>
                Hier kommt eure persönliche Geschichte hinein. Wie ihr euch
                kennengelernt habt, was euch verbindet und warum dieser Tag für
                euch so besonders ist.
              </p>

              <p>
                Nach vielen gemeinsamen Momenten, Abenteuern und Erinnerungen
                freuen wir uns darauf, diesen besonderen Tag mit euch zu feiern.
              </p>

              <p>
                Wir können es kaum erwarten, mit euch zu lachen, zu tanzen und
                unvergessliche Erinnerungen zu schaffen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}