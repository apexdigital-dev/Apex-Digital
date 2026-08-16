import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-zinc-800/80 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 px-4 pb-10 pt-12 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
          <Zap className="h-3.5 w-3.5" />
          Live fleet · ETB daily rates
        </span>
        <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
          Rent Luxury &amp; Economy Cars in Addis Ababa — Instant Telegram Booking
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
          Browse the live fleet, pick your car, and book in one tap on Telegram —
          no phone calls, no waiting.
        </p>
      </div>
    </section>
  );
}
