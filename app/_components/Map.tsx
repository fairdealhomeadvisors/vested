import Image from "next/image";

export default function Map() {
  return (
    <div className="relative flex justify-center py-10">
      <div className="relative z-10 mx-10 w-full max-w-2xl">
        <div className="w-full max-w-md z-10 mb-5 md:absolute md:top-0 md:-left-40 mt-6 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28196.131993533534!2d77.64301986140164!3d12.914545705748283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152a1de2d43b%3A0xb41dc6205dd221a4!2sCasa%20Fresco%2C%20HSR%3A%20All-Day%20Dining%20%26%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1765714371085!5m2!1sen!2sin"
            width="100%"
            height="250"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <Image
            className="w-full h-full object-cover rounded-2xl hover:z-20 hover:scale-105 relative transition-all duration-300"
            src="/nikoo/map.jpg"
            alt="Map"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <Image
        className="absolute top-0 left-0 w-full h-full z-0"
        src="/assets/map-bg.jpg"
        alt="Map Background"
        width={1000}
        height={1000}
      />
    </div>
  );
}
