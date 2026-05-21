"use client";

import { useState } from "react";

export default function Confirmation() {
  // Maximale Anzahl gleichzeitig anmeldbarer Personen
  const maxGuests = 4;

  // Aktuelle Anzahl der Personen
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamisch erzeugte Personenfelder
  const guests = Array.from({ length: guestCount });

  // Essensoptionen
  const foodOptions = ["Fleisch", "Vegetarisch", "Vegan"];

  return (
    <section
      id="confirmation"
      className="relative scroll-mt-20 overflow-hidden bg-[#fbf7f1] px-6 py-32 text-center"
    >
      {/* Linke vertikale Designlinie */}
      <div className="absolute left-10 top-24 hidden h-[82%] w-px bg-[#c49a5d]/25 xl:block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
      </div>

      {/* Rechte vertikale Designlinie */}
      <div className="absolute right-10 top-24 hidden h-[82%] w-px bg-[#c49a5d]/25 xl:block">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c49a5d]/70">
          ✦
        </span>
      </div>

      {/* Oberer Titelbereich */}
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-base uppercase tracking-[0.45em] text-[#8e7a63]">
          Zusage
        </p>

        <div className="mb-7 flex items-center justify-center gap-5 text-[#c49a5d]">
          <span className="h-px w-24 bg-[#c49a5d]/70" />
          <span className="text-2xl">♡</span>
          <span className="h-px w-24 bg-[#c49a5d]/70" />
        </div>

        <h2 className="font-serif text-4xl font-light leading-[1.2] tracking-[0.08em] text-[#2b2723] sm:text-5xl">
          Wir freuen uns auf euch
        </h2>

        <div className="mt-8 flex items-center justify-center gap-4 text-[#c49a5d]/80">
          <span className="h-px w-20 bg-[#c49a5d]/50" />
          <span className="text-2xl">♡</span>
          <span className="h-px w-20 bg-[#c49a5d]/50" />
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#2b2723]/70">
          Bitte gebt uns Bescheid, ob ihr an unserem besonderen Tag dabei seid.
          Tragt dafür jede Person einzeln ein, damit wir Essen, Allergien und
          wichtige Informationen zuverlässig planen können.
        </p>

        {/* Kurzinformationen */}
        <div className="mt-10 grid gap-6 text-sm text-[#2b2723]/75 sm:grid-cols-3">
          <div>
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#c49a5d]/45 text-3xl text-[#c49a5d]">
              ♡
            </div>
            <p>29.05.2027</p>
          </div>

          <div>
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#c49a5d]/45 text-3xl text-[#c49a5d]">
              ◷
            </div>
            <p>13:00 Uhr</p>
          </div>

          <div>
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#c49a5d]/45 text-3xl text-[#c49a5d]">
              ⌾
            </div>
            <p>Wallenburg, Miesbach</p>
          </div>
        </div>
      </div>

      {/* Formular */}
      <form
        className="mx-auto mt-16 max-w-5xl text-left"
        onSubmit={(event) => {
          event.preventDefault();

          setIsSubmitted(true);
        }}
      >
        {/* Trennlinie */}
        <div className="mb-12 flex items-center justify-center gap-5 text-[#c49a5d]">
          <span className="h-px flex-1 bg-[#c49a5d]/35" />
          <span className="text-xl">♥</span>
          <span className="h-px flex-1 bg-[#c49a5d]/35" />
        </div>

        {/* Personenanzahl */}
        <div>
          <h3 className="mb-6 text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
            Anzahl der Personen
          </h3>

          <select
            required
            value={guestCount}
            onChange={(event) => setGuestCount(Number(event.target.value))}
            className="w-full border border-[#d4af7f]/35 bg-transparent px-4 py-4 text-sm text-[#2b2723]/70 outline-none focus:border-[#c49a5d] md:max-w-md"
          >
            {Array.from({ length: maxGuests }).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1} Person{index + 1 > 1 ? "en" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Personenangaben */}
        <div className="mt-14">
          <div className="mb-8 flex items-center justify-center gap-5 text-[#c49a5d]">
            <span className="h-px flex-1 bg-[#c49a5d]/35" />
            <span className="text-xl">♡</span>
            <span className="h-px flex-1 bg-[#c49a5d]/35" />
          </div>

          <h3 className="text-center text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
            Angaben zu den Personen
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-[#2b2723]/65">
            Bitte tragt für jede Person die Teilnahme, den Namen und den
            Essenswunsch ein.

            <br />

            <span className="text-[#2b2723]/50">
              Die E-Mail-Adressen verwenden wir ausschließlich für kurzfristige
              Informationen und die Hochzeitsbilder.
            </span>
          </p>

          <div className="mt-10 space-y-8">
            {guests.map((_, index) => (
              <div
                key={index}
                className="relative border border-[#d4af7f]/35 px-6 py-8"
              >
                <h4 className="mb-6 font-serif text-3xl font-light italic text-[#c49a5d]">
                  Person {index + 1} <span className="text-base">♡</span>
                </h4>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Teilnahme */}
                  <select
                    required
                    className="w-full border border-[#d4af7f]/35 bg-transparent px-4 py-4 text-sm text-[#2b2723]/70 outline-none focus:border-[#c49a5d]"
                  >
                    <option value="">Bist du dabei? *</option>
                    <option>Ich bin dabei</option>
                    <option>Ich kann leider nicht kommen</option>
                  </select>

                  {/* Name */}
                  <input
                    required
                    type="text"
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s\-]+"
                    title="Bitte nur Buchstaben, Leerzeichen und Bindestriche eingeben."
                    placeholder="Name der Person *"
                    className="w-full border border-[#d4af7f]/35 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-[#2b2723]/45 focus:border-[#c49a5d]"
                  />

                  {/* E-Mail */}
                  <div>
                    <input
                      required={index === 0}
                      type="email"
                      placeholder={
                        index === 0
                          ? "E-Mail-Adresse *"
                          : "E-Mail-Adresse optional"
                      }
                      className="w-full border border-[#d4af7f]/35 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-[#2b2723]/45 focus:border-[#c49a5d]"
                    />

                  </div>

                  {/* Essenswunsch */}
                  <select
                    required
                    className="w-full border border-[#d4af7f]/35 bg-transparent px-4 py-4 text-sm text-[#2b2723]/70 outline-none focus:border-[#c49a5d]"
                  >
                    <option value="">Essenswunsch *</option>
                    {foodOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>

                  {/* Allergien / Unverträglichkeiten */}
                  <textarea
                    rows={3}
                    placeholder="Allergien / Unverträglichkeiten"
                    className="w-full border border-[#d4af7f]/35 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-[#2b2723]/45 focus:border-[#c49a5d] md:col-span-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weitere Angaben */}
        <div className="mt-14">
          <div className="mb-8 flex items-center justify-center gap-5 text-[#c49a5d]">
            <span className="h-px flex-1 bg-[#c49a5d]/35" />
            <span className="text-xl">♡</span>
            <span className="h-px flex-1 bg-[#c49a5d]/35" />
          </div>

          <h3 className="text-center text-sm uppercase tracking-[0.35em] text-[#9a6f3d]">
            Weitere Angaben
          </h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <textarea
              rows={4}
              placeholder="Songwunsch für die Party"
              className="w-full border border-[#d4af7f]/35 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-[#2b2723]/45 focus:border-[#c49a5d]"
            />

            <textarea
              rows={4}
              placeholder="Anmerkungen / Hinweise, z. B. Verspätung oder besondere Hinweise"
              className="w-full border border-[#d4af7f]/35 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-[#2b2723]/45 focus:border-[#c49a5d]"
            />
          </div>
        </div>

        {/* Erfolgsnachricht */}
        {isSubmitted && (
          <div className="mt-12 rounded-sm border border-[#c49a5d]/35 bg-[#f7f1eb]/70 px-6 py-5 text-center backdrop-blur-[3px]">
            <p className="font-serif text-2xl font-light italic text-[#c49a5d]">
              Vielen Dank ♡
            </p>

            <p className="mt-3 text-sm leading-7 text-[#2b2723]/70">
              Eure Zu- oder Absage wurde erfolgreich gespeichert.
            </p>
          </div>
        )}

        
        {/* Untere Trennlinie */}
        <div className="my-12 flex items-center justify-center gap-5 text-[#c49a5d]">
          <span className="h-px flex-1 bg-[#c49a5d]/35" />
          <span className="text-xl">♡</span>
          <span className="h-px flex-1 bg-[#c49a5d]/35" />
        </div>

        {/* Absenden */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#c49a5d] px-12 py-4 text-xs uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#9a6f3d]"
          >
            Zusage absenden ♡
          </button>
        </div>
      </form>
    </section>
  );
}