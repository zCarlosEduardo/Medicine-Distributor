import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from 'next/font/google';
import "./globals.css";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import { Baloo_2 } from "next/font/google";

const baloo_2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo-2',
  weight: ["400", "500", "600", "700"],
  style: ['normal'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ['normal', 'italic'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Recmed",
  description: "Nossa missão é fornecer medicamentos de alta qualidade e um atendimento excepcional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${poppins.variable} ${robotoMono.variable} ${baloo_2.variable}`}>
        <Menu />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
