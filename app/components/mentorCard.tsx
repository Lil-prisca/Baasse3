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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
    >
      I slide in from left when you scroll to me
      <div className="flex justify-center relative mt-8 h-28">
        {/* Left image — fans out to the left */}
        <Image
          src={mentor2}
          alt="Mentor 2"
          className="w-24 h-24 absolute shadow-lg shadow-green-500/50 transition-all duration-700 ease-out"
          style={{
            transform: isVisible
              ? "translateX(-80px) rotate(-20deg)"
              : "translateX(0px) rotate(-5deg)",
            transitionDelay: isVisible ? "200ms" : "0ms",
            zIndex: 0,
          }}
        />

        {/* Center image — stays in place */}
        <Image
          src={mentor1}
          alt="Mentor 1"
          className="w-24 h-24 shadow-lg shadow-green-500/50"
          style={{ zIndex: 10, position: "relative" }}
        />

        {/* Right image — fans out to the right */}
        <Image
          src={mentor3}
          alt="Mentor 3"
          className="w-24 h-24 absolute shadow-lg shadow-green-500/50 transition-all duration-700 ease-out"
          style={{
            transform: isVisible
              ? "translateX(80px) rotate(20deg)"
              : "translateX(0px) rotate(5deg)",
            transitionDelay: isVisible ? "200ms" : "0ms",
            zIndex: 0,
          }}
        />
      </div>
    </div>
  );
}

export default MentorCard;
