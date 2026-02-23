import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Shriihari - Meet a helper in your city",
  description:
    "Find trusted local professionals in your city. From plumbers and electricians to tutors and cleaners, Shriihari connects you with the right help nearby.",
  keywords: [
    "local helpers",
    "professionals",
    "services",
    "plumber",
    "electrician",
    "tutor",
    "cleaner",
    "city",
    "directory",
  ],
};

export const viewport: Viewport = {
  themeColor: "#3b8a5f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
