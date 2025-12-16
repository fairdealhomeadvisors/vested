import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

import { ArrowDownLeftIcon } from "@heroicons/react/24/outline";

export default function Faq(props: { faq: { question: string; answer: string }[] }) {
  return (
    <div className="mx-10 mt-20 min-h-screen relative">
      <div className="w-[300px] h-[300px] border absolute -top-30 left-0 md:left-10 rounded-full">
        <ArrowDownLeftIcon className="text-black size-30 translate-x-20 translate-y-3" />
      </div>
      <h2 className="text-xl px-5 py-2 border rounded-full w-fit border-gray-200">
        FAQ
      </h2>
      <h3 className="text-3xl my-5 uppercase font-light max-w-sm mb-10">
        Frequently Asked Questions
      </h3>
      <div className="max-w-7xl my-20">
        <Accordion defaultValue={`item-1`} type="single" collapsible>
          {props.faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`} className="mb-7 border-b last:border-b-0">
              <AccordionTrigger className="text-xl uppercase font-normal cursor-pointer">
                <div className="flex items-center mr-1">
                  <span className="bg-red-600 w-2 h-2 mr-5 md:mr-20 rounded-full block"></span>{" "}
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-sm md:ml-24 max-w-2xl">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          {/* <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl uppercase font-normal cursor-pointer">
              <div className="flex items-center mr-1">
                <span className="bg-red-600 w-2 h-2 mr-5 md:mr-20 rounded-full block"></span>{" "}
                What is Bhartiya Garden Estate?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-sm md:ml-24 max-w-2xl">
              Bhartiya Garden Estate is a premium residential township by
              Bhartiya Urban, offering thoughtfully designed apartments, row
              houses, and villas set within a lush, green, sustainable
              environment in Sadahalli, North Bengaluru. It is a self-contained
              community with world-class amenities, retail, open spaces, and
              excellent connectivity to the airport and major tech hubs. Yes. It
              adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl uppercase font-normal cursor-pointer">
              <div className="flex items-center mr-1">
                <span className="bg-red-600 w-2 h-2 mr-5 md:mr-20 rounded-full block"></span>{" "}
                What is Bhartiya Garden Estate?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 text-sm md:ml-24 max-w-2xl">
              Bhartiya Garden Estate is a premium residential township by
              Bhartiya Urban, offering thoughtfully designed apartments, row
              houses, and villas set within a lush, green, sustainable
              environment in Sadahalli, North Bengaluru. It is a self-contained
              community with world-class amenities, retail, open spaces, and
              excellent connectivity to the airport and major tech hubs. Yes. It
              adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </div>
    </div>
  );
}
