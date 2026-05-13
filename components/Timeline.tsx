export default function Timeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-20 bg-[#fbf7f1] px-6 py-24 text-center"
    >
      {/* Hauptüberschrift der Timeline-Section */}
      <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
        Ablauf
      </h2>

      {/* Zeitlicher Ablauf des Hochzeitstags */}
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
  );
}