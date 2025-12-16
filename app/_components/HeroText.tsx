import { Button } from "@/app/_components/ui/button";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { InquiryModalTrigger } from "./InquiryModalTrigger";

interface HeroTextProps {
  heading: string;
  subheading: string;
}

export default function HeroText(props: HeroTextProps) {
  return (
    <div className="mx-5">
      <h1 className="font-normal text-4xl mb-3 max-w-xl md:text-white">
        {props.heading}
      </h1>
      <p className="text-xl font-light mb-4 max-w-lg md:text-white">
        {props.subheading}
      </p>
      <InquiryModalTrigger
        step="preference"
        variant="outline"
        className="rounded-full mr-4 mt-4 bg-red-600 text-white text-base cursor-pointer"
      >
        Get Pricing Details
      </InquiryModalTrigger>
      <InquiryModalTrigger
        step="contact"
        variant="outline"
        size="lg"
        className="group bg-black text-white md:bg-white md:text-black rounded-full mt-4 text-base pr-1 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
      >
        Book Site visit{" "}
        <span className="bg-white text-black md:bg-black md:text-white rounded-full ml-2 p-2 group-hover:bg-white group-hover:text-black transition-colors duration-200">
          <ArrowUpRightIcon />
        </span>
      </InquiryModalTrigger>
    </div>
  );
}
