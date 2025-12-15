import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Disclaimer | Nikoo Homes",
  description: "Disclaimer for Nikoo Homes - Important information about our website and property listings.",
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
          <p className="mt-4 text-zinc-400">Last updated: December 15, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-zinc-600 prose-li:text-zinc-600">
          
          {/* Important Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8 -mx-2 md:mx-0">
            <p className="text-amber-800 font-medium m-0">
              Please read this disclaimer carefully before using our website or making any property-related decisions based on information provided herein.
            </p>
          </div>

          <h2>General Information</h2>
          <p>
            The information provided on the Nikoo Homes website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
          </p>

          <h2>Property Representations</h2>
          <p>
            All images, renderings, floor plans, and visual representations on this website are artistic impressions and for illustration purposes only. They may not accurately represent the final product due to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ongoing design modifications and improvements</li>
            <li>Variations in materials and finishes</li>
            <li>Changes required by regulatory authorities</li>
            <li>Natural variations in construction</li>
            <li>Differences in lighting and photography</li>
          </ul>
          <p>
            Prospective buyers are strongly advised to visit the actual site and review approved plans before making any purchase decisions.
          </p>

          <h2>Pricing Information</h2>
          <p>
            All prices mentioned on this website are indicative and subject to change without prior notice. Final pricing will depend on various factors including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unit location and floor level</li>
            <li>View and orientation</li>
            <li>Market conditions at the time of booking</li>
            <li>Applicable taxes and statutory charges</li>
            <li>Additional preferences and customizations</li>
          </ul>
          <p>
            The actual price payable may differ from the indicative prices shown. Please contact our sales team for current pricing.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            The content on this website does not constitute professional advice. It should not be relied upon as a substitute for consultation with qualified professionals including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Legal counsel for property transactions</li>
            <li>Financial advisors for investment decisions</li>
            <li>Tax consultants for tax implications</li>
            <li>Property valuers for independent assessments</li>
          </ul>

          <h2>Third-Party Content</h2>
          <p>
            Our website may contain links to external websites or content from third parties. We do not control and are not responsible for the content, privacy policies, or practices of third-party websites. The inclusion of any link does not imply endorsement by Nikoo Homes.
          </p>

          <h2>RERA Information</h2>
          <p>
            All our projects are registered under the Real Estate (Regulation and Development) Act, 2016. The RERA registration numbers are provided for each project. Prospective buyers should:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify project details on the official RERA website of the respective state</li>
            <li>Review all approved documents before making any commitment</li>
            <li>Understand their rights under RERA before signing any agreement</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            Under no circumstances shall Nikoo Homes, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Loss of profits or revenue</li>
            <li>Loss of data or goodwill</li>
            <li>Service interruption or computer damage</li>
            <li>Any other intangible losses</li>
          </ul>
          <p>
            This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We endeavor to ensure that the information on our website is accurate and up to date. However, errors may occur. If you notice any inaccuracies, please bring them to our attention, and we will make reasonable efforts to correct them promptly.
          </p>

          <h2>Changes to Disclaimer</h2>
          <p>
            We reserve the right to update or modify this disclaimer at any time without prior notice. Your continued use of the website after any changes signifies your acceptance of the modified disclaimer.
          </p>

          <h2>Governing Law</h2>
          <p>
            This disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with this disclaimer shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka.
          </p>

          <h2>Contact Information</h2>
          <p>If you have any questions about this disclaimer, please contact us:</p>
          <ul className="list-none pl-0 space-y-2">
            <li><strong>Email:</strong> legal@nikoohomes.com</li>
            <li><strong>Phone:</strong> +91 987 654 3210</li>
            <li><strong>Address:</strong> 123 Real Estate Avenue, Bangalore, Karnataka 560001</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}

