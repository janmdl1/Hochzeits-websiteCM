"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(2);

  const faqItems = [
    {
      question: "Wann beginnt die Hochzeit?",
      answer: "Die Trauung beginnt um 13:00 Uhr. Bitte seid rechtzeitig vor Ort.",
    },
    {
      question: "Gibt es Parkmöglichkeiten?",
      answer: "Ja, Parkmöglichkeiten befinden sich direkt an oder in der Nähe der Location.",
    },
    {
      question: "Gibt es einen Dresscode?",
      answer:
        "Wir freuen uns, wenn ihr euch festlich und elegant kleidet. Bitte vermeidet rein weiße Outfits – diese Farbe ist der Braut vorbehalten.",
    },
    {
      question: "Können Allergien berücksichtigt werden?",
      answer:
        "Ja. Bitte gebt Allergien oder Unverträglichkeiten direkt bei eurer Zu- oder Absage im Formular an.",
    },
    {
      question: "Gibt es vegetarisches oder veganes Essen?",
      answer:
        "Ja. Im Zusageformular könnt ihr euren Essenswunsch entsprechend auswählen.",
    },
    {
      question: "Gibt es Übernachtungsmöglichkeiten?",
      answer:
        "In der Nähe gibt es ein Hotel. Weitere Informationen findet ihr im Location-Bereich.",
    },
    {
      question: "Gibt es einen Shuttle-Service?",
      answer:
        "Ja. Nach der Feier bringt euch ein kostenloser Shuttlebus zum etwa 800 m entfernten Hotel.",
    },
    {
      question: "Bis wann sollen wir zusagen?",
      answer:
        "Bitte gebt uns so früh wie möglich über das Zusageformular Bescheid.",
    },
    {
      question: "Dürfen wir Fotos machen?",
      answer:
        "Natürlich. Wir freuen uns über eure Erinnerungen und Schnappschüsse von diesem besonderen Tag.",
    },
    {
      question: "Können wir Bilder mit euch teilen?",
      answer:
        "Ja. Im Galerie-Bereich könnt ihr eure Bilder später direkt hochladen.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 overflow-hidden bg-[#fbf7f1] px-6 py-32 text-center"
    >
      {/* Linke vertikale Designlinie */}
      <div className="absolute left-10 top-24 hidden h-[78%] w-px bg-[#c49a5d]/25 xl:block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
        <span className="absolute top-16 left-1/2 -translate-x-1/2 text-[#c49a5d]/50">
          •
        </span>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
      </div>

      {/* Rechte vertikale Designlinie */}
      <div className="absolute right-10 top-24 hidden h-[78%] w-px bg-[#c49a5d]/25 xl:block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
        <span className="absolute top-16 left-1/2 -translate-x-1/2 text-[#c49a5d]/50">
          •
        </span>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
      </div>

      {/* Dezente Blätter oben rechts */}
      <div className="pointer-events-none absolute right-8 top-0 hidden text-[#c49a5d]/25 md:block">
        <svg width="220" height="170" viewBox="0 0 220 170" fill="none">
          <path
            d="M190 5C140 45 100 85 60 150"
            stroke="currentColor"
            strokeWidth="1"
          />
          {[35, 60, 85, 110, 135].map((y, index) => (
            <path
              key={index}
              d={`M${185 - index * 25} ${y}C${160 - index * 20} ${
                y - 20
              } ${145 - index * 20} ${y - 5} ${150 - index * 18} ${y + 12}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Titelbereich */}
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-base uppercase tracking-[0.45em] text-[#9a6f3d]">
          Fragen & Antworten
        </p>

        <div className="mb-7 flex items-center justify-center gap-5 text-[#c49a5d]">
          <span className="h-px w-20 bg-[#c49a5d]/70" />
          <span className="text-2xl">♡</span>
          <span className="h-px w-20 bg-[#c49a5d]/70" />
        </div>

        <h2 className="font-serif text-5xl font-light uppercase tracking-[0.08em] text-[#2b2723] sm:text-6xl">
          FAQs
        </h2>

        <div className="mt-8 flex items-center justify-center gap-5 text-[#c49a5d]/80">
          <span className="h-px w-20 bg-[#c49a5d]/50" />
          <span className="text-2xl">♡</span>
          <span className="h-px w-20 bg-[#c49a5d]/50" />
        </div>

        <p className="mx-auto mt-10 max-w-xl text-sm leading-8 text-[#2b2723]/70">
          Hier findet ihr Antworten auf die häufigsten Fragen rund um unsere
          Hochzeit. Falls noch etwas unklar ist, könnt ihr uns gerne
          kontaktieren.
        </p>
      </div>

      {/* FAQ-Liste */}
      <div className="mx-auto mt-20 max-w-5xl space-y-5 text-left">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="border border-[#d4af7f]/35 bg-transparent"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center gap-6 px-6 py-6 text-left"
              >
                <span className="w-10 shrink-0 text-lg font-light text-[#c49a5d]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-8 w-px bg-[#c49a5d]/45" />

                <span className="flex-1 font-serif text-xl font-light text-[#2b2723] sm:text-2xl">
                  {item.question}
                </span>

                <span className="text-3xl font-light text-[#c49a5d]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-8 pb-8 pt-2 text-center">
                  <p className="mx-auto max-w-2xl text-sm leading-8 text-[#2b2723]/70">
                    {item.answer}
                  </p>

                  <div className="mt-6 text-xl text-[#c49a5d]">♡</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Abschluss */}
      <div className="mx-auto mt-20 max-w-3xl text-center">
        <div className="text-3xl text-[#c49a5d]">♡</div>

        <p className="mt-6 font-serif text-2xl font-light italic text-[#2b2723]/75">
          Wir freuen uns sehr auf diesen besonderen Tag mit euch!
        </p>

        <p className="mt-5 text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
          Christina & Marc
        </p>

        <div className="mt-8 flex items-center justify-center gap-5 text-[#c49a5d]/80">
          <span className="h-px w-16 bg-[#c49a5d]/50" />
          <span className="text-xl">♡</span>
          <span className="h-px w-16 bg-[#c49a5d]/50" />
        </div>
      </div>
    </section>
  );
}