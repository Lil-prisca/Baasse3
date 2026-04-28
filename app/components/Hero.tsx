import Image from "next/image";
import React from "react";
import ipad from "../assets/ipad-mobile.webp";
import ipad1 from "../assets/iPad 1.png";
import { FaStar, FaRegStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" bg-[#F8F8F8] text-white  pt-10 ">
      {/* Badge */}
      <div className="flex justify-center px-5 mb-6">
        <div className=" text-black  flex  px-0 py-1 items-center gap-3 -rotate-4 w-85">
          <div className="flex items-center -space-x-5  w-fit">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-700 to-green-900   flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
                </svg>
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
      <h1
        className="  text-5xl 
       mx-2  
        text-black rotate-[-5deg] font-bold text-center leading-tight
         mb-6 
         md:text-7xl 
         md:mb-10  
         md:mx-10 "
      >
        Mentorship by <br />
        <div className="bg-[#00B328] text-4xl w-fit flex mx-auto  px-7 py-5 text-white rounded-2xl mt-1 md:text-7xl md:mt-0  md:px-10  lg:text-8xl lg:mt-0  lg:px-10">
          <FaStar className=" text-black  pr-3 flex items-center lg:pr-8 " />
          World-Class
          <FaStar className=" text-black pl-3 flex items-center lg:pl-8" />
        </div>{" "}
        Mentors!
      </h1>

      <p className="text-[#717171] text-center text-sm leading-relaxed mb-8 px-6 md:px-45 lg:px-65 lg:text-2xl lg:text-black  ">
        You get to learn from industry experts and thought leaders without
        intermediaries. Base3 connects you directly with mentors, ensuring a
        personalised and authentic learning experience.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 px-5 justify-center mb-10">
        <button className="bg-[#00B328] text-white text-sm font-medium px-5 py-2.5 rounded-full">
          Sign up
        </button>
        <button className="bg-white  text-black text-sm font-medium px-5 py-2.5 rounded-full">
          Become a Mentor
        </button>
      </div>

      {/* Mentor Avatars Grid */}
      <div>
        <Image src={ipad} className="block md:hidden w-full" alt="iPad" />
        <Image
          src={ipad1}
          className="  hidden md:block md:px-15 lg:px-25"
          alt="iPad1"
        />
      </div>
      {/* Stats */}
      <div className="flex w-full pb-12 pt-12 bg-black justify-around md:px-30  lg:px-50 ">
        <div className="text-center pl-10">
          <p className="text-4xl font-bold text-[#C4F4CF] md:text-5xl">2K+</p>
          <p className="text-xs text-[#717171] mt-1">Mentors</p>
        </div>
        {/* <div className="w-px bg-[#2A2A2A]" /> */}
        <div className="text-center">
          <p className="text-4xl font-bold text-[#C4F4CF] md:text-5xl">4500+</p>
          <p className="text-xs text-[#717171] mt-1">World projects</p>
        </div>
        {/* <div className="w-px bg-[#2A2A2A]" /> */}
        <div className="text-center pr-10">
          <p className="text-4xl font-bold text-[#C4F4CF] md:text-5xl">154+</p>
          <p className="text-xs text-[#717171] mt-1">Countries</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
