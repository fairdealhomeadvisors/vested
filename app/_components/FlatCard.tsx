import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/_components/ui/dialog";

export default function FlatCard() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative text-white h-96 rounded-2xl overflow-hidden max-w-64 cursor-pointer">
          <Image
            src="/assets/flats/studio.jpg"
            alt="Flat 1"
            width={1000}
            height={1000}
            className="w-full h-full object-cover hover:scale-150 relative transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black/50 to-transparent pointer-events-none">
            <h3 className="absolute bottom-20 left-10 text-2xl font-light">
              Studio
            </h3>
            <div
              size="sm"
              className="absolute bottom-10 left-10 border px-2 py-1 bg-transparent rounded-none text-base font-helvetica cursor-pointer"
            >
              View Plan
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Studio</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Image
            src="/nikoo/studio-plan.jpg"
            alt="Flat 1"
            width={3000}
            height={3000}
            className="w-full h-full object-cover"
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
