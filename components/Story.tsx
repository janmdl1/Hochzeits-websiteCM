export default function Story() {
  // Story-Absätze
  const storyParagraphs = [
    "Hier kommt eure persönliche Geschichte hinein. Wie ihr euch kennengelernt habt, was euch verbindet und warum dieser Tag für euch so besonders ist.",

    "Nach vielen gemeinsamen Momenten, Abenteuern und Erinnerungen freuen wir uns darauf, diesen besonderen Tag mit euch zu feiern.",

    "Wir können es kaum erwarten, mit euch zu lachen, zu tanzen und unvergessliche Erinnerungen zu schaffen.",
  ];

  return (
    <section
      id="story"
      className="relative overflow-hidden px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
        {/* Bilder */}
        <div className="relative mx-auto h-[520px] w-full max-w-md">
          <img
            src="/floral-corner-left.png"
            alt=""
            className="absolute -left-10 bottom-[120px] z-30 w-[300px]"
          />

          <img
            src="/floral-corner-right.png"
            alt=""
            className="absolute -right-12 top-[168px] z-40 w-[300px]"
          />

          <img
            src="/couple-2.jpeg"
            alt="Christina und Marc"
            className="absolute left-0 top-0 h-[360px] w-[280px] object-cover shadow-xl"
          />

          <img
            src="/couple-1.jpg"
            alt="Christina und Marc"
            className="absolute bottom-0 right-0 h-[320px] w-[250px] object-cover shadow-xl"
          />
        </div>

        {/* Textbereich */}
        <div className="relative">
          <div className="relative z-10 border-l border-[#d4af7f]/60 pl-8">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#2b2723]/45">
              Unsere Geschichte
            </p>

            <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
              Wie im Film
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-8 text-[#2b2723]/75">
              {storyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}