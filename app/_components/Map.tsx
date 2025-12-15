import Image from "next/image";

interface MapProps {
  mapEmbedUrl: string;
  location: string;
  directionsUrl: string;
  mapImage: string;
}
export default function Map(props: MapProps) {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden bg-linear-to-b from-white via-gray-50 to-white">

      {/* Title Section */}
      <div className="relative z-10 text-center mb-2 md:mb-16 px-6">
        <h2 className="text-4xl font-light tracking-tight leading-tight">
          <span className="block">Find your way home</span>
          <span className="block font-helvetica text-red-600">HOME.</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-8 rounded-full" />
      </div>

      {/* Map Content */}
      <div className="relative z-10 mx-6 md:mx-10 lg:mx-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
            {/* Google Maps Embed */}
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="bg-white p-3 rounded-2xl shadow-2xl shadow-black/10">
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    src={props.mapEmbedUrl}
                    width="100%"
                    height="300"
                    loading="lazy"
                    className="border-0"
                  ></iframe>
                </div>
                <div className="mt-4 px-2 pb-2">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="font-medium text-gray-800">{props.location}</p>
                  <a 
                    href={props.directionsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-red-600 text-sm font-medium hover:text-red-700 transition-colors"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Static Map Image */}
            <div className="md:col-span-3 order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 from-red-600/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
                  <Image
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-120 transition-transform duration-700"
                    src={props.mapImage}
                    alt="Location Map"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVG curves */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-32 text-gray-100 pointer-events-none"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
