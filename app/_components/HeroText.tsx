"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import { InquiryModalTrigger } from "./InquiryModalTrigger";

interface HeroTextProps {
  heading: string;
  subheading: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroText(props: HeroTextProps) {
  return (
    <div className="mx-5">
      <motion.h1
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="font-normal text-4xl mb-3 max-w-xl text-white"
      >
        {props.heading}
      </motion.h1>
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-xl font-light mb-4 max-w-lg text-white"
      >
        {props.subheading}
      </motion.p>
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
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
          className="group bg-white text-black rounded-full mt-4 text-base pr-1 cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
        >
          Book Site visit{" "}
          <span className=" bg-black text-white rounded-full ml-2 p-2 group-hover:bg-white group-hover:text-black transition-colors duration-200">
            <ArrowUpRightIcon />
          </span>
        </InquiryModalTrigger>
      </motion.div>
    </div>
  );
}
