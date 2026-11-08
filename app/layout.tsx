import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PiedDePage from "@/components/pied-de-page";
import Menu from "@/components/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alain Rodhain",
  description: "Portfolio : sites web, scènes 3D et projets scolaires.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
 
        <div className="mx-auto w-full max-w-6xl px-6">
          <Menu />
          <main className="py-8">{children}</main>
          <PiedDePage/>         
        </div>
      </body>
    </html>
  );
}
