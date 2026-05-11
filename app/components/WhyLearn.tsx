"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../assets/mentor1.jpg";
import img2 from "../assets/mentor2.jpg";
import img3 from "../assets/Mentor3.jpg";
import React from "react";
const mentorImg = [
  { image: img1 },
  { image: img2 },
  { image: img1 },
  { image: img3 },
];

const WhyLearn = () => {
  return (
    <section className=" mx-5  py-12 md:px-20 lg:px-40">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        // viewport={{ once: true }}
        className="text-3xl font-bold text-white text-center mb-8"
      >
        Why Learn Everything Web3?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4"
      >
        {/* Trusted by key players */}
        <div className="bg-[#0E1910] text-white text-center rounded-3xl px-6 py-8">
          <div className="flex  m-auto w-fit  -space-x-10 mb-10">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-full to-green-900   flex items-center justify-center"
              >
                <Image
                  src={mentorImg[i].image}
                  alt="Player"
                  className="w-20 h-20 rounded-full"
                />
              </div>
            ))}
          </div>

          <h3 className="text-2xl px-8 font-semibold mb-5">
            Trusted by key players in the web3 space
          </h3>
          <p className="text-[#717171] text-sm leading-relaxed mb-10">
            Become part of a thriving community that values knowledge, growth,
            and collaboration.
          </p>

          <div className="flex   m-auto w-fit   gap-3">
            <button className="bg-[#00B328] text-white text-sm font-medium px-5 py-2 rounded-full">
              Get Started
            </button>
            <button className="border border-[#00B328] text-[#00B328] text-sm font-medium px-5 py-2 rounded-full">
              Become a Mentor
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyLearn;
