"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  // Navigationseinträge
  const navItems = [
    ["Unsere Geschichte", "#story"],
    ["Ablauf", "#timeline"],
    ["Location", "#location"],
    ["Zusagen", "#confirmation"],
    ["Geschenke", "#gifts"],
    ["Galerie", "#gallery"],
    ["Fragen", "#faq"],
  ];

  // Festlegung Hochzeitsdatum
  const weddingDate = new Date("2027-07-17T00:00:00");

  // Berechnung der verbleibenden Zeit bis zur Hochzeit
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

  // Speicherung des aktuellen Countdown-Zustands
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown-Anzeigeelemente
  const countdownItems = [
    [timeLeft.days, "Tage"],
    [timeLeft.hours, "Std"],
    [timeLeft.minutes, "Min"],
    [timeLeft.seconds, "Sek"],
  ];

  // Aktualisiert den Countdown jede Sekunde
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#fbf7f1] px-6">
      {/* Hintergrundbild */}
      <img
        src="/floral.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />

      {/* Navigationsleiste */}
      <nav className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-8 text-xs uppercase tracking-[0.18em] text-[#2b2723]/85">
        {navItems.map(([label, href], index) => (
          <div key={label} className="flex items-center gap-4">
            <a
              href={href}
              className="rounded bg-white/50 px-3 py-1 font-light backdrop-blur-[2px] transition hover:bg-white/90 hover:font-normal hover:tracking-[0.19em] hover:text-[#2b2723]"
            >
              {label}
            </a>

            {index < navItems.length - 1 && (
              <span className="text-[#d4af7f]">|</span>
            )}
          </div>
        ))}
      </nav>

      {/* Hero-Inhalt */}
      <div className="relative z-10 flex min-h-[72vh] flex-col items-center justify-center pb-24 pt-6 text-center sm:pb-28 sm:pt-12">
        {/* Rahmenbox */}
        <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center px-6 py-6 sm:px-12 sm:py-12 xl:max-w-[560px] xl:px-20 xl:py-20 2xl:max-w-[650px]">
          {/* Doppelter goldener Rahmen */}
          <div className="absolute inset-0 border border-[#d4af7f]" />
          <div className="absolute inset-[10px] border border-[#d4af7f]" />

          {/* Textbereich im Rahmen */}
          <div className="relative flex flex-col items-center justify-center text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#2b2723]/60 xl:text-sm">
              Wir heiraten
            </p>

            {/* Namen */}
            <h1 className="font-serif font-light uppercase leading-[1.18] tracking-[0.12em]">
              <span className="block text-[1.45rem] sm:text-[2rem] md:text-[2.6rem] xl:text-[4rem] 2xl:text-[5.2rem]">
                Christina
              </span>

              <span className="mt-2 block text-[1.45rem] sm:mt-3 sm:text-[2rem] md:text-[2.6rem] xl:text-[4rem] 2xl:text-[5.2rem]">
                & Marc
              </span>
            </h1>

            {/* Designlinie mit Herz */}
            <div className="mt-5 flex items-center justify-center gap-4 text-[#d4af7f]">
              <span className="h-px w-12 bg-[#d4af7f] xl:w-16" />
              <span className="text-lg xl:text-2xl">♡</span>
              <span className="h-px w-12 bg-[#d4af7f] xl:w-16" />
            </div>

            {/* Datum und Countdown */}
            <div className="mt-5">
              <p className="text-sm tracking-[0.4em] text-[#2b2723]/70 xl:text-base">
                17 | 07 | 2027
              </p>

              {/* Countdown-Anzeige */}
              <div className="mt-3 flex items-center justify-center gap-2 text-[#2b2723]/65 sm:gap-4">
                {countdownItems.map(([value, label]) => (
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

        {/* Pfeil zur nächsten Section */}
        <a
          href="#story"
          className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-3xl font-light text-[#2b2723]/50 transition hover:translate-y-1 sm:bottom-6"
        >
          ↓
        </a>
      </div>
    </section>
  );
}