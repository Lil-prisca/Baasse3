"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import React from "react";
import ipad from "../assets/ipad-mobile.webp";
import ipad1 from "../assets/iPad 1.png";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from "../assets/mentor1.jpg";
import img2 from "../assets/mentor2.jpg";
import img3 from "../assets/Mentor3.jpg";
import snow from "../assets/Snowflake_044f_06.jpg";
import snowfall from "../assets/snowfall.png";
const mentorImg = [
  { image: img1 },
  { image: img2 },
  { image: img1 },
  { image: img3 },
];

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // hide preloader after everything l
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className=" bg-[#F8F8F8] text-white border-0 pt-10 ">
      {/* Badge */}
      <div className="flex justify-center px-5 mb-6">
        <div className=" text-black  flex  px-0 py-1 items-center gap-3 -rotate-4 w-85 lg:w-100">
          <div className="flex items-center -space-x-5  w-fit">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full flex items-center justify-center lg:w-12 lg:h-12"
              >
                <Image
                  src={mentorImg[i].image}
                  alt="Player"
                  className=" w-10 h-10 rounded-full lg:w-12 lg:h-12"
                />
              </div>
            ))}
          </div>
          <span className=" font-bold text-[12px]">
            {" "}
            Join 10,000+ mentes to boost your career growth. Subscribe to
            premium{" "}
          </span>
        </div>
      </div>

      {/* Headline */}
      <motion.h1
        initial={{ y: -300, opacity: 0, rotate: -8 }}
        animate={
          isLoading
            ? {}
            : {
                y: 0,
                opacity: 1,
                rotate: -5,
                scale: 1,
              }
        }
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          mass: 1,
        }}
        className="  text-5xl 
       mx-2  
        text-black rotate-[-5deg] font-bold text-center leading-tight
         mb-6 
         md:text-7xl 
         md:mb-10  
         md:mx-10 "
      >
        <motion.span>Mentorship by</motion.span> <br />
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          className="relative overflow-hidden bg-[#00B328] text-4xl w-fit flex mx-auto px-7 py-5 text-white rounded-2xl mt-1 md:text-7xl md:mt-0 md:px-10 lg:text-8xl lg:mt-0 lg:px-10"
        >
          {/* Transparent Background Image */}
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage: `url(${snowfall.src})`,
            }}
          />

          {/* Content */}
          <FaStar className="relative z-10 text-black pr-3 flex items-center lg:pr-8" />

          <span className="relative z-10">World-Class</span>

          <FaStar className="relative z-10 text-black pl-3 flex items-center lg:pl-8" />
        </motion.div>
        <motion.span>Mentors!</motion.span>
      </motion.h1>

      <p className="text-[#717171] text-center text-sm leading-relaxed mb-8 px-6 md:px-45 lg:px-65 lg:text-2xl lg:text-black  ">
        You get to learn from industry experts and thought leaders without
        intermediaries. Base3 connects you directly with mentors, ensuring a
        personalised and authentic learning experience.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 px-5 justify-center mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-[#00B328] text-white text-sm font-medium px-5 py-2.5 rounded-full"
        >
          Sign up
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-white  text-black text-sm font-medium px-5 py-2.5 rounded-full"
        >
          Become a Mentor
        </motion.button>
      </div>

      {/* Mentor Avatars Grid */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image src={ipad} className="block md:hidden w-full" alt="iPad" />
        <Image
          src={ipad1}
          className="  hidden md:block md:px-15 lg:px-25"
          alt="iPad1"
        />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex w-full px-5 pb-12 pt-12 bg-black justify-between md:px-30  lg:px-50 "
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-center "
        >
          <p className="text-4xl font-bold text-[#C4F4CF] md:text-5xl">2K+</p>
          <p className="text-xs text-[#717171] mt-1">Mentors</p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <p className="text-4xl font-bold text-[#C4F4CF] md:text-5xl">4500+</p>
          <p className="text-xs text-[#717171] mt-1">World projects</p>

          {/* <div className="w-px bg-[#2A2A2A]" /> */}
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-center "
        >
          <p className="text-4xl font-bold text-[#C4F4CF] md:text-5xl">154+</p>
          <p className="text-xs text-[#717171] mt-1">Countries</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

// tech stack.md
