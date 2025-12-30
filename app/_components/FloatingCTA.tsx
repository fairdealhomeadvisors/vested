"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useInquiryModal } from "@/app/_context/InquiryModalContext";

interface FloatingCTAProps {
  heroRef?: React.RefObject<HTMLElement | null>;
}

export default function FloatingCTA({ heroRef }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useInquiryModal();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero (approximately viewport height)
      const heroHeight = heroRef?.current?.offsetHeight || window.innerHeight * 0.8;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef]);

  const handleClick = () => {
    openModal("contact");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={handleClick}
          className="fixed text-2xl bottom-10 right-10 z-50 flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg shadow-red-600/30 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300 cursor-pointer group"
        >
          <CalendarIcon className="w-5 h-5" />
          <span className="font-medium">Book Free Site Visit</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

