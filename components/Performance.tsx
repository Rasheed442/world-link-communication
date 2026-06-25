/* eslint-disable @next/next/no-img-element */
import { industry } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

const industries = [
  { title: "ENTERPRISE", image: industry.enterprise, href: "#" },
  { title: "MINING", image: industry.mining, href: "#" },
  { title: "AGRICULTURE", image: industry.agric, href: "#" },
  { title: "BANKING", image: industry.banking, href: "#" },
  { title: "TOURISM", image: industry.tour, href: "#" },
  { title: "GOVERNMENT", image: industry.govt, href: "#" },
  { title: "NGO & HUMANITARIAN", image: industry.humanitarian, href: "#" },
  { title: "ENERGY", image: industry.energy, href: "#" }
];

function Performance() {
  return (
    <div className="bg-[#105A93] px-4 py-10 sm:px-6 lg:px-10 lg:py-14" id="industries">
      <div className="mx-auto mb-8 flex max-w-[1400px] flex-col gap-2">
        <p className="text-[15px] font-medium tracking-[0.3em] text-[#E4E9EA]">
          INDUSTRY
        </p>
        <span className="max-w-full text-[28px] font-medium leading-tight text-white sm:text-[34px] md:text-[40px] md:max-w-[68vw]">
          Providing seamless, high-performance internet connectivity beyond the
          limits of traditional networks.
        </span>
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            className="group relative h-[280px] overflow-hidden rounded-sm sm:h-[320px] xl:h-[380px]"
          >
            <img
              src={item.image.src}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-0 rounded-sm border-2 border-[#3b9ede]/80 transition-all duration-300" />

            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="mb-1 text-[16px] font-medium tracking-wide text-white">
                {item.title}
              </h3>
              <p className="text-[14px] text-white underline underline-offset-2 opacity-80 transition-opacity hover:opacity-100">
                Learn more
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Performance;
