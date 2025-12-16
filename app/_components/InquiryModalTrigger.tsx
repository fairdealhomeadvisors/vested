"use client";

import React from "react";
import { useInquiryModal, InquiryStep } from "@/app/_context/InquiryModalContext";
import { Button } from "@/app/_components/ui/button";
import { cn } from "@/app/_lib/utils";

interface InquiryModalTriggerProps {
  step?: InquiryStep;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export function InquiryModalTrigger({
  step = "preference",
  children,
  className,
  variant = "default",
  size = "default",
  asChild = false,
}: InquiryModalTriggerProps) {
  const { openModal } = useInquiryModal();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
      onClick: () => openModal(step),
    });
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => openModal(step)}
      className={cn("cursor-pointer", className)}
    >
      {children || "Get Started"}
    </Button>
  );
}
