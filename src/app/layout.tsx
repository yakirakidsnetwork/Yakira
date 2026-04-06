import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Yakira Kids Network",
  description: "Empowering Africa's displaced children through the Gospel, holistic care, and sustainable skill-building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased flex flex-col",
          poppins.variable,
          inter.variable,
          playfair.variable
        )}
      >
        <Header />
        <main className="flex-grow pt-20 lg:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
