import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: "_fonts/ClashDisplay-Variable.woff2",
});

const Helvetica = localFont({
  src: "_fonts/Helvetica-Oblique.ttf",
});

console.log(clashDisplay, Helvetica);

export const metadata: Metadata = {
  title: "Vested",
  description: "Project Template for Vested",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.className} ${Helvetica.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
