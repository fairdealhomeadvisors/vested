import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { InquiryModalProvider } from "@/app/_context/InquiryModalContext";
import InquiryModal from "@/app/_components/InquiryModal";

import GTM from "@/app/_components/GTM";

const clashDisplay = localFont({
  src: "_fonts/ClashDisplay-Variable.woff2",
});

const Helvetica = localFont({
  src: "_fonts/Helvetica-Oblique.ttf",
});

export const metadata: Metadata = {
  title: "Fair deals homes",
  description: "The best way to buy a home in Bengaluru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GTM />
      <body
        className={`${clashDisplay.className} ${Helvetica.className} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JLNRGB5"
            height="0"
            width="0"
            className="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <InquiryModalProvider>
          {children}
          <InquiryModal />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
