export default function Timeline() {
  // Ablaufpunkte des Hochzeitstags
  const timelineItems = [
    {
      time: "13:00 Uhr",
      title: "Trauung",
      description:
        "Wir geben uns das Ja-Wort und starten gemeinsam in unser neues Kapitel.",
      icon: "♡",
    },
    {
      time: "14:30 Uhr",
      title: "Sektempfang",
      description:
        "Wir stoßen an und genießen den ersten gemeinsamen Moment mit euch.",
      icon: "🥂",
    },
    {
      time: "18:00 Uhr",
      title: "Abendessen",
      description:
        "Freut euch auf gutes Essen, schöne Gespräche und gemeinsame Erinnerungen.",
      icon: "♨",
    },
    {
      time: "20:00 Uhr",
      title: "Party",
      description:
        "Jetzt wird gefeiert, getanzt, gelacht und der Abend unvergesslich gemacht.",
      icon: "♪",
    },
  ];

  return (
    <section
      id="timeline"
      className="scroll-mt-20 bg-[#fbf7f1] px-6 py-32 text-center"
    >
      {/* Oberer Titelbereich */}
      <div className="mx-auto max-w-3xl">
        {/* Kleine Abschnittsüberschrift */}
        <p className="mb-4 text-lg uppercase tracking-[0.45em] text-[#8e7a63]">
          Ablauf
        </p>

        {/* Designelement */}
        <div className="mb-7 flex items-center justify-center gap-5 text-[#c49a5d]">
          <span className="h-px w-24 bg-[#c49a5d]/70" />
          <span className="text-2xl">♡</span>
          <span className="h-px w-24 bg-[#c49a5d]/70" />
        </div>

        {/* Hauptüberschrift */}
        <h2 className="font-serif text-4xl font-light leading-[1.2] tracking-[0.08em] text-[#2b2723] sm:text-5xl">
          Unser besonderer Tag
        </h2>

        {/* Florales Designelement */}
        <div className="mt-8 flex items-center justify-center gap-4 text-[#c49a5d]/80">
          {/* Linkes Ornament */}
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

          {/* Herz */}
          <span className="text-xl">♥</span>

          {/* Rechtes Ornament */}
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

        {/* Einleitungstext */}
        <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#2b2723]/70">
          Wir freuen uns darauf, diesen besonderen Tag gemeinsam mit euch zu
          feiern.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-4">
        {/* Horizontale Verbindungslinie auf großen Bildschirmen */}
        <div className="absolute left-0 right-0 top-[73px] hidden h-px bg-[#c49a5d]/35 md:block" />

        {timelineItems.map((item) => (
          <div key={item.time} className="relative">
            {/* Uhrzeit */}
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#9a6f3d]">
              {item.time}
            </p>

            {/* Icon-Kreis */}
            <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#c49a5d]/55 bg-[#fbf7f1] shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
              <span className="text-3xl text-[#c49a5d]">
                {item.icon}
              </span>
            </div>

            {/* Titel */}
            <h3 className="mt-8 font-serif text-3xl font-light italic text-[#c49a5d]">
              {item.title}
            </h3>

            {/* Beschreibung */}
            <p className="mx-auto mt-5 max-w-[230px] text-sm leading-7 text-[#2b2723]/70">
              {item.description}
            </p>

            {/* Kleines Designelement unten */}
            <div className="mt-8 flex items-center justify-center gap-3 text-[#c49a5d]">
              <span className="h-px w-8 bg-[#c49a5d]/60" />
              <span className="text-sm">♡</span>
              <span className="h-px w-8 bg-[#c49a5d]/60" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}