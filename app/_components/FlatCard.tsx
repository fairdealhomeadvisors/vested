"use client";

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
  const isFirstCard = props.index === 0;

  const handleCardClick = () => {
    if (!isFirstCard) {
      openModal("contact", `Unlock ${props.flat.title} Plan`);
    }
  };

  // For non-first cards, render without Dialog wrapper
  if (!isFirstCard) {
    return (
      <div
        onClick={handleCardClick}
        className="relative text-white h-96 rounded-2xl overflow-hidden max-w-80 cursor-pointer"
      >
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
  }

  // First card renders with Dialog to show plan directly
  return (
    <Dialog>
      <DialogTrigger>
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
      </DialogTrigger>
      <DialogContent>
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
      </DialogContent>
    </Dialog>
  );
}
