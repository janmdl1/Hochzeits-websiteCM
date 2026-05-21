export default function ImpressumPage() {
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
            Impressum
          </h1>
        </div>

        {/* Inhalt */}
        <div className="mt-20 space-y-12 text-sm leading-8 text-[#2b2723]/75">
          <section>
            <h2 className="mb-4 font-serif text-2xl text-[#2b2723]">
              Angaben gemäß § 5 TMG
            </h2>

            <p>
              Christina Eberlein <br />
              Marc Linke <br />
              Gronsdorferstraße 9m <br />
              85540 Haar
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-[#2b2723]">
              Kontakt
            </h2>

            <p>
              E-Mail: kontakt@hochzeit.de
              <br />
              Telefon: +49 123 456789
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-2xl text-[#2b2723]">
              Haftung für Inhalte
            </h2>

            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
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