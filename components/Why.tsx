/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { ch1, ch2, ch3, ch4 } from "@/constants";

const features = [
  {
    title: "Reliable Connectivity",
    description: "Fast, stable internet, even in remote locations.",
    image: ch1,
    position: "top",
    col: 1,
  },
  {
    title: "Industry-Specific Solutions",
    description: "Tailored for mining, agriculture, maritime, and more.",
    image: ch2,
    position: "bottom",
    col: 2,
  },
  {
    title: "Expert Installation & Support",
    description: "Seamless setup and ongoing assistance.",
    image: ch3,
    position: "top",
    col: 3,
  },
  {
    title: "Stay Connected Anywhere",
    description: "Powering critical business operations with high-speed access.",
    image: ch4,
    position: "bottom",
    col: 4,
  },
];

function Why() {
  return (
    <div className="bg-white pb-0">
      <div className="bg-[#0e3a5c] py-14 px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 items-center text-center mb-14 pt-6 sm:pt-12 max-w-[1400px] mx-auto"
        >
          <p className="text-[14px] sm:text-[16px] text-white leading-relaxed">
            Why choose us
          </p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] uppercase font-normal font-serif text-white leading-[1.1] mb-2 sm:mb-4 max-w-2xl">
            Why choose Starlink for your Business?
          </h2>
          <p className="text-[14px] sm:text-[16px] text-white leading-relaxed max-w-xl px-2">
            We deliver trusted Starlink solutions backed by expert support,
            seamless deployment, and reliable connectivity tailored to your
            needs.
          </p>
        </motion.div>

        <div className="max-w-[1400px] mx-auto">

          {/* ── MOBILE: vertical stacked cards with left timeline ── */}
          <div className="flex lg:hidden flex-col relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-[#1e5a8a]" />

            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-6 last:mb-0"
              >
                {/* Dot on vertical line */}
                <div className="absolute -left-8 top-6 flex items-center justify-center">
                  <span
                    style={{
                      position: "absolute",
                      inset: "-4px",
                      borderRadius: "50%",
                      backgroundColor: "#2DB34B",
                      opacity: 0.4,
                    }}
                    className="animate-ping"
                  />
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "#2DB34B",
                      border: "3px solid white",
                      boxShadow: "0 0 0 2px #2DB34B",
                      position: "relative",
                      zIndex: 2,
                    }}
                  />
                </div>

                {/* Card */}
                <div className="bg-white rounded-sm overflow-hidden shadow-lg">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={feature.image.src}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[17px] font-normal text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── DESKTOP: zigzag timeline grid ── */}
          <div
            className="hidden lg:grid"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "auto 60px auto",
              columnGap: "12px",
            }}
          >
            {/* Card 1 — col 1, top */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ gridColumn: 1, gridRow: 1, alignSelf: "end" }}
              className="bg-white rounded-sm overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={features[0].image.src}
                  alt={features[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-normal text-gray-900 mb-1">
                  {features[0].title}
                </h3>
                <p className="text-[14px] text-gray-500">
                  {features[0].description}
                </p>
              </div>
            </motion.div>

            {/* Card 3 — col 3, top */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ gridColumn: 3, gridRow: 1, alignSelf: "end" }}
              className="bg-white rounded-sm overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={features[2].image.src}
                  alt={features[2].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-normal text-gray-900 mb-1">
                  {features[2].title}
                </h3>
                <p className="text-[14px] text-gray-500">
                  {features[2].description}
                </p>
              </div>
            </motion.div>

            {/* Timeline row */}
            <div
              style={{
                gridColumn: "1 / -1",
                gridRow: 2,
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "1.5px",
                  backgroundColor: "#1e5a8a",
                }}
              />

              {[
                { left: "12.5%", stem: "up" },
                { left: "37.5%", stem: "down" },
                { left: "62.5%", stem: "up" },
                { left: "87.5%", stem: "down" },
              ].map(({ left, stem }, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 10,
                  }}
                >
                  {stem === "up" && (
                    <div
                      style={{
                        width: "2px",
                        height: "30px",
                        backgroundColor: "#2a5f8a",
                        position: "absolute",
                        bottom: "50%",
                      }}
                    />
                  )}

                  <div style={{ position: "relative", zIndex: 2 }}>
                    <span
                      style={{
                        position: "absolute",
                        inset: "-4px",
                        borderRadius: "50%",
                        backgroundColor: "#2DB34B",
                        opacity: 0.4,
                      }}
                      className="animate-ping"
                    />
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "#2DB34B",
                        border: "3px solid white",
                        boxShadow: "0 0 0 2px #2DB34B",
                        position: "relative",
                        zIndex: 2,
                      }}
                    />
                  </div>

                  {stem === "down" && (
                    <div
                      style={{
                        width: "2px",
                        height: "30px",
                        backgroundColor: "#2a5f8a",
                        position: "absolute",
                        top: "50%",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Card 2 — col 2, bottom */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ gridColumn: 2, gridRow: 3, alignSelf: "start" }}
              className="bg-white rounded-sm overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={features[1].image.src}
                  alt={features[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-normal text-gray-900 mb-1">
                  {features[1].title}
                </h3>
                <p className="text-[14px] text-gray-500">
                  {features[1].description}
                </p>
              </div>
            </motion.div>

            {/* Card 4 — col 4, bottom */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ gridColumn: 4, gridRow: 3, alignSelf: "start" }}
              className="bg-white rounded-sm overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={features[3].image.src}
                  alt={features[3].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-normal text-gray-900 mb-1">
                  {features[3].title}
                </h3>
                <p className="text-[14px] text-gray-500">
                  {features[3].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;