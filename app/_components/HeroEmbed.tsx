"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface HeroEmbedProps {
  youtubeUrl: string;
  placeholderImage: string;
  minHeight?: string;
  children?: React.ReactNode;
}

export default function HeroEmbed({
  youtubeUrl,
  placeholderImage,
  minHeight = "80vh",
  children,
}: HeroEmbedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  let videoId: string = "";
  try {
    const url = new URL(youtubeUrl);
    videoId = url.searchParams.get("v") || "";
  } catch (e) {
    videoId = "";
    console.error(e);
  }

  // Load video when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col-reverse justify-end md:block relative w-full overflow-hidden"
      style={{ minHeight }}
    >
      {/* Placeholder Image - shown until video loads */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src={placeholderImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Background Video - lazy loaded when in view */}
      {videoId && isVisible && (
        <iframe
          className="rounded-2xl top-1/2 left-1/2 min-h-52 md:absolute m-10 md:rounded-none md:m-0 md:w-[177vw] md:h-screen md:-translate-x-1/2 md:-translate-y-1/2"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0`}
          title="Background Video"
          allow="autoplay; fullscreen"
          onLoad={() => setIsVideoLoaded(true)}
        />
      )}

      {/* Overlay */}
      <div className="md:absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 p-4">{children}</div>
    </div>
  );
}
