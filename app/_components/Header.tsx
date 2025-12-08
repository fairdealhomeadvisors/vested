import { Button } from "@/components/ui/button";
import { Bars2Icon } from "@heroicons/react/24/outline";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="p-5 flex items-start justify-between">
      <div>
        <span className="font-semibold mr-1">{props.title?.split(" ")[0]}</span>
        <span>{props.title?.split(" ")?.slice(1).join(" ")}</span>
      </div>
      <div className="items-center gap-2 hidden md:flex">
        <Button variant="outline" className="rounded-full">
          Amenities
        </Button>
        <Button variant="outline" className="rounded-full">
          Pricing
        </Button>
        <Button variant="outline" className="rounded-full">
          Brochure
        </Button>
        <Button variant="outline" className="rounded-full">
          FAQ
        </Button>
      </div>
      <div>
        <span className="text-2xl hidden md:block">+91 987 654 3210</span>
      </div>
      {/* HAMBURGER MENU FOR MOBILE */}
      <div className="md:hidden">
        <Bars2Icon className="w-6 h-6" />
      </div>
    </header>
  );
}
