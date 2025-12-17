"use client";


import { useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "motion/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.15 } },
} as const;

interface MenuProps {
  emailLink: string;
  whatsappLink: string;
  phoneNumber: string;
}

export default function Menu( props: MenuProps ) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="md:hidden">
      <Bars2Icon className="w-6 h-6 text-white" onClick={handleMenuOpen} />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            className="fixed top-0 left-0 w-full h-full bg-black"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <XCircleIcon
              className="w-10 h-10 text-white absolute top-4 right-4"
              onClick={handleMenuClose}
            />
            <nav className="flex flex-col justify-between h-full px-8 py-10">
              <motion.ul
                className=" text-white flex flex-col gap-4 text-xl"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.li className="cursor-pointer" variants={itemVariants}>
                  <Link href="#amenities" onClick={handleMenuClose}>Amenities</Link>
                </motion.li>
                <motion.li className="cursor-pointer" variants={itemVariants}>
                  Pricing
                </motion.li>
                <motion.li className="cursor-pointer" variants={itemVariants}>
                  <Link href="#map" onClick={handleMenuClose}>Location</Link>
                </motion.li>
                <motion.li className="cursor-pointer" variants={itemVariants}>
                  <Link href="#layouts" onClick={handleMenuClose}>Floor plans</Link>
                </motion.li>
                <motion.li className="cursor-pointer" variants={itemVariants}>
                  <Link href="#FAQ" onClick={handleMenuClose}>FAQ</Link>
                </motion.li>
              </motion.ul>
              <div className="flex items-center gap-5">
                <Link href={props.emailLink} onClick={handleMenuClose}>
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </Link>
                <Link href={props.whatsappLink} onClick={handleMenuClose}>
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </span>
                </Link>
                <span className="text-2xl text-white">{props.phoneNumber}</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
