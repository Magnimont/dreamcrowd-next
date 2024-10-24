import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "@/components/common/NavBar";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Magnimont",
  description: "Magnimont description metatag",
  keywords: "Magnimont, digital agency, web development, AI solutions, software",
  authors: [{ name: "Your Name" }], // Replace with actual author names
  alternates: {
    canonical: "https://www.canonical.ie/",
  },
  openGraph: {
    url: "https://www.url.ie/a",
    title: "Magnimont",
    description:
      "Magnimont is a leading digital agency specializing in custom web development, AI solutions, and tailored software. We craft innovative websites, intelligent chatbots, Discord bots, and custom applications to drive growth for businesses across industries. Our experts blend cutting-edge technologies with creative ingenuity to deliver digital experiences that captivate users and propel your brand forward.",
    siteName: "Magnimont",
    images: [
      {
        url: "/images/favico.svg", // Update the path accordingly
        width: 100,
        height: 100,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@magnimont",
    creator: "@magnimont",
    title: "Magnimont",
    description:
      "Magnimont is a leading digital agency specializing in custom web development, AI solutions, and tailored software. We craft innovative websites, intelligent chatbots, Discord bots, and custom applications to drive growth for businesses across industries. Our experts blend cutting-edge technologies with creative ingenuity to deliver digital experiences that captivate users and propel your brand forward.",
    images: [
      {
        url: "/images/favico.svg", // Update the path accordingly
        alt: "Og Image Alt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#030303] relative overflow-x-hidden ${inter.className}`}>
        <div className="absolute w-screen z-50 top-0 left-0">
          <NavbarComponent />
        </div>
        {children}
      </body>
    </html>
  );
}
