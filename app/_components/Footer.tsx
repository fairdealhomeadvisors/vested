import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { InquiryModalTrigger } from "./InquiryModalTrigger";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white font-clash-display">
      {/* CTA Section */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Ready to Find Your Perfect Home?
              </h3>
              <p className="text-zinc-400">
                Start your journey today and let us help you every step of the way.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <InquiryModalTrigger
                step="preference"
                className="rounded-full bg-white text-zinc-900 hover:bg-zinc-100 px-6 py-3 h-auto text-base font-medium"
              >
                Get Started
              </InquiryModalTrigger>
              <InquiryModalTrigger
                step="contact"
                variant="outline"
                className="rounded-full border-zinc-700 bg-zinc-700 text-white hover:bg-zinc-800 hover:text-white px-6 py-3 h-auto text-base font-medium"
              >
                Contact Us
              </InquiryModalTrigger>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">
              Nikoo <span className="font-light">Homes</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Discover luxury living at its finest. Premium residences designed
              for modern families seeking comfort, elegance, and convenience.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
            
              <a
                href="https://wa.me/916366241261"
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#amenities"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="#map"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="#layouts"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Floor Plans
                </Link>
              </li>
              <li>
                <Link
                  href="#FAQ"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-zinc-300">+91 636 624 1261</p>
                  <p className="text-zinc-500 text-sm">Mon-Sun, 9am-11pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:Fairdealoffice.email@gmail.com"
                  className="text-zinc-300 hover:text-white transition-colors duration-200"
                >
                  Fairdealoffice.email@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <InformationCircleIcon className="w-5 h-5 text-zinc-400 mt-0.5 shrink-0" />
                <p className="text-zinc-300 wrap-anywhere">
                  Company RERA - <br />
                  PRM/KA/RERA/1251/310/AG/251216/006620
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2025 Nikoo Homes. All rights reserved.
            </p>
            <p className="text-zinc-500 text-sm">
              RERA Registration: PRM/KA/RERA/1251/446/PR/200421/003456
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
