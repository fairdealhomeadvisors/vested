"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/_components/ui/dialog";
import { useInquiryModal } from "@/app/_context/InquiryModalContext";

interface FlatCardProps {
  flat: {
    title: string;
    image: string;
    plan: string;
  };
  index: number;
}

export default function FlatCard(props: FlatCardProps) {
  const { openModal } = useInquiryModal();
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const isFirstCard = props.index === 0;

  const handleCardClick = () => {
    if (!isFirstCard) {
      openModal("contact", `Unlock ${props.flat.title} Plan`, () => {
        setShowFloorPlan(true);
      });
    }
  };

  // Card visual component (shared between both cases)
  const CardVisual = (
    <div className="relative text-white h-96 rounded-2xl overflow-hidden max-w-80 cursor-pointer">
      <Image
        src={props.flat.image}
        alt={props.flat.title}
        width={1000}
        height={1000}
        className="w-full h-full object-cover hover:scale-150 relative transition-all duration-300"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black/50 to-transparent pointer-events-none">
        <h3 className="absolute bottom-20 left-10 text-2xl font-light">
          {props.flat.title}
        </h3>
        <div className="absolute bottom-10 left-10 border px-2 py-1 bg-transparent rounded-none text-base font-helvetica cursor-pointer">
          View Plan
        </div>
      </div>
    </div>
  );

  // Floor plan dialog content (shared between both cases)
  const FloorPlanContent = (
    <>
      <DialogHeader>
        <DialogTitle>{props.flat.title}</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <Image
          src={props.flat.plan}
          alt={props.flat.title}
          width={3000}
          height={3000}
          className="w-full h-full object-cover max-w-2xl"
        />
      </DialogDescription>
    </>
  );

  // For non-first cards, render with controlled Dialog
  if (!isFirstCard) {
    return (
      <>
        <div onClick={handleCardClick}>
          {CardVisual}
        </div>
        <Dialog open={showFloorPlan} onOpenChange={setShowFloorPlan}>
          <DialogContent>
            {FloorPlanContent}
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // First card renders with Dialog trigger to show plan directly
  return (
    <Dialog>
      <DialogTrigger>
        {CardVisual}
      </DialogTrigger>
      <DialogContent>
        {FloorPlanContent}
      </DialogContent>
    </Dialog>
  );
}
