import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { VehicleCatalog } from "@/components/VehicleCatalog";
import { Footer } from "@/components/Footer";
import { TELEGRAM_USERNAME } from "@/lib/config";
import { fetchVehiclesFromSupabase } from "@/lib/supabase";
import { SEED_VEHICLES } from "@/lib/vehicles";

// Render per request: env changes (agency name, Telegram handle, Supabase
// credentials) take effect without a rebuild, and SSR always includes the fleet.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Supabase when configured, seeded catalog otherwise. Never throws.
  const vehicles = (await fetchVehiclesFromSupabase()) ?? SEED_VEHICLES;

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <VehicleCatalog vehicles={vehicles} telegramHandle={TELEGRAM_USERNAME} />
        <AboutUs />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
