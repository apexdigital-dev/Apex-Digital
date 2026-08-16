// App configuration, read from the environment with sensible defaults.
// NEXT_PUBLIC_* values are inlined into client bundles at build time and read at
// request time in server components; both paths fall back to the same defaults.

const str = (value: string | undefined, fallback: string): string =>
  value && value.trim().length > 0 ? value.trim() : fallback;

export const AGENCY_NAME = str(process.env.NEXT_PUBLIC_AGENCY_NAME, "Addis Car Rentals");

export const TELEGRAM_USERNAME = str(
  process.env.NEXT_PUBLIC_TELEGRAM_USERNAME ?? process.env.NEXT_PUBLIC_TELEGRAM_HANDLE,
  "demo_rental_admin",
).replace(/^@/, "");

export const TELEGRAM_URL = `https://t.me/${TELEGRAM_USERNAME}`;

export const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").trim();
export const SUPABASE_ANON_KEY = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "").trim();
export const supabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
