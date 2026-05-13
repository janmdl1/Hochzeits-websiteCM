import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7f1] text-[#2b2723]">
      <Hero />

      {/* STORY */}
      <section
        id="story"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(212,175,127,0.18),transparent_34%),linear-gradient(180deg,#f6eadf_0%,#efe3d9_55%,#fbf7f1_100%)] px-6 py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
          {/* Images */}
          <div className="relative mx-auto h-[520px] w-full max-w-md">
            <img
              src="/floral-corner-left.png"
              alt=""
              className="pointer-events-none absolute -left-10 bottom-[120px] z-30 w-[300px] opacity-100"
            />

            <img
              src="/floral-corner-right.png"
              alt=""
              className="pointer-events-none absolute -right-12 top-[168px] z-40 w-[300px] opacity-95"
            />

            <img
              src="/couple-2.jpeg"
              alt="Christina und Marc"
              className="absolute left-0 top-0 z-0 h-[360px] w-[280px] rounded-sm object-cover shadow-xl"
            />

            <img
              src="/couple-1.jpg"
              alt="Christina und Marc"
              className="absolute bottom-0 right-0 z-30 h-[320px] w-[250px] rounded-sm object-cover shadow-xl"
            />
          </div>

          {/* Text */}
          <div className="relative">
            <div className="absolute -inset-8 -z-0 rounded-sm bg-white/25 backdrop-blur-[1px]" />

            <div className="relative z-10 border-l border-[#d4af7f]/60 pl-8">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#2b2723]/45">
                Unsere Geschichte
              </p>

              <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em] text-[#2b2723]">
                Wie im Film
              </h2>

              <div className="mt-8 space-y-5 text-sm leading-8 text-[#2b2723]/75">
                <p>
                  Hier kommt eure persönliche Geschichte hinein. Wie ihr euch
                  kennengelernt habt, was euch verbindet und warum dieser Tag für euch
                  so besonders ist.
                </p>

                <p>
                  Nach vielen gemeinsamen Momenten, Abenteuern und Erinnerungen freuen
                  wir uns darauf, diesen besonderen Tag mit euch zu feiern.
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

      {/* ABLAUF */}
      <section
        id="ablauf"
        className="scroll-mt-20 bg-[#fbf7f1] px-6 py-24 text-center"
      >
        <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
          Ablauf
        </h2>

        <div className="mx-auto mt-12 max-w-xl space-y-6 text-[#2b2723]/75">
          <p><span className="font-medium">14:00</span> – Trauung</p>
          <p><span className="font-medium">15:30</span> – Sektempfang</p>
          <p><span className="font-medium">18:00</span> – Abendessen</p>
          <p><span className="font-medium">20:00</span> – Party</p>
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
          title="Google Maps Wallenburg"
          className="mx-auto mt-10 h-[320px] w-full max-w-3xl rounded-sm shadow-lg"
          src="https://www.google.com/maps?q=Wallenburg,83714%20Miesbach&z=12&output=embed"
        />
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