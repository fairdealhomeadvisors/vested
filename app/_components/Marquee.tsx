export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-red-600 py-2">
      <div
        className="flex gap-8 animate-marquee text-white text-sm font-light"
        style={{
          animation: "marquee 18s linear infinite",
        }}
      >
        {[...Array(6)].map((_, idx) => (
          <span key={idx} className="flex items-center">
            <span>Nikoo Homes</span>
            <span className="font-helvetica font-extralight ml-2">
              We are now open for bookings
            </span>
            <span className="mx-8 opacity-30">|</span>
          </span>
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            min-width: 200%;
          }
        `}
      </style>
    </div>
  );
}
