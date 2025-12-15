interface HeroEmbedProps {
  youtubeUrl: string;
  minHeight?: string;
  children?: React.ReactNode;
}

export default function HeroEmbed({
  youtubeUrl,
  minHeight = "80vh",
  children,
}: HeroEmbedProps) {
  let videoId: string = "";
  try {
    const url = new URL(youtubeUrl);
    videoId = url.searchParams.get("v") || "";
  } catch (e) {
    videoId = "";
    console.error(e);
  }

  return (
    <div
      className="flex flex-col-reverse justify-end md:block relative w-full overflow-hidden"
      style={{ minHeight }}
    >
      {/* Background Video */}
      {videoId && (
        <iframe
          className="rounded-2xl top-1/2 left-1/2 min-h-52  md:absolute m-10 md:rounded-none md:m-0 md:w-[177vw] md:h-screen md:-translate-x-1/2 md:-translate-y-1/2"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
          title="Background Video"
          allow="autoplay; fullscreen"
        />
      )}

      {/* Overlay */}
      <div className="md:absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 p-4 ">{children}</div>
    </div>
  );
}
