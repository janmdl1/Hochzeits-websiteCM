export default function Timeline() {
  // Zeitlicher Ablauf der Hochzeit
  const timelineItems = [
    ["14:00", "Trauung"],
    ["15:30", "Sektempfang"],
    ["18:00", "Abendessen"],
    ["20:00", "Party"],
  ];

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
        {timelineItems.map(([time, event]) => (
          <p key={time}>
            <span className="font-medium">{time}</span> – {event}
          </p>
        ))}
      </div>
    </section>
  );
}