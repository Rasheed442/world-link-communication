"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactbg } from "@/constants";
import Image from "next/image";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1350px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[24px] shadow-[0_20px_80px_rgba(0,0,0,0.16)]"
          style={{ minHeight: "620px" }}
        >
          <div className="absolute inset-0 bg-[#0C446E]/90" />

          <div className="relative z-10">
            <div className="flex flex-col items-center gap-1 px-6 pt-10 text-center sm:px-8 md:pt-14">
              <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-white/90">
                CONTACT US
              </p>
              <h2 className="text-[30px] font-normal font-serif leading-[1.15] text-white sm:text-[36px] md:text-[40px]">
                GET IN TOUCH
              </h2>
            </div>

            <div className="flex flex-col gap-8 p-6 sm:p-8 md:flex-row md:gap-10 md:p-10 lg:p-14">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-6 md:w-[40%]"
              >
                <Image
                  src={contactbg}
                  alt="Contact Background"
                  className="h-full w-full rounded-xl object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-4 md:w-[60%]"
              >
                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-widest text-white">
                    NAME:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none transition-colors backdrop-blur-sm focus:border-white/50"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-widest text-white">
                      EMAIL:
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none transition-colors backdrop-blur-sm focus:border-white/50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-widest text-white">
                      COMPANY:
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter Your Company"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none transition-colors backdrop-blur-sm focus:border-white/50"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-widest text-white">
                      PHONE NUMBER:
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Your Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none transition-colors backdrop-blur-sm focus:border-white/50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-widest text-white">
                      COUNTRY:
                    </label>
                    <input
                      type="text"
                      name="country"
                      placeholder="Select Country"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none transition-colors backdrop-blur-sm focus:border-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-widest text-white">
                    INDUSTRY:
                  </label>
                  <input
                    type="text"
                    name="industry"
                    placeholder="Select Industry"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none transition-colors backdrop-blur-sm focus:border-white/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold uppercase tracking-widest text-white">
                    MESSAGE:
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-[15px] text-white placeholder-white/50 outline-none transition-colors backdrop-blur-sm focus:border-white/50"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full cursor-pointer rounded-sm bg-[#2DB34B] px-4 py-4 text-[14px] font-semibold uppercase tracking-widest text-[#082241] transition-colors duration-200 hover:bg-[#EDF4FD]"
                >
                  SEND MESSAGE
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
