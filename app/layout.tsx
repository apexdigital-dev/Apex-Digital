import type { Metadata } from "next";
import "./globals.css";
import { AGENCY_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `${AGENCY_NAME} — Rent Luxury & Economy Cars in Addis Ababa`,
  description:
    "Rent luxury & economy cars in Addis Ababa with instant Telegram booking. Transparent ETB daily rates and live availability.",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
