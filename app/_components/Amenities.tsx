import Image from "next/image";

export default function Amenities() {
  return (
    <div className="md:flex">
      <div className="mx-10 md:mx-20 md:flex-1 md:min-w-1/2">
        <h2 className="text-xl px-5 py-2 border rounded-full w-fit border-gray-200">
          Amenities
        </h2>
        <h3 className="text-3xl my-5">Why Bhartiya Garden Estate?</h3>
        <ul>
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={index}
              className="flex justify-between gap-5 border-t border-gray-400 py-5"
            >
              <span className="text-2xl text-red-600">01</span>
              <h4 className="uppercase max-w-3xs">
                Green, Spacious & Thoughtfully Designed
              </h4>
              <p className="text-gray-500 text-xs md:max-w-2xs">
                Spread across ~29 acres, Bhartiya Garden Estate offers a
                refreshing “garden-in-the-city” lifestyle. Living here means
                waking up to tree-lined boulevards, landscaped gardens and open
                spaces — a perfect retreat from the city’s bustle.
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-10 md:mr-20 md:ml-0 rounded-2xl  md:max-w-sm overflow-hidden">
        <Image
          src="/nikoo/bhartiya-city-banner.jpg"
          alt="Amenities"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
