export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f7f2ec] px-6 py-16 text-center">
      {/* Obere Trennlinie */}
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-center gap-5 text-[#c49a5d]/80">
          <span className="h-px flex-1 bg-[#c49a5d]/30" />
          <span className="text-xl">♡</span>
          <span className="h-px flex-1 bg-[#c49a5d]/30" />
        </div>
      </div>

      {/* Inhalt */}
      <div className="mx-auto mt-10 max-w-3xl">
        <p className="font-serif text-3xl font-light italic text-[#2b2723]/75">
          Wir freuen uns auf euch
        </p>

        <div className="mt-5 text-2xl text-[#c49a5d]">
          ♡
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
          Christina & Marc
        </p>

        <p className="mt-3 text-sm tracking-[0.25em] text-[#2b2723]/55">
          29. Mai 2027
        </p>

        {/* Links */}
        <div className="mt-10 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.22em] text-[#2b2723]/50">
          <a
            href="/impressum"
            className="transition hover:text-[#9a6f3d]"
          >
            Impressum
          </a>

          <span className="text-[#c49a5d]/40">|</span>

          <a
            href="/datenschutz"
            className="transition hover:text-[#9a6f3d]"
          >
            Datenschutz
          </a>
        </div>

        {/* Kleiner Abschlusstext */}
        <p className="mt-8 text-xs tracking-[0.15em] text-[#2b2723]/35">
          Mit Liebe gestaltet ♡
        </p>
      </div>
    </footer>
  );
}