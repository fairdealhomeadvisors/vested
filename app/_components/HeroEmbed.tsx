import Image from "next/image";

interface HeroEmbedProps {
  videoSrc: string;
  placeholderImage: string;
  minHeight?: string;
  children?: React.ReactNode;
}

export default function HeroEmbed({
  videoSrc,
  placeholderImage,
  minHeight = "80vh",
  children,
}: HeroEmbedProps) {
  return (
    <div
      className="flex flex-col-reverse justify-end md:block relative w-full overflow-hidden"
      style={{ minHeight }}
    >
      {/* Placeholder Image - fades out after video loads */}
      <div className="absolute inset-0 pointer-events-none animate-[hero-fade-out_0.7s_ease-out_1.5s_forwards]">
        <Image
          src={placeholderImage}
          alt="Hero background"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Background Video */}
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        src={videoSrc}
        muted
        loop
        playsInline
        autoPlay
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 p-4">{children}</div>
    </div>
  );
}
