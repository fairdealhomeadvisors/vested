import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Privacy Policy | Nikoo Homes",
  description:
    "Privacy Policy for Nikoo Homes - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-zinc-950 text-white py-16 md:py-24 font-clash-display">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold">Privacy Policy</h1>
          <p className="mt-4 text-zinc-400">Last updated: January 4, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 font-clash-display">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-zinc-600 prose-li:text-zinc-600">
          <p className="lead text-lg text-zinc-700">
            This website is owned and managed by Jyoti Gupta, an authorized
            channel partner for the Nikoo Garden Estate project (Project RERA
            No: PRM/KA/RERA/1251/446/PR/200421/003456).
          </p>
          <p className="text-lg text-zinc-700">
            We respect your privacy and are committed to protecting the personal
            information you share with us.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Information We Collect
          </h2>
          <p>
            When you submit an enquiry or contact us, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>City / Location</li>
            <li>Property interest details</li>
            <li>Communication preferences</li>
          </ul>
          <p>
            We do not collect passwords, financial data, or sensitive personal
            information.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            How We Use Your Information
          </h2>
          <p>Your information may be used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact you regarding the Nikoo Garden Estate project</li>
            <li>Share pricing, floor plans, and availability updates</li>
            <li>Arrange site visits and consultations</li>
            <li>
              Coordinate with the developer&apos;s authorized sales team (where
              required)
            </li>
          </ul>
          <p>
            Your details may be shared only with the project developer or their
            official representatives for the purpose of assisting your enquiry.
          </p>
          <p>We do not sell, trade, or misuse your personal data.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Communication Consent
          </h2>
          <p>
            By submitting your details, you authorize Jyoti Gupta and project
            representatives to contact you via:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Phone</li>
            <li>SMS</li>
            <li>WhatsApp</li>
            <li>Email</li>
          </ul>
          <p>
            You may request to stop communication at any time by contacting us.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Data Security
          </h2>
          <p>
            We take reasonable technical and organizational measures to protect
            your data from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unauthorized access</li>
            <li>Misuse</li>
            <li>Loss or alteration</li>
          </ul>
          <p>
            However, transmission of information over the internet is at your
            own risk.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Cookies & Third-Party Tools
          </h2>
          <p>This website may use tools such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Ads / Analytics</li>
            <li>Meta advertising tools</li>
            <li>Lead tracking systems</li>
          </ul>
          <p>
            These may collect non-personal browsing data to improve ad relevance
            and website experience.
          </p>
          <p>You may disable cookies in your browser if you prefer.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            External Links
          </h2>
          <p>
            This website may contain links to developer websites or third-party
            portals.
          </p>
          <p>
            We are not responsible for their content or privacy practices.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Your Contact & Correction Rights
          </h2>
          <p>You may contact us to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Update your details</li>
            <li>Request deletion of your data</li>
            <li>Withdraw communication consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Contact For Privacy Matters
          </h2>
          <ul className="list-none pl-0 space-y-2">
            <li>
              <strong>Jyoti Gupta</strong>
            </li>
            <li>
              <strong>Email:</strong> Fairdealoffice.email@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 636 624 1261
            </li>
            <li>
              <strong>Address:</strong> Flat No 5066, Tower 5, 6th Floor, Earls
              Court, ITPL Road, Whitefield, Bengaluru, Karnataka 560048, India
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Policy Updates
          </h2>
          <p>
            This Privacy Policy may be revised periodically. Continued use of
            the website constitutes acceptance of the updated policy.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
