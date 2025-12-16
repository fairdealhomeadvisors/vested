"use client";

import { useEffect, useRef } from "react";
import { useInquiryModal, InquiryStep } from "@/app/_context/InquiryModalContext";

interface InquiryModalAutoTriggerProps {
  delay?: number; // delay in milliseconds
  step?: InquiryStep;
}

export default function InquiryModalAutoTrigger({
  delay = 7000,
  step = "preference",
}: InquiryModalAutoTriggerProps) {
  const { openModal, isOpen } = useInquiryModal();
  const hasTriggered = useRef(false);

  useEffect(() => {
    // Only trigger once and only if modal is not already open
    if (hasTriggered.current || isOpen) return;

    const timer = setTimeout(() => {
      hasTriggered.current = true;
      openModal(step);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, step, openModal, isOpen]);

  return null;
}

