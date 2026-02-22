import type { Metadata } from "next";
import { Poppins, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucida | Crie provas em segundos com IA",
  description: "Precisa criar provas? A Lulu faz para você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable} antialiased font-sans scroll-smooth`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
