import Image from "next/image";
import { StaggerChildren, StaggerItem } from "./AnimateOnScroll";

interface AmenitiesProps {
  title: string;
  image: string;
  items: {
    title: string;
    description: string;
  }[];
}

export default function Amenities(props: AmenitiesProps) {
  return (
    <div className="md:flex">
      <div className="mx-10 md:mx-20 md:flex-1 md:min-w-1/2">
        <h2 className="text-xl px-5 py-2 border rounded-full w-fit border-gray-200">
          Amenities
        </h2>
        <h3 className="text-3xl my-5">{props.title}</h3>
        <StaggerChildren staggerDelay={0.1}>
          {props.items.map((item, index) => (
            <StaggerItem key={index}>
              <div className="grid grid-cols-3 gap-5 md:gap-20 border-t border-gray-400 py-5">
                <span className="text-2xl text-red-600">0{index + 1}</span>
                <h4 className="uppercase max-w-3xs col-span-2 md:col-span-1">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs md:max-w-2xs col-span-3 md:col-span-1">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
      <div className="mx-10 md:mr-20 md:ml-0 rounded-2xl md:max-w-sm overflow-hidden">
        <Image
          src={props.image}
          alt="Amenities"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
