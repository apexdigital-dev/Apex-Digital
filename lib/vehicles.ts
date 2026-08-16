// Vehicle domain model, categories, seed catalog, and formatting helpers.
// The admin dashboard (next task) reuses this module.

export const CATEGORIES = [
  "SUVs & 4WD",
  "Sedans & Economy",
  "Luxury & Wedding",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Transmission = "Auto" | "Manual";

export interface Vehicle {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  transmission: Transmission;
  fuel: string;
  seats: number;
  priceEtb: number;
  available: boolean;
}

/** "15,000 ETB / day" — comma-separated thousands, exact card format. */
export function formatEtb(priceEtb: number): string {
  return `${priceEtb.toLocaleString("en-US")} ETB / day`;
}

export function availabilityLabel(vehicle: Vehicle): string {
  return vehicle.available ? "🟢 Available Now" : "🔴 Booked";
}

/** Pre-filled one-tap Telegram booking link for a vehicle. */
export function telegramBookingUrl(handle: string, vehicle: Vehicle): string {
  const message = `Hello! I'd like to book the ${vehicle.title} (${vehicle.category}) — ${formatEtb(
    vehicle.priceEtb,
  )} (${availabilityLabel(vehicle)}).`;
  return `https://t.me/${handle}?text=${encodeURIComponent(message)}`;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

// ~12 realistic Addis Ababa fleet vehicles (stable, keyless image URLs).
// Supabase rows replace this list once NEXT_PUBLIC_SUPABASE_* are set.
export const SEED_VEHICLES: Vehicle[] = [
  {
    id: "land-cruiser-prado",
    title: "Toyota Land Cruiser Prado",
    category: "SUVs & 4WD",
    imageUrl: img("photo-1533473359331-0135ef1b58bf"),
    transmission: "Auto",
    fuel: "Diesel",
    seats: 7,
    priceEtb: 15000,
    available: true,
  },
  {
    id: "toyota-rav4",
    title: "Toyota RAV4",
    category: "SUVs & 4WD",
    imageUrl: img("photo-1519641471654-76ce0107ad1b"),
    transmission: "Auto",
    fuel: "Petrol",
    seats: 5,
    priceEtb: 9500,
    available: false,
  },
  {
    id: "mitsubishi-pajero",
    title: "Mitsubishi Pajero",
    category: "SUVs & 4WD",
    imageUrl: img("photo-1568605117036-5fe5e7bab0b7"),
    transmission: "Auto",
    fuel: "Diesel",
    seats: 7,
    priceEtb: 12000,
    available: true,
  },
  {
    id: "toyota-hilux",
    title: "Toyota Hilux",
    category: "SUVs & 4WD",
    imageUrl: img("photo-1533106418989-88406c7cc8ca"),
    transmission: "Manual",
    fuel: "Diesel",
    seats: 5,
    priceEtb: 10500,
    available: true,
  },
  {
    id: "suzuki-jimny",
    title: "Suzuki Jimny",
    category: "SUVs & 4WD",
    imageUrl: img("photo-1567818735868-e71b99932e29"),
    transmission: "Manual",
    fuel: "Petrol",
    seats: 4,
    priceEtb: 6500,
    available: false,
  },
  {
    id: "toyota-corolla",
    title: "Toyota Corolla",
    category: "Sedans & Economy",
    imageUrl: img("photo-1623869675781-80aa31012a5a"),
    transmission: "Auto",
    fuel: "Petrol",
    seats: 5,
    priceEtb: 5500,
    available: true,
  },
  {
    id: "toyota-vitz",
    title: "Toyota Vitz",
    category: "Sedans & Economy",
    imageUrl: img("photo-1549317661-bd32c8ce0db2"),
    transmission: "Manual",
    fuel: "Petrol",
    seats: 4,
    priceEtb: 2500,
    available: true,
  },
  {
    id: "hyundai-accent",
    title: "Hyundai Accent",
    category: "Sedans & Economy",
    imageUrl: img("photo-1553440569-bcc63803a83d"),
    transmission: "Auto",
    fuel: "Petrol",
    seats: 5,
    priceEtb: 4000,
    available: false,
  },
  {
    id: "kia-picanto",
    title: "Kia Picanto",
    category: "Sedans & Economy",
    imageUrl: img("photo-1511919884226-fd3cad34687c"),
    transmission: "Manual",
    fuel: "Petrol",
    seats: 4,
    priceEtb: 2800,
    available: true,
  },
  {
    id: "mercedes-s-class",
    title: "Mercedes-Benz S-Class",
    category: "Luxury & Wedding",
    imageUrl: img("photo-1563720223185-11003d516935"),
    transmission: "Auto",
    fuel: "Petrol",
    seats: 5,
    priceEtb: 35000,
    available: true,
  },
  {
    id: "range-rover-vogue",
    title: "Range Rover Vogue",
    category: "Luxury & Wedding",
    imageUrl: img("photo-1617531653332-bd46c24f2068"),
    transmission: "Auto",
    fuel: "Petrol",
    seats: 5,
    priceEtb: 40000,
    available: false,
  },
  {
    id: "land-cruiser-v8",
    title: "Toyota Land Cruiser V8",
    category: "Luxury & Wedding",
    imageUrl: img("photo-1606016159991-dfe4f2746ad5"),
    transmission: "Auto",
    fuel: "Diesel",
    seats: 7,
    priceEtb: 30000,
    available: true,
  },
];
