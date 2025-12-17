"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Play video when it becomes visible
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
    }
  }, [isVisible]);

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
      {isVisible && (
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          onLoadedData={() => setIsVideoLoaded(true)}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 p-4">{children}</div>
    </div>
  );
}
