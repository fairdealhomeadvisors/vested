import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Disclaimer | Nikoo Homes",
  description:
    "Disclaimer for Nikoo Homes - Important information about our website and property listings.",
};

export default function Disclaimer() {
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
          <h1 className="text-4xl md:text-5xl font-semibold">Disclaimer</h1>
          <p className="mt-4 text-zinc-400">Last updated: January 4, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 font-clash-display">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-zinc-600 prose-li:text-zinc-600">
          <p className="lead text-lg text-zinc-700">
            This website is owned and managed by Jyoti Gupta, an authorized
            channel partner for the Nikoo Garden Estate project.
          </p>
          <p className="text-lg text-zinc-700">
            We do not represent or claim to be the official website of the
            project developer.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Project & Regulatory Details
          </h2>
          <ul className="list-none pl-0 space-y-2">
            <li>
              <strong>Project Name:</strong> Nikoo Garden Estate
            </li>
            <li>
              <strong>Project RERA No:</strong>{" "}
              PRM/KA/RERA/1251/446/PR/200421/003456
            </li>
            <li>
              <strong>Channel Partner RERA No:</strong>{" "}
              PRM/KA/RERA/1251/310/AG/251216/006620
            </li>
          </ul>
          <p>
            All project details, images, floor plans, brochures, pricing, and
            specifications displayed on this website are shared as provided by
            the developer or their authorized representatives and are subject to
            change.
          </p>
          <p>
            Visitors are strongly advised to verify all project information
            independently through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The developer</li>
            <li>The official RERA website</li>
            <li>Government-approved documentation</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Purpose of Website
          </h2>
          <p>This website is intended for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Marketing communication</li>
            <li>Informational purposes</li>
            <li>Assisting customers with enquiries and site visits</li>
          </ul>
          <p>
            It does not constitute a legal offer, commitment, or contract of any
            kind.
          </p>
          <p>
            Final decision regarding pricing, availability, approvals, and
            allotment lies solely with the developer.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Channel Partner Role
          </h2>
          <p>As an authorized channel partner, we assist customers with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Project information</li>
            <li>Arranging site visits</li>
            <li>Coordinating with developer sales teams</li>
            <li>Guiding the enquiry & booking process</li>
          </ul>
          <p>
            All transactions, payments, and documentation are handled directly
            by the developer as per their policies and RERA guidelines.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Liability
          </h2>
          <p>
            While every effort is made to ensure that the information on this
            website is accurate and updated, Jyoti Gupta shall not be
            responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Typographical or technical errors</li>
            <li>Revisions in project plans, pricing, or specifications</li>
            <li>Decisions made based on website content</li>
          </ul>
          <p>
            Users are responsible for making informed purchase decisions after
            due verification.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">
            Contact Information
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
        </div>
      </div>
      <Footer />
    </main>
  );
}
