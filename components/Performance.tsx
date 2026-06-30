/* eslint-disable @next/next/no-img-element */
import { industry } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

const industries = [
  {
    title: "ENTERPRISE",
    image: industry.enterprise,
    href: "#",
    description:
      "Enterprise communication solutions provide secure, scalable connectivity across mining, agriculture, tourism, and banking, enhancing productivity and resilience. These solutions drive efficiency and innovation through high-performance IT and satellite networks tailored to sector-specific needs."
  },
  {
    title: "MINING",
    image: industry.mining,
    href: "#",
    description:
      "Mining enterprises use advanced satellite communication for secure, real-time data transfer, boosting operational efficiency and safety in remote sites. High-speed links enhance safety, reduce downtime, and optimize productivity, making operations safer and more cost-effective."
  },
  {
    title: "AGRICULTURE",
    image: industry.agric,
    href: "#",
    description:
      "Satellite-enabled precision farming uses real-time IoT data on soil, moisture, crops, and weather to optimize yields and reduce waste. This technology empowers farmers to make informed decisions, improve efficiency, and adopt sustainable practices, even in areas with limited connectivity."
  },
  {
    title: "BANKING",
    image: industry.banking,
    href: "#",
    description:
      "WorldLink's satellite and SD-WAN solutions offer banks secure, resilient connectivity essential for modern financial operations, ensuring compliance and reliability during disruptions. This robust infrastructure enables a consistent digital banking experience, meeting customer demands for fast, accessible, and secure services."
  },
  {
    title: "TOURISM",
    image: industry.tour,
    href: "#",
    description:
      "Tourism in remote areas benefits from satellite connectivity, ensuring uninterrupted internet access for resorts, eco-tourism sites, and national parks. This reliable communication enhances guest experiences while preserving the natural beauty of locations, attracting visitors and boosting local economies."
  },
  {
    title: "GOVERNMENT",
    image: industry.govt,
    href: "#",
    description:
      "Government agencies require secure, efficient communication networks for mission-critical operations. Our high-speed solutions ensure data protection and real-time coordination, enhancing operational effectiveness and enabling timely information sharing across defense, law enforcement, and emergency response sectors."
  },
  {
    title: "NGO & HUMANITARIAN",
    image: industry.humanitarian,
    href: "#",
    description:
      "Reliable satellite communication is crucial for NGOs and emergency services in remote areas, enabling real-time coordination. Our rapid deployment technology supports humanitarian missions by improving data transmission, situational awareness, and the ability to deliver timely aid and recovery."
  },
  {
    title: "ENERGY",
    image: industry.energy,
    href: "#",
    description:
      "In remote energy and land-based operations, reliable communication systems are crucial for safety and continuity. Our satellite solutions provide connectivity for real-time monitoring of equipment, environmental conditions, and personnel, supporting efficient decision-making and rapid emergency response to maintain safe operations in challenging, isolated environments."
  }
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
            className="group relative h-[280px] overflow-hidden rounded-sm sm:h-[320px] xl:h-[380px] cursor-pointer"
          >
            <img
              src={item.image.src}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Base gradient overlay, fades out on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

            <div className="absolute inset-0 z-20 rounded-sm border-2 border-[#3b9ede]/80 transition-all duration-300" />

            {/* Green swipe-up overlay on hover */}
            <div className="absolute inset-0 z-40 flex overflow-auto  bg-[#2EA34A] p-6 opacity-0 translate-y-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[17px] font-semibold leading-relaxed text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-4 group-hover:translate-y-0 ">
                {item.description}
              </p>
            </div>

            {/* Title + Learn more, always on top */}
            <div className="absolute bottom-0 left-0 z-30 p-5">
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