"use client";

import { motion } from "motion/react";
import {
  Film,
  Home,
  Leaf,
  Waves,
  Dumbbell,
  Theater,
  Baby,
  Coffee,
  CircleDot,
  TreePine,
  LucideIcon,
} from "lucide-react";

interface AmenityItem {
  title: string;
  icon: string;
}

interface AmenitiesListProps {
  items: AmenityItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Film,
  Home,
  Leaf,
  Waves,
  Dumbbell,
  Theater,
  Baby,
  Coffee,
  CircleDot,
  TreePine,
};

export default function AmenitiesList({ items }: AmenitiesListProps) {
  return (
    <div className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 text-sm tracking-wide uppercase border border-gray-300 rounded-full text-gray-600 mb-6">
            Lifestyle
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            World-Class <span className="font-medium text-red-600">Amenities</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Experience premium living with thoughtfully designed spaces for wellness, leisure, and community.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Film;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="relative bg-linear-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:border-red-200 hover:shadow-xl hover:shadow-red-50">
                  {/* Decorative gradient blob */}
                  <div className="absolute inset-0 bg-linear-to-br from-red-50/0 via-transparent to-orange-50/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Container */}
                  <div className="relative mb-4 mx-auto w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-br from-red-100 to-orange-100 rounded-2xl rotate-6 scale-90 opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" />
                    <div className="relative bg-linear-to-br from-gray-100 to-gray-50 rounded-2xl w-full h-full flex items-center justify-center group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                      <IconComponent 
                        className="w-7 h-7 md:w-9 md:h-9 text-gray-600 group-hover:text-white transition-colors duration-300" 
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative text-sm md:text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-red-500 to-orange-500 group-hover:w-12 transition-all duration-300 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-linear-to-r from-transparent to-gray-300" />
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="h-px w-16 bg-linear-to-l from-transparent to-gray-300" />
        </motion.div>
      </div>
    </div>
  );
}

