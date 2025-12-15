import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Privacy Policy | Nikoo Homes",
  description: "Privacy Policy for Nikoo Homes - Learn how we collect, use, and protect your personal information.",
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
          <p className="mt-4 text-zinc-400">Last updated: December 15, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-zinc-600 prose-li:text-zinc-600">
          <p className="lead text-lg text-zinc-700">
            At Nikoo Homes, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways, including:</p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Personal Data</h3>
          <p>Personally identifiable information that you voluntarily provide to us when expressing interest in our properties or services, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information (email address, phone number)</li>
            <li>Mailing address</li>
            <li>Property preferences and requirements</li>
            <li>Financial information relevant to property purchases</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">Automatically Collected Data</h3>
          <p>When you access our website, we may automatically collect certain information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device information (browser type, operating system)</li>
            <li>IP address and location data</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website addresses</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and maintain our services</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send you information about properties that match your preferences</li>
            <li>To process transactions and send related communications</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
            <li>To send promotional communications (with your consent)</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>We may share your information in the following situations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Business Partners:</strong> With trusted partners who assist us in operating our website and conducting business</li>
            <li><strong>Legal Requirements:</strong> If required by law or in response to valid legal processes</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of company assets</li>
            <li><strong>With Your Consent:</strong> For any other purpose disclosed at the time of collection</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>5. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to request correction of inaccurate data</li>
            <li>The right to request deletion of your data</li>
            <li>The right to object to or restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul className="list-none pl-0 space-y-2">
            <li><strong>Email:</strong> privacy@nikoohomes.com</li>
            <li><strong>Phone:</strong> +91 987 654 3210</li>
            <li><strong>Address:</strong> 123 Real Estate Avenue, Bangalore, Karnataka 560001</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}

