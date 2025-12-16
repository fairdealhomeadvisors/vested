import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { InquiryModalProvider } from "@/app/_context/InquiryModalContext";
import InquiryModal from "@/app/_components/InquiryModal";

const clashDisplay = localFont({
  src: "_fonts/ClashDisplay-Variable.woff2",
});

const Helvetica = localFont({
  src: "_fonts/Helvetica-Oblique.ttf",
});

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
        <InquiryModalProvider>
          {children}
          <InquiryModal />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
