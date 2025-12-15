import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../_components/Footer";

export const metadata = {
  title: "About Us | Nikoo Homes",
  description: "Learn about Nikoo Homes - Our story, mission, and commitment to building exceptional living spaces.",
};

export default function AboutUs() {
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
          <h1 className="text-4xl md:text-5xl font-semibold">About Us</h1>
          <p className="mt-4 text-zinc-400 text-lg">Building dreams, creating homes</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-zinc-600 prose-li:text-zinc-600">
          
          {/* Hero Section */}
          <div className="bg-zinc-50 rounded-2xl p-8 md:p-12 mb-12 -mx-2 md:mx-0">
            <p className="text-xl md:text-2xl text-zinc-700 font-light leading-relaxed m-0">
              At Nikoo Homes, we believe that a home is more than just four walls—it&apos;s where life unfolds, memories are made, and dreams take shape. For over two decades, we&apos;ve been dedicated to creating exceptional living spaces that blend modern design with thoughtful functionality.
            </p>
          </div>

          <h2>Our Story</h2>
          <p>
            Founded with a vision to transform the residential real estate landscape, Nikoo Homes has grown from a small family-owned business to one of the most trusted names in premium housing. Our journey began with a simple belief: everyone deserves a home that reflects their aspirations.
          </p>
          <p>
            Over the years, we have successfully delivered numerous residential projects, each one a testament to our commitment to quality, innovation, and customer satisfaction. Our portfolio spans from cozy apartments to sprawling township developments, all designed with the same attention to detail and passion for excellence.
          </p>

          <h2>Our Mission</h2>
          <p>
            To create living spaces that enhance the quality of life for our residents, while maintaining the highest standards of design, construction, and sustainability. We aim to be more than developers—we strive to be partners in our customers&apos; journey to finding their perfect home.
          </p>

          <h2>Our Values</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-zinc-950 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Quality First</h3>
              <p className="text-zinc-400 text-sm">
                We never compromise on quality. From materials to finishes, every aspect of our projects meets the highest standards.
              </p>
            </div>
            <div className="bg-zinc-950 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Customer Focus</h3>
              <p className="text-zinc-400 text-sm">
                Our customers are at the heart of everything we do. We listen, understand, and deliver beyond expectations.
              </p>
            </div>
            <div className="bg-zinc-950 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-zinc-400 text-sm">
                We embrace new ideas and technologies to create smarter, more sustainable living environments.
              </p>
            </div>
            <div className="bg-zinc-950 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Transparency</h3>
              <p className="text-zinc-400 text-sm">
                Honest communication and ethical practices are the foundation of our business relationships.
              </p>
            </div>
          </div>

          <h2>Why Choose Nikoo Homes?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Proven Track Record:</strong> Successfully delivered multiple projects with thousands of happy homeowners</li>
            <li><strong>Prime Locations:</strong> Strategically located projects with excellent connectivity and infrastructure</li>
            <li><strong>World-Class Amenities:</strong> Thoughtfully curated amenities for a complete lifestyle experience</li>
            <li><strong>Timely Delivery:</strong> Consistent record of on-time project completion</li>
            <li><strong>Post-Sale Support:</strong> Dedicated customer service team for all your needs</li>
            <li><strong>RERA Registered:</strong> All projects fully compliant with regulatory requirements</li>
          </ul>

          <h2>Our Team</h2>
          <p>
            Behind every Nikoo Homes project is a team of passionate professionals—architects, engineers, designers, and customer service experts—all united by a shared commitment to excellence. Our leadership team brings decades of combined experience in real estate development, construction, and customer relations.
          </p>

          <h2>Looking Forward</h2>
          <p>
            As we continue to grow, our focus remains unchanged: creating homes that our customers love. We&apos;re constantly exploring new ways to enhance the living experience, from smart home technologies to sustainable building practices. The future of Nikoo Homes is about building not just homes, but communities where people thrive.
          </p>

          {/* CTA Section */}
          <div className="bg-zinc-950 text-white rounded-2xl p-8 md:p-12 mt-12 -mx-2 md:mx-0 text-center not-prose">
            <h3 className="text-2xl font-semibold mb-4">Ready to Find Your Dream Home?</h3>
            <p className="text-zinc-400 mb-6">
              Let us help you discover the perfect living space for you and your family.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-zinc-950 px-8 py-3 rounded-full font-medium hover:bg-zinc-100 transition-colors"
            >
              Explore Our Properties
            </Link>
          </div>

          <h2>Contact Us</h2>
          <p>We&apos;d love to hear from you. Get in touch with our team:</p>
          <ul className="list-none pl-0 space-y-2">
            <li><strong>Email:</strong> info@nikoohomes.com</li>
            <li><strong>Phone:</strong> +91 987 654 3210</li>
            <li><strong>Address:</strong> 123 Real Estate Avenue, Bangalore, Karnataka 560001</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}

