// Hero.tsx
/* eslint-disable @next/next/no-img-element */
"use client";
import { con1, con3, con2 } from "@/constants";
import { motion } from "framer-motion";
import React from "react";

function Hero() {
  return (
    <div>
      {/* ── Video Hero ── */}
      <section className="relative h-[91vh] min-h-[600px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/bgvideo.jpg"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex h-full items-center md:items-end px- text-white sm:px-8 lg:px-0 pb-16 sm:pb-20 lg:pb-26 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <h2 className="text-[32px] max-w-3xl font-normal leading-[1.2] sm:text-[44px] md:text-[55px]">
              EMPOWERING CONNECTIVITY IN{" "}
              <span className="font-semibold">NIGERIA</span>
            </h2>
            <p className="text-[15px] sm:text-[17px] md:text-[19px] leading-normal max-w-[90vw] sm:max-w-[65vw] md:max-w-[50vw]">
              Stay informed about city services, upcoming events, and the latest
              news. Explore resources, connect with departments, and discover
              all that City has to offer.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#2DB34B] py-3 sm:py-4 font-medium px-5 text-[16px] sm:text-[18px] w-fit text-white rounded-md"
            >
              Read Full Article
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── Stay Connected Section ── */}
      <section
        className="relative bg-white py-16 sm:py-20 lg:py-28 px-6 sm:px-8 lg:px-16 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c8d6e5 1.2px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col gap-5 sm:gap-6"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[50px] font-normal leading-[1.15] text-gray-900 uppercase">
              Stay Connected <br /> Anytime Anywhere
            </h2>
            <p className="text-[15px] sm:text-[16px] font-normal leading-relaxed text-black max-w-full md:max-w-[38vw] lg:max-w-[32vw]">
              No matter where life takes you, we offer a reliable, high-speed
              internet solution designed to keep you connected – whether
              you&apos;re on the move, off the grid, or in the most demanding
              environments.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#2DB34B] py-3 sm:py-4 px-6 text-[16px] sm:text-[18px] font-medium text-white rounded-sm w-fit hover:bg-[#27a244] transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right: Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex-1 w-full grid grid-cols-2 gap-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="col-span-2 rounded-sm overflow-hidden h-44 sm:h-52 lg:h-56"
            >
              <img
                src={con1.src}
                alt="WiFi router on desk"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
              className="rounded-sm overflow-hidden h-40 sm:h-48 lg:h-52"
            >
              <img
                src={con2.src}
                alt="Woman using laptop"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
              className="rounded-sm overflow-hidden h-40 sm:h-48 lg:h-52"
            >
              <img
                src={con3.src}
                alt="Man working outdoors"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;