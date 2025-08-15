// Global HTML shell (no Navbar/Footer here)
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "HOMZ Garage Door Service",
  description: "Annual garage door maintenance membership ($179/year).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
