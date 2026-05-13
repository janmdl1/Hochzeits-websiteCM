export default function Location() {
  // Adresse der Hochzeitslocation
  const locationName = "Wallenburg";
  const locationAddress = "Wallenburg, 83714 Miesbach";

  // Google-Maps-Link zur Routenplanung
  const routeUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Wallenburg%2C%2083714%20Miesbach";

  // Informationskarten
  const locationInfos = [
    {
      icon: "⌖",
      title: "Anreise",
      text: "Die Location ist gut mit dem Auto erreichbar. Bitte plant für die Anfahrt ausreichend Zeit ein.",
    },
    {
      icon: "P",
      title: "Parken",
      text: "Parkmöglichkeiten befinden sich direkt an oder in der Nähe der Location.",
    },
    {
      icon: "↝",
      title: "Shuttle",
      text: "Nach der Feier bringt euch ein kostenloser Shuttlebus zum etwa 800 m entfernten Hotel.",
    },
  ];

  return (
    <section
      id="location"
      className="relative scroll-mt-20 overflow-hidden bg-[#f3ece4] px-6 py-32 text-center"
    >
      {/* Linke vertikale Designlinie */}
      <div className="absolute left-10 top-24 hidden h-[78%] w-px bg-[#c49a5d]/25 xl:block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>

        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
      </div>

      {/* Rechte vertikale Designlinie */}
      <div className="absolute right-10 top-24 hidden h-[78%] w-px bg-[#c49a5d]/25 xl:block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>

        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
      </div>

      {/* Oberer Titelbereich */}
      <div className="mx-auto max-w-3xl">
        {/* Kleine Abschnittsüberschrift */}
        <p className="mb-4 text-base uppercase tracking-[0.45em] text-[#8e7a63]">
          Location
        </p>

        {/* Oberes Designelement */}
        <div className="mb-7 flex items-center justify-center gap-5 text-[#c49a5d]">
          <span className="h-px w-24 bg-[#c49a5d]/70" />
          <span className="text-2xl">♡</span>
          <span className="h-px w-24 bg-[#c49a5d]/70" />
        </div>

        {/* Hauptüberschrift */}
        <h2 className="font-serif text-4xl font-light leading-[1.2] tracking-[0.08em] text-[#2b2723] sm:text-5xl">
          Unser besonderer Ort
        </h2>

        {/* Florales Designelement */}
        <div className="mt-8 flex items-center justify-center gap-4 text-[#c49a5d]/80">
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

        {/* Beschreibung */}
        <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#2b2723]/70">
          An diesem Ort feiern wir unsere Liebe und schaffen gemeinsame
          Erinnerungen, die bleiben.
        </p>
      </div>

      {/* Hauptinhalt */}
      {/* Google Maps Karte */}
<div className="relative mx-auto mt-20 max-w-6xl p-3">
  {/* Doppelter Rahmen */}
  <div className="pointer-events-none absolute inset-0 border border-[#c49a5d]/35" />
  <div className="pointer-events-none absolute inset-[10px] border border-[#d4af7f]/20" />

  <iframe
    title="Google Maps Wallenburg"
    className="relative z-10 h-[420px] w-full rounded-sm"
    src="https://www.google.com/maps?q=Wallenburg,83714%20Miesbach&z=14&output=embed"
    loading="lazy"
  />
</div>

{/* Locationdetails */}
<div className="relative mx-auto mt-16 grid max-w-6xl items-center gap-14 lg:grid-cols-2">
  {/* Bild der Location */}
  <div className="relative p-3">
    <div className="pointer-events-none absolute inset-0 border border-[#c49a5d]/35" />
    <div className="pointer-events-none absolute inset-[10px] border border-[#d4af7f]/20" />

    <img
      src="/Scheune.png"
      alt="Hochzeitslocation Wallenburg"
      className="relative z-10 h-[420px] w-full rounded-sm object-cover"
    />
  </div>

  {/* Informationsbereich */}
  <div className="relative px-4 py-6 text-center">
    {/* Pin-Kreis */}
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c49a5d]/50 text-3xl text-[#c49a5d]">
      ⌖
    </div>

    {/* Name der Location */}
    <h3 className="mt-6 font-serif text-4xl font-light italic text-[#c49a5d]">
      {locationName}
    </h3>

    {/* Adresse */}
    <p className="mt-4 text-sm leading-7 text-[#2b2723]/75">
      {locationAddress}
    </p>

    {/* Route planen */}
    <a
      href={routeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto mt-8 inline-flex items-center justify-center rounded-full border border-[#c49a5d]/60 px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#2b2723]/80 transition duration-300 hover:bg-[#c49a5d]/20 hover:text-[#2b2723]"
    >
      Route planen
    </a>

    {/* Trennlinie */}
    <div className="my-10 flex items-center justify-center gap-4 text-[#c49a5d]">
      <span className="h-px w-24 bg-[#c49a5d]/50" />
      <span className="text-sm">♥</span>
      <span className="h-px w-24 bg-[#c49a5d]/50" />
    </div>

    {/* Informationskarten */}
    <div className="grid gap-8 sm:grid-cols-3">
      {locationInfos.map((item) => (
        <div key={item.title}>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c49a5d]/45 text-lg text-[#c49a5d]">
            {item.icon}
          </div>

          <h4 className="mt-4 text-xs uppercase tracking-[0.28em] text-[#9a6f3d]">
            {item.title}
          </h4>

          <p className="mt-3 text-xs leading-6 text-[#2b2723]/65">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Shuttle-Hinweis */}
<div className="relative mx-auto mt-16 max-w-5xl border-t border-[#c49a5d]/35 pt-10 text-center">
  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c49a5d]/45 text-2xl text-[#c49a5d]">
    ♡
  </div>

  <h4 className="mt-5 font-serif text-2xl font-light italic text-[#c49a5d]">
    Unser Tipp
  </h4>

  <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#2b2723]/70">
    Genießt den Abend entspannt. Für die Heimfahrt zum nahegelegenen Hotel
    steht nach der Hochzeit ein kostenloser Shuttlebus bereit.
  </p>
</div>
    </section>
  );
}