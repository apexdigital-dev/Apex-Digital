import { Clock, MapPin, Phone } from "lucide-react";

const LOCATION = "Bole Medhanialem, Addis Ababa, Ethiopia";
const HOURS = "Mon – Sat: 8:00 AM – 8:00 PM";
const PHONE = "+251 91 123 4567";
const PHONE_HREF = "tel:+251911234567";

export function TopBar() {
  return (
    <div className="border-b border-zinc-800/60 bg-zinc-900/70 text-zinc-300">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-1.5 text-[11px] sm:text-xs lg:justify-between">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-amber-400" aria-hidden />
          {LOCATION}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-amber-400" aria-hidden />
          {HOURS}
        </span>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-1.5 transition hover:text-amber-400"
        >
          <Phone className="h-3.5 w-3.5 text-amber-400" aria-hidden />
          {PHONE}
        </a>
      </div>
    </div>
  );
}
