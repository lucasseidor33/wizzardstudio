import type { Metadata } from "next";
import { EB_Garamond, Inter, DM_Sans } from "next/font/google";

import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Wizzard Studio",
  description: "Diseño web, branding y desarrollo a medida.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
