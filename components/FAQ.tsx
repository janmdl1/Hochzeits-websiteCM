export default function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[#efe3d9] px-6 py-24"
    >
      {/* Hauptüberschrift der FAQ-Section */}
      <h2 className="text-center font-serif text-4xl font-light uppercase tracking-[0.2em]">
        Fragen
      </h2>

      {/* Fragen und Antworten */}
      <div className="mx-auto mt-12 max-w-3xl space-y-8 text-sm leading-7 text-[#2b2723]/75">
        <div>
          <h3 className="font-medium text-[#2b2723]">
            Bis wann sollen wir zu- oder absagen?
          </h3>
          <p className="mt-2">
            Bitte gebt uns bis zum angegebenen Datum Bescheid, ob ihr dabei sein
            könnt.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-[#2b2723]">
            Gibt es einen Dresscode?
          </h3>
          <p className="mt-2">
            Kommt festlich gekleidet. Helle, elegante Sommerfarben passen
            besonders gut zu unserem Tag.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-[#2b2723]">
            Können Kinder mitgebracht werden?
          </h3>
          <p className="mt-2">
            Diese Information könnt ihr hier individuell ergänzen.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-[#2b2723]">
            Gibt es Parkmöglichkeiten?
          </h3>
          <p className="mt-2">
            Informationen zur Anreise und zu Parkplätzen ergänzen wir hier.
          </p>
        </div>
      </div>
    </section>
  );
}