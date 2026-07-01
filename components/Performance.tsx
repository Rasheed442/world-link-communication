/* eslint-disable @next/next/no-img-element */
import { industry } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

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
      "In remote energy and land-based operations, reliable communication systems are crucial for safety and continuity. Our satellite solutions provide connectivity for real-time monitoring of equipment, environmental conditions, and personnel, supporting efficient decision-making and rapid emergency response."
  }
];

// ── Separate card component so each card owns its own `active` state ──
function IndustryCard({
  item,
  index
}: {
  item: (typeof industries)[0];
  index: number;
}) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="relative h-[280px] overflow-hidden rounded-sm sm:h-[320px] xl:h-[380px] cursor-pointer"
      // ── Handles both mouse-enter/leave (desktop) and tap (mobile) ──
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onTap={() => setActive((prev) => !prev)}
    >
      {/* Background image */}
      <img
        src={item.image.src}
        alt={item.title}
        className={`h-full w-full object-cover transition-transform duration-500 ${
          active ? "scale-105" : "scale-100"
        }`}
      />

      {/* Dark gradient — fades out when active */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-300 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Blue border */}
      <div className="absolute inset-0 z-20 rounded-sm border-2 border-[#3b9ede]/80" />

      {/* Green swipe-up overlay — driven by Framer Motion, works on touch too */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-40 flex items-center bg-[#2EA34A] p-6"
          >
            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
              className="text-[15px] font-semibold leading-relaxed text-white"
            >
              {item.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title + Learn more — always visible, sits above overlay via z-50 */}
      <div
        className={`absolute bottom-0 left-0 z-50 p-5 transition-opacity duration-300 ${
          active ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h3 className="mb-1 text-[16px] font-medium tracking-wide text-white">
          {item.title}
        </h3>
        <p className="text-[14px] text-white underline underline-offset-2 opacity-80">
          Learn more
        </p>
      </div>
    </motion.div>
  );
}

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
          <IndustryCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Performance;