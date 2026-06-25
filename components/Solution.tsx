import React from "react";
import { motion } from "framer-motion";

function Solution() {
  const features = [
    {
      id: 1,
      title: "Connectivity",
      description:
        "Reliable, high-speed network solutions that keep your operations connected anywhere.",
    },
    {
      id: 2,
      title: "SD-Wan",
      description:
        "Optimize network performance, security, and connectivity across multiple locations.",
    },
    {
      id: 3,
      title: "Cybersecurity",
      description:
        "Protect your systems, data, and infrastructure from evolving cyber threats.",
    },
    {
      id: 4,
      title: "Cloud",
      description:
        "Scalable cloud solutions that enhance flexibility, collaboration, and business growth.",
    },
    {
      id: 5,
      title: "Remote IT and IT management",
      description:
        "Proactive monitoring and management to keep your IT systems running efficiently.",
    },
    {
      id: 6,
      title: "IIOT and OT",
      description:
        "Connect and manage industrial devices and operational technologies for smarter operations.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="solutions" className="pt-12 sm:pt-16 lg:pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-10 sm:mb-14 px-6"
      >
        <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-normal font-serif text-[#0D0D0D] leading-[1.1] mb-4">
          OUR SOLUTION
        </h2>
        <p className="text-[14px] sm:text-[16px] text-[#444] leading-relaxed max-w-xl">
          Experience reliable, high-speed connectivity backed by expert support,
          seamless deployment, and solutions tailored to your unique needs.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto pb-12 sm:pb-16 lg:pb-20"
      >
        {features.map((feature) => (
          <motion.div
            variants={itemVariants}
            key={feature.id}
            className="bg-[#EDF4FD] rounded-sm p-6 sm:p-7 flex flex-col gap-5 sm:gap-6 hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-[#DAE8FB] flex items-center justify-center text-[16px] font-semibold text-[#082241] shrink-0">
              {feature.id}
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[17px] font-normal text-[#0D0D0D] mb-2 sm:mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#555] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Solution;