import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Terms and Conditions | Nikoo Homes",
  description:
    "Terms and Conditions for Nikoo Homes - Read our terms of service and usage policies.",
};

export default function TermsAndConditions() {
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
          <h1 className="text-4xl md:text-5xl font-semibold">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-zinc-400">Last updated: December 15, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-zinc-600 prose-li:text-zinc-600">
          <p className="lead text-lg text-zinc-700">
            Welcome to Fairdeal Home Advisors. These Terms and Conditions govern
            your use of our website and services. By accessing or using our
            website, you agree to be bound by these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Fairdeal Home Advisors website, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and Conditions. If you do not agree to these terms,
            please do not use our website or services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">2. Description of Services</h2>
          <p>
            Fairdeal Home Advisors provides information about residential
            properties, including apartment listings, floor plans, amenities,
            pricing, and related real estate services. The information provided
            on our website is for general informational purposes only.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">3. User Responsibilities</h2>
          <p>As a user of our website, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information when making inquiries</li>
            <li>Use the website only for lawful purposes</li>
            <li>Not interfere with or disrupt the website or servers</li>
            <li>Not attempt to gain unauthorized access to any part of the website</li>
            <li>Not use automated systems to access the website without permission</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">4. Property Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information about
            our properties, we do not warrant that all information is complete,
            accurate, or current. Property specifications, prices, layouts, and
            availability are subject to change without notice.
          </p>
          <p>
            All images, renderings, and floor plans are for illustrative purposes
            only and may not represent the actual property. Buyers are advised to
            verify all details independently before making any decisions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">5. Pricing and Payment</h2>
          <p>
            All prices displayed on our website are indicative and may vary
            based on various factors including but not limited to floor level,
            view, and market conditions. Final pricing will be confirmed at the
            time of booking.
          </p>
          <p>
            Payment terms, schedules, and methods will be specified in the
            individual sale agreement. We reserve the right to modify pricing and
            payment terms at any time.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">6. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text,
            graphics, logos, images, audio clips, video clips, and software, is
            the property of Fairdeal Home Advisors or its content suppliers and
            is protected by copyright, trademark, and other intellectual
            property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, display, or create
            derivative works from any content on this website without our prior
            written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services
            that are not owned or controlled by Fairdeal Home Advisors. We have
            no control over, and assume no responsibility for, the content,
            privacy policies, or practices of any third-party websites or
            services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Fairdeal Home Advisors and
            its affiliates, officers, directors, employees, and agents shall not
            be liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or relating to your use of our
            website or services.
          </p>
          <p>
            Our total liability for any claims arising from your use of the
            website shall not exceed the amount paid by you, if any, for accessing
            the website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Fairdeal Home
            Advisors and its affiliates, officers, directors, employees, and
            agents from and against any claims, liabilities, damages, losses,
            and expenses arising out of or in any way connected with your use of
            our website or violation of these terms.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">10. RERA Compliance</h2>
          <p>
            Fairdeal Home Advisors complies with the Real Estate (Regulation and
            Development) Act, 2016 (RERA), where applicable. Prospective buyers
            are encouraged to verify project details on the respective state
            RERA website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">11. Dispute Resolution</h2>
          <p>
            Any disputes arising out of or relating to these Terms and
            Conditions shall be governed by the laws of India. The courts of
            Bangalore, Karnataka shall have exclusive jurisdiction over any
            disputes.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be effective immediately upon posting on the
            website. Your continued use of the website after any changes
            constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">13. Severability</h2>
          <p>
            If any provision of these Terms and Conditions is found to be
            unenforceable or invalid, that provision shall be limited or
            eliminated to the minimum extent necessary so that these terms shall
            otherwise remain in full force and effect.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800">14. Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <ul className="list-none pl-0 space-y-2">
            <li><strong>Email:</strong> Fairdealoffice.email@gmail.com</li>
            <li><strong>Phone:</strong> +91 636 624 1261</li>
            <li>
              <strong>Address:</strong> Flat No 5066, Tower 5, 6th Floor, Earls Court, ITPL Road,
              Whitefield, Bengaluru, Karnataka 560048, India
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
