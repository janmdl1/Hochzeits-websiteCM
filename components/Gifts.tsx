export default function Gifts() {
  return (
    <section
      id="gifts"
      className="relative overflow-hidden bg-[#f8f4ef] px-6 py-32 text-center"
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

      {/* Oberer Bildbereich */}
      <div className="relative mx-auto max-w-5xl overflow-hidden">
        {/* Doppelter Rahmen */}
        <div className="pointer-events-none absolute inset-0 z-20 border border-[#c49a5d]/35" />
        <div className="pointer-events-none absolute inset-[10px] z-20 border border-[#d4af7f]/20" />

        {/* Hintergrundbild */}
        <img
          src="/gifts.png"
          alt="Geschenke"
          className="h-[420px] w-full object-cover"
        />

        {/* Weicher Verlauf unten */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8f4ef] via-[#f8f4ef]/70 to-transparent" />
      </div>

      {/* Inhalt */}
      <div className="relative z-10 mx-auto -mt-20 max-w-4xl px-6 pb-10 pt-10">
        {/* Kleine Überschrift */}
        <p className="mb-4 text-base uppercase tracking-[0.45em] text-[#8e7a63]">
          Geschenke
        </p>

        {/* Oberes Designelement */}
        <div className="mb-7 flex items-center justify-center gap-5 text-[#c49a5d]">
          <span className="h-px w-24 bg-[#c49a5d]/70" />
          <span className="text-2xl">♡</span>
          <span className="h-px w-24 bg-[#c49a5d]/70" />
        </div>

        {/* Hauptüberschrift */}
        <h2 className="font-serif text-4xl font-light leading-[1.2] tracking-[0.03em] text-[#2b2723] sm:text-6xl">
          Eure Anwesenheit
          <br />
          ist unser schönstes Geschenk
        </h2>

        {/* Florales Designelement */}
        <div className="mt-10 flex items-center justify-center gap-4 text-[#c49a5d]/80">
          <div className="flex items-center gap-2">
            <span className="h-px w-10 bg-[#c49a5d]/50" />

            <svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-80"
            >
              <path
                d="M1 6C6 6 8 1 13 1C18 1 18 11 23 11C28 11 30 6 35 6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-xl">♥</span>

          <div className="flex items-center gap-2">
            <svg
              width="36"
              height="12"
              viewBox="0 0 36 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-80"
            >
              <path
                d="M1 6C6 6 8 1 13 1C18 1 18 11 23 11C28 11 30 6 35 6"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>

            <span className="h-px w-10 bg-[#c49a5d]/50" />
          </div>
        </div>

        {/* Text */}
        <div className="mx-auto mt-10 max-w-2xl space-y-6 text-sm leading-8 text-[#2b2723]/72">
          <p>
            Schön, dass ihr diesen besonderen Tag mit uns feiert,
            bedeutet uns sehr viel.
          </p>

          <p>
            Falls ihr uns darüber hinaus eine Freude machen möchtet,
            freuen wir uns über einen kleinen Beitrag
            für die Flitterwochen, unsere gemeinsame Zukunft und viele neue Erinnerungen.
          </p>
        </div>

        {/* Unteres Herz */}
        <div className="mt-10 text-2xl text-[#c49a5d]/80">
          ♥
        </div>
      </div>
    </section>
  );
}