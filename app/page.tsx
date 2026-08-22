import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { VehicleCatalog } from "@/components/VehicleCatalog";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";
import { fetchVehiclesFromSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const dbVehicles = await fetchVehiclesFromSupabase();
  const vehicles = dbVehicles.length > 0 ? dbVehicles : siteConfig.catalog;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden font-sans">
      {/* Ambient Glass Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-zinc-700/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Navigation & Hero Header */}
      <header className="relative z-20">
        <TopBar />
        <Header />
      </header>

      {/* Main Page Content */}
      <main className="relative z-10 space-y-16 py-8">
        <Hero />

        {/* Sixt Luxury Dark Fleet Section */}
        <section id="fleet" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
              Excellence Fleet
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              Premium Vehicle Collection
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Select your drive for instant direct booking across Addis Ababa.
            </p>
          </div>

          <VehicleCatalog initialVehicles={vehicles} />
        </section>

        <AboutUs />
        <WhyChooseUs />

        {/* Glassmorphic Contact & Address Panel */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="relative rounded-3xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Visit Our Showroom
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base mb-6">
                  Experience full VIP customer handling or request immediate vehicle delivery right to your door.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-zinc-200 font-medium text-sm sm:text-base">
                    <span className="text-amber-400 mr-3 text-lg">📍</span>
                    {siteConfig.location}
                  </div>
                  <div className="flex items-center text-zinc-200 font-medium text-sm sm:text-base">
                    <span className="text-amber-400 mr-3 text-lg">📞</span>
                    {siteConfig.phone}
                  </div>
                  <div className="flex items-center text-zinc-200 font-medium text-sm sm:text-base">
                    <span className="text-amber-400 mr-3 text-lg">⏰</span>
                    {siteConfig.businessHours}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-zinc-950/70 backdrop-blur-xl border border-zinc-800 p-8 text-center flex flex-col justify-center items-center min-h-[200px]">
                <p className="text-amber-400 font-bold text-lg mb-2">Instant Booking</p>
                <p className="text-zinc-400 text-xs sm:text-sm mb-6">
                  Reserve your luxury vehicle directly on Telegram with zero delays.
                </p>
                <a
                  href={`https://t.me/${siteConfig.telegramUsername.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 text-sm"
                >
                  Chat on Telegram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
