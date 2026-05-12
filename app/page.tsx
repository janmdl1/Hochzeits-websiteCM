"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const weddingDate = new Date("2027-07-17T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate.getTime() - now;

    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
    };
  };

  const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  setTimeLeft(calculateTimeLeft());

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <main className="min-h-screen bg-[#fbf7f1] text-[#2b2723]">
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[#fbf7f1] px-6">
        <img
          src="/floral.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-90"
        />

        {/* Navigation */}
        <nav className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-8 text-xs uppercase tracking-[0.18em] text-[#2b2723]/85">
          {[
            ["Wir", "#story"],
            ["Ablauf", "#ablauf"],
            ["Location", "#location"],
            ["Zusagen", "#rsvp"],
            ["Geschenke", "#geschenke"],
          ].map(([label, href], index, array) => (
            <div key={label} className="flex items-center gap-4">
              <a
                href={href}
                className="rounded bg-white/50 px-3 py-1 font-light backdrop-blur-[2px] transition hover:bg-white/90 hover:font-normal hover:tracking-[0.19em] hover:text-[#2b2723]"
              >
                {label}
              </a>
              {index < array.length - 1 && (
                <span className="text-[#d4af7f]">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[72vh] flex-col items-center justify-center pt-6 text-center sm:pt-12">
          <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center px-6 py-6 sm:px-12 sm:py-12 xl:max-w-[560px] xl:px-20 xl:py-20 2xl:max-w-[650px]">
            <div className="absolute inset-0 border border-[#d4af7f]" />
            <div className="absolute inset-[10px] border border-[#d4af7f]" />

            <div className="relative flex flex-col items-center justify-center text-center">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#2b2723]/60 xl:text-sm">
                Wir heiraten
              </p>

              <h1 className="font-serif font-light uppercase leading-[1.18] tracking-[0.12em]">
                <span className="block text-[1.45rem] sm:text-[2rem] md:text-[2.6rem] xl:text-[4rem] 2xl:text-[5.2rem]">
                  Christina
                </span>

                <span className="mt-2 block text-[1.45rem] sm:mt-3 sm:text-[2rem] md:text-[2.6rem] xl:text-[4rem] 2xl:text-[5.2rem]">
                  & Marc
                </span>
              </h1>

              <div className="mt-5 flex items-center justify-center gap-4 text-[#d4af7f]">
                <span className="h-px w-12 bg-[#d4af7f] xl:w-16" />
                <span className="text-lg xl:text-2xl">♡</span>
                <span className="h-px w-12 bg-[#d4af7f] xl:w-16" />
              </div>

              <div className="mt-5">
                <p className="text-sm tracking-[0.4em] text-[#2b2723]/70 xl:text-base">
                  17 | 07 | 2027
                </p>

                <div className="mt-3 flex items-center justify-center gap-2 text-[#2b2723]/65 sm:gap-4">
                  {[
                    [timeLeft.days, "Tage"],
                    [timeLeft.hours, "Std"],
                    [timeLeft.minutes, "Min"],
                    [timeLeft.seconds, "Sek"],
                  ].map(([value, label]) => (
                    <div key={label} className="text-center">
                      <p className="text-base font-light sm:text-xl md:text-2xl xl:text-[1.55rem] 2xl:text-3xl">
                        {value}
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.18em] sm:text-[9px] md:text-[10px] xl:text-[11px] 2xl:text-xs">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href="#story"
            className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-3xl font-light text-[#2b2723]/50 transition hover:translate-y-1 sm:bottom-6"
          >
            ↓
          </a>
        </div>
      </section>

      {/* STORY */}
      <section
        id="story"
        className="relative overflow-hidden bg-[#efe3d9] px-6 py-24"
      >
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
          <div className="relative mx-auto h-[520px] w-full max-w-md">
            <img
              src="/floral-corner-left.png"
              alt=""
              className="pointer-events-none absolute -left-10 bottom-[120px] z-30 w-[300px] opacity-100"
            />

            <img
              src="/floral-corner-right.png"
              alt=""
              className="pointer-events-none absolute -right-12 top-[168px] z-40 w-[300px] opacity-95"
            />

            <img
              src="/couple-2.jpeg"
              alt="Christina und Marc"
              className="absolute left-0 top-0 z-0 h-[360px] w-[280px] rounded-sm object-cover shadow-lg"
            />

            <img
              src="/couple-1.jpg"
              alt="Christina und Marc"
              className="absolute bottom-0 right-0 z-30 h-[320px] w-[250px] rounded-sm object-cover shadow-lg"
            />
          </div>

          <div>
            <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
              Wie im Film
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-8 text-[#2b2723]/75">
              <p>
                Hier kommt eure persönliche Geschichte hinein. Wie ihr euch
                kennengelernt habt, was euch verbindet und warum dieser Tag für
                euch so besonders ist.
              </p>
              <p>
                Nach vielen gemeinsamen Momenten, Abenteuern und Erinnerungen
                freuen wir uns darauf, diesen besonderen Tag mit euch zu feiern.
              </p>
              <p>
                Wir können es kaum erwarten, mit euch zu lachen, zu tanzen und
                unvergessliche Erinnerungen zu schaffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section
        id="ablauf"
        className="scroll-mt-20 bg-[#fbf7f1] px-6 py-24 text-center"
      >
        <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
          Ablauf
        </h2>

        <div className="mx-auto mt-12 max-w-xl space-y-6 text-[#2b2723]/75">
          <p><span className="font-medium">14:00</span> – Trauung</p>
          <p><span className="font-medium">15:30</span> – Sektempfang</p>
          <p><span className="font-medium">18:00</span> – Abendessen</p>
          <p><span className="font-medium">20:00</span> – Party</p>
        </div>
      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="scroll-mt-20 bg-[#efe3d9] px-6 py-24 text-center"
      >
        <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
          Location
        </h2>

        <p className="mt-6 text-[#2b2723]/70">Wallenburg, 83714 Miesbach</p>

        <iframe
          title="Google Maps Wallenburg"
          className="mx-auto mt-10 h-[320px] w-full max-w-3xl rounded-sm shadow-lg"
          src="https://www.google.com/maps?q=Wallenburg,83714%20Miesbach&z=12&output=embed"
        />
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="scroll-mt-20 bg-[#fbf7f1] px-6 py-24 text-center"
      >
        <h2 className="font-serif text-4xl font-light uppercase tracking-[0.2em]">
          Zu- oder Absage
        </h2>

        <form className="mx-auto mt-12 max-w-md space-y-4">
          <input
            type="text"
            placeholder="Dein Name"
            className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none"
          />

          <select className="w-full border border-[#d8c7ba] bg-white/70 px-4 py-3 outline-none">
            <option>Ich komme</option>
            <option>Ich komme nicht</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#2b2723] py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-[#4a4037]"
          >
            Absenden
          </button>
        </form>
      </section>
    </main>
  );
}