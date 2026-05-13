export default function FAQ() {
  // FAQ-Einträge
  const faqItems = [
    {
      question: "Bis wann sollen wir zu- oder absagen?",
      answer:
        "Bitte gebt uns bis zum angegebenen Datum Bescheid, ob ihr dabei sein könnt.",
    },

    {
      question: "Gibt es einen Dresscode?",
      answer:
        "Kommt festlich gekleidet. Helle Sommerfarben passen besonders gut.",
    },

    {
      question: "Können Kinder mitgebracht werden?",
      answer:
        "Diese Information könnt ihr hier individuell ergänzen.",
    },

    {
      question: "Gibt es Parkmöglichkeiten?",
      answer:
        "Informationen zur Anreise und zu Parkplätzen ergänzen wir hier.",
    },
  ];

  return (
    <section id="faq" className="px-6 py-24">
      <h2 className="text-center font-serif text-4xl font-light uppercase tracking-[0.2em]">
        Fragen
      </h2>

      <div className="mx-auto mt-12 max-w-3xl space-y-8">
        {faqItems.map((item) => (
          <div key={item.question}>
            <h3 className="font-medium">{item.question}</h3>

            <p className="mt-2 text-[#2b2723]/75">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}