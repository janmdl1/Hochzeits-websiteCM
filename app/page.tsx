export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7f1] text-[#2b2723]">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-6 bg-[#fbf7f1]">
        {/* Floral background */}
        <img
          src="/floral.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-90"
        />

        {/* Navigation */}
        <nav className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-8 text-xs uppercase tracking-[0.18em] text-[#2b2723]/70">
          <a href="#story" className="hover:text-[#2b2723]">
            Wir
          </a>
          <span className="text-[#d4af7f]">|</span>

          <a href="#ablauf" className="hover:text-[#2b2723]">
            Ablauf
          </a>
          <span className="text-[#d4af7f]">|</span>

          <a href="#location" className="hover:text-[#2b2723]">
            Location
          </a>
          <span className="text-[#d4af7f]">|</span>

          <a href="#rsvp" className="hover:text-[#2b2723]">
            Zusagen
          </a>
          <span className="text-[#d4af7f]">|</span>

          <a href="#geschenke" className="hover:text-[#2b2723]">
            Geschenke
          </a>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 mt-16 flex min-h-[80vh] flex-col items-center justify-center text-center sm:mt-20">
          {/* Name box */}
          <div className="relative mx-auto w-full max-w-[500px] px-8 py-10 sm:px-14 sm:py-14">
            {/* outer frame */}
            <div className="absolute inset-0 border border-[#d4af7f]" />

            {/* inner frame */}
            <div className="absolute inset-[10px] border border-[#d4af7f]" />

            {/* content */}
            <div className="relative">
              <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#2b2723]/60">
                Wir heiraten
              </p>

              <h1 className="font-serif font-light uppercase leading-[1.18] tracking-[0.12em]">
                <span className="block text-[2.35rem] sm:text-5xl md:text-6xl">
                  Christina
                </span>

                <span className="mt-3 block text-[2.35rem] sm:mt-4 sm:text-5xl md:text-6xl">
                  & Marc
                </span>
              </h1>

              {/* heart + lines */}
              <div className="mt-6 flex items-center justify-center gap-4 text-[#d4af7f]">
                <span className="h-px w-12 bg-[#d4af7f]" />
                <span className="text-lg">♡</span>
                <span className="h-px w-12 bg-[#d4af7f]" />
              </div>

              <p className="mt-6 text-sm tracking-[0.4em] text-[#2b2723]/70">
                12 | 07 | 2026
              </p>
            </div>
          </div>

          {/* arrow below box */}
          <a
            href="#story"
            className="mt-12 text-3xl font-light text-[#2b2723]/50 transition hover:translate-y-1"
          >
            ↓
          </a>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="relative scroll-mt-20 overflow-hidden bg-[#efe3d9] px-6 py-24"
      >
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
          {/* Images */}
          <div className="relative mx-auto h-[520px] w-full max-w-md">
            {/* Floral corner left */}
            <img
              src="/floral-corner-left.png"
              alt=""
              className="pointer-events-none absolute -left-10 bottom-30 z-30 w-[300px] opacity-100"
            />

            {/* Floral corner right */}
            <img
              src="/floral-corner-right.png"
              alt=""
              className="pointer-events-none absolute -right-12 top-42 z-40 w-[300px] opacity-95"
            />

            {/* Main image */}
            <img
              src="/couple-2.jpeg"
              alt="Christina und Marc"
              className="absolute left-0 top-0 z-0 h-[360px] w-[280px] rounded-sm object-cover shadow-lg"
            />

            {/* Second image */}
            <img
              src="/couple-1.jpg"
              alt="Christina und Marc"
              className="absolute bottom-0 right-0 z-30 h-[320px] w-[250px] rounded-sm object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
              Wie im Film
            </h2>

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
      </section>
      {/* ABLAUF */}
      <section
        id="ablauf"
        className="scroll-mt-20 bg-[#fbf7f1] px-6 py-24 text-center"
      >
        <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
          Ablauf
        </h2>

        <div className="mx-auto mt-12 max-w-xl space-y-6 text-[#2b2723]/75">
          <p>
            <span className="font-medium">14:00</span> – Trauung
          </p>
          <p>
            <span className="font-medium">15:30</span> – Sektempfang
          </p>
          <p>
            <span className="font-medium">18:00</span> – Abendessen
          </p>
          <p>
            <span className="font-medium">20:00</span> – Party
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="scroll-mt-20 bg-[#efe3d9] px-6 py-24 text-center"
      >
        <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
          Location
        </h2>

        <p className="mt-6 text-[#2b2723]/70">Wallenburg, 83714 Miesbach</p>

        <iframe
          className="mx-auto mt-10 h-[320px] w-full max-w-3xl rounded-sm shadow-lg"
          src="https://www.google.com/maps?q=Wallenburg,83714%20Miesbach&z=12&output=embed"
        ></iframe>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="scroll-mt-20 bg-[#fbf7f1] px-6 py-24 text-center"
      >
        <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
          Zu- oder Absage
        </h2>

        <form className="mx-auto mt-12 max-w-md space-y-4">
          <input
            type="text"
            placeholder="Dein Name"
            className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none"
          />

          <select className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none">
            <option>Ich komme</option>
            <option>Ich komme nicht</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#2b2723] py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-[#4a4037]"
          >
            Absenden
          </button>
        </form>
      </section>
    </main>
  );
}
