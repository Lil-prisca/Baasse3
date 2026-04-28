"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import mentor1 from "../assets/mentor1.jpg";
import mentor2 from "../assets/mentor2.jpg";
import mentor3 from "../assets/Mentor3.jpg";

function MentorCard() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-3xl md:text-5xl px-10 md:px-30 lg:px-60 text-white text-center font-bold mb-4">
        Join 2000+ mentors to lead the next gen in the web3 space
      </h2>
      <p className="text-[#717171] text-sm md:text-xl text-center px-10 leading-relaxed">
        Become part of a thriving learning community that values knowledge,
        growth, and collaboration.
      </p>

      <div
        ref={ref}
        className={`transition-all duration-700 ease-out
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
      >
        {/* overflow-hidden clips the images at the bottom like they're behind a wall */}
        <div className="relative mt-8 h-56 overflow-hidden">
          {/* Left image — slides up and fans left when visible */}
          <Image
            src={mentor2}
            alt="Mentor 2"
            className="w-30 h-45 absolute rounded-2xl shadow-lg shadow-green-500/50 transition-all duration-700 ease-out"
            style={{
              bottom: isVisible ? "0px" : "-96px",
              left: "50%",
              transform: isVisible
                ? "translateX(calc(-50% - 80px)) rotate(-20deg)"
                : "translateX(-50%) rotate(-5deg)",
              transitionDelay: isVisible ? "150ms" : "0ms",
            }}
          />

          {/* Center image — slides straight up */}
          <Image
            src={mentor1}
            alt="Mentor 1"
            className="w-44 h-54 absolute rounded-2xl shadow-lg shadow-green-500/50 transition-all duration-700 ease-out"
            style={{
              bottom: isVisible ? "0px" : "-96px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              transitionDelay: isVisible ? "0ms" : "0ms",
            }}
          />

          {/* Right image — slides up and fans right when visible */}
          <Image
            src={mentor3}
            alt="Mentor 3"
            className="w-30 h-45 absolute rounded-2xl shadow-lg shadow-green-500/50 transition-all duration-700 ease-out"
            style={{
              bottom: isVisible ? "0px" : "-96px",
              left: "50%",
              transform: isVisible
                ? "translateX(calc(-50% + 80px)) rotate(20deg)"
                : "translateX(-50%) rotate(5deg)",
              transitionDelay: isVisible ? "150ms" : "0ms",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MentorCard;
