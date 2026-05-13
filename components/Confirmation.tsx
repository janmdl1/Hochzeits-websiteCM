export default function Confirmation() {
  return (
    <section
      id="confirmation"
      className="scroll-mt-20 bg-[#fbf7f1] px-6 py-24 text-center"
    >
      {/* Hauptüberschrift der Zusage-Section */}
      <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
        Zu- oder Absage
      </h2>

      {/* Einleitungstext */}
      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#2b2723]/70">
        Bitte gebt uns Bescheid, ob ihr an unserem besonderen Tag dabei sein
        könnt. So können wir besser planen.
      </p>

      {/* Formular für Rückmeldung der Gäste */}
      <form className="mx-auto mt-12 max-w-xl space-y-4 text-left">
        {/* Name der eingeladenen Person */}
        <input
          type="text"
          placeholder="Dein vollständiger Name"
          className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none"
        />

        {/* Teilnahmeentscheidung */}
        <select className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none">
          <option>Ich komme</option>
          <option>Ich komme nicht</option>
        </select>

        {/* Anzahl der Personen */}
        <select className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none">
          <option>Ich komme alleine</option>
          <option>Wir kommen zu zweit</option>
        </select>

        {/* Name der Begleitperson */}
        <input
          type="text"
          placeholder="Name der Begleitperson, falls vorhanden"
          className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none"
        />

        {/* Essenswunsch */}
        <select className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none">
          <option>Essenswunsch</option>
          <option>Fleisch</option>
          <option>Vegetarisch</option>
          <option>Vegan</option>
        </select>

        {/* Unverträglichkeiten */}
        <input
          type="text"
          placeholder="Allergien oder Unverträglichkeiten"
          className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none"
        />

        {/* Nachricht an das Brautpaar */}
        <textarea
          placeholder="Nachricht an uns"
          rows={4}
          className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none"
        />

        {/* Absende-Button */}
        <button
          type="submit"
          className="w-full bg-[#2b2723] py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-[#4a4037]"
        >
          Absenden
        </button>
      </form>
    </section>
  );
}