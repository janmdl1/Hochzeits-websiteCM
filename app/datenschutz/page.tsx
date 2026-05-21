export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#fbf7f1] px-6 py-28 text-[#2b2723]">
      <div className="mx-auto max-w-3xl">
        {/* Titel */}
        <div className="mt-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#9a6f3d]">
            Rechtliches
          </p>

          <div className="mt-4 flex items-center justify-center gap-5 text-[#c49a5d]">
            <span className="h-px w-20 bg-[#c49a5d]/60" />
            <span className="text-2xl">♡</span>
            <span className="h-px w-20 bg-[#c49a5d]/60" />
          </div>

          <h1 className="mt-8 font-serif text-5xl font-light tracking-[0.08em]">
            Datenschutz
          </h1>
        </div>

        {/* Inhalt */}
        <div className="mt-20 space-y-12 text-sm leading-8 text-[#2b2723]/75">
          <section>
            <h2 className="mb-4 font-serif text-2xl text-[#2b2723]">
              Allgemeine Hinweise
            </h2>

            <p>
              Der Schutz eurer persönlichen Daten ist uns wichtig. Personenbezogene
              Daten werden auf dieser Website ausschließlich im notwendigen Umfang
              verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-[#2b2723]">
              Erhebung personenbezogener Daten
            </h2>

            <p>
              Im Rahmen der Zu- und Absage können personenbezogene Daten wie
              Name, E-Mail-Adresse oder Essenswünsche erhoben werden.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-[#2b2723]">
              Verwendung der Daten
            </h2>

            <p>
              Die Daten werden ausschließlich zur Organisation unserer Hochzeit
              verwendet und nicht an Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-[#2b2723]">
              Hochgeladene Bilder
            </h2>

            <p>
              Über die Galerie hochgeladene Bilder können im Rahmen der
              Hochzeitswebsite verwendet und angezeigt werden.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-[#2b2723]">
              Externe Dienste
            </h2>

            <p>
              Diese Website kann externe Dienste wie Google Maps verwenden.
              Dabei können technische Daten an die jeweiligen Anbieter
              übertragen werden.
            </p>
          </section>
        </div>

        {/* Zurück-Link */}
        <div className="mt-12 pb-24 text-center">
        <a
            href="/"
            className="text-sm uppercase tracking-[0.3em] text-[#9a6f3d] transition hover:text-[#c49a5d]"
        >
            ← Zurück zur Hochzeit
        </a>
        </div>
      </div>
    </main>
  );
}