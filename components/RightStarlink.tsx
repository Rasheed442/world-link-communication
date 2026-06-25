"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { component, con1 } from "@/constants";

const posts = [
  {
    id: 1,
    image: component.comp1,
    title:"Starlink Mini",
    excerpt: "Compact, portable, and designed for reliable internet connectivity on the go.",
    readTime: "3 min ago",
    href: "#",
  },
  {
    id: 2,
    image: component.comp2,
        title:"Standard Actuated",

    excerpt: "Ideal for homes and small businesses, delivering fast and dependable internet access.                       ",
    readTime: "3 min ago",
    href: "#",
  },
  {
    id: 3,
    image: component.comp3, 
        title:"Flat High Performance",

    excerpt: "Built for demanding environments, providing enhanced performance, reliability, and connectivity in motion.",
    readTime: "3 min ago",
    href: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function BlogSection() {
  return (
    <section id="starlink" className="w-full bg-white pt-40 pb-40 px-4">
      <div className="max-w-350 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >   
          <h2 className="text-[42px] md:text-[42px] font-normal font-serif text-[#0D0D0D] leading-[1.1] mb-4">
            FIND THE RIGHT STARLINK
          </h2>
          <p className="text-[16px] text-[#444] leading-relaxed max-w-150">
           Explore our range of Starlink solutions and find the perfect connectivity option for your home, business, or remote operations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 "
        >
          {posts.map((post) => (
            <motion.div
              variants={itemVariants}
              key={post.id}
              className="relative flex flex-col mb-12 md:mb-0"
              style={{ minHeight: "420px" }}
            >
              {/* Full-bleed image */}
              <div
                className="relative w-full flex-1 rounded-sm overflow-hidden"
                style={{ minHeight: "420px" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={post.image}
                    alt={post.excerpt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Bottom white card overlay */}
              <div className="absolute -bottom-15 left-0 right-0 mx-3 mb-3 bg-white h-fit shadow-lg rounded-sm px-5 py-4 ">
                  <div className="flex items-center justify-between">
                  <Link
                    href={post.href}
                    className="flex items-center gap-1 text-[15px] font-medium text-[#0D0D0D] hover:text-[#D43429] transition-colors duration-200"
                  >
                    {post.title}
                    <FiArrowUpRight size={20} />
                  </Link>
                  <span className="text-[13px] text-[#888]">
                    {post.readTime}
                  </span>
                </div>
                <p className="text-[15px] text-[#212D10] mt-4 font-normal leading-snug mb-4">
                  {post.excerpt}
                </p>
              
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BlogSection;
