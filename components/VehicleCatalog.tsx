"use client";

import React, { useState } from "react";
import { Vehicle } from "@/config/siteConfig";

interface VehicleCatalogProps {
  initialVehicles: Vehicle[];
}

export function VehicleCatalog({ initialVehicles }: VehicleCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "SUVs & 4WD", "Sedans & Economy", "Luxury & Wedding"];

  const filteredVehicles = initialVehicles.filter((car) => {
    const matchesCategory =
      selectedCategory === "All" || car.category === selectedCategory;
    const matchesSearch =
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="Search cars... e.g. Land Cruiser"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-zinc-900/90 text-white placeholder-zinc-500 text-sm rounded-2xl px-5 py-4 border border-zinc-800 focus:outline-none focus:border-amber-500/50 backdrop-blur-xl transition-all shadow-inner"
        />
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredVehicles.map((car) => (
          <div
            key={car.id}
            className="group relative rounded-3xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-zinc-950/80">
                <img
                  src={car.imageUrl}
                  alt={car.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border ${
                    car.available
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                      : "bg-rose-500/20 text-rose-400 border-rose-500/30"
                  }`}
                >
                  {car.available ? "Available Now" : "Booked"}
                </span>
              </div>

              {/* Info Block */}
              <div className="p-6">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {car.category}
                </span>
                <h3 className="text-xl font-extrabold text-white mt-1 tracking-tight">
                  {car.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                  {car.description}
                </p>
              </div>
            </div>

            {/* Price & Booking Footer */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-zinc-800/60 mt-auto">
              <div>
                <span className="text-xl font-black text-white">
                  {car.priceEtb.toLocaleString()}
                </span>
                <span className="text-[10px] text-zinc-500 ml-1 font-semibold">
                  ETB / day
                </span>
              </div>
              <a
                href={`https://t.me/addiscarrentals?text=Hello,%20I%20want%20to%20rent%20the%20${encodeURIComponent(
                  car.title
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md"
              >
                Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
