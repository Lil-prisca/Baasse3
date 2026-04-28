import Image from "next/image";
import React from "react";
import videoCall from "../assets/video-call.webp";
import peopleCollage from "../assets/people-collage1.png";
import peopleCollage1 from "../assets/PeopleCollage.png";
import colorfilter from "../assets/colorfilter.3dd46f85.svg";
import { FaMicrophone, FaVideo, FaPhone, FaEllipsisH } from "react-icons/fa";

const LearnEverthing = () => {
  return (
    <div className="bg-black text-white py-6 md:px-40">
      {/* Learn */}
      <h3 className=" text-center text-4xl my-10"> Learn Everthing Web3</h3>

      <section className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-4   lg:grid-cols-3  lg:gap-4">
        <div className=" bg-[#1A1A1A] rounded-3xl items-center mx-5 py-10 md:py-5 px-6">
          <p className="mb-5">
            <Image
              src={colorfilter}
              alt="Color-Filter"
              className="w-12 h-12"
            />{" "}
          </p>
          <h3 className="text-3xl">Engage in one-on-one sessions</h3>
          <p className="text-[#717171] text-1xl mt-5">
            Digital currency, wich is an alternative form of payment crated
            using encription algorithms
          </p>
        </div>
        <div className=" bg-[#1A1A1A] rounded-3xl items-center mx-5 py-17 px-6 md:py-5">
          <p className="mb-5">
            <Image
              src={colorfilter}
              alt="Color-Filter"
              className="w-12 h-12"
            />{" "}
          </p>
          <h3 className="text-3xl">Engage in one-on-one sessions</h3>
          <p className="text-[#717171] text-1xl mt-5">
            Digital currency, wich is an alternative form of payment crated
            using encription algorithms
          </p>
        </div>
        <div className=" bg-[#1A1A1A] rounded-3xl items-center mx-5 py-10 px-6 md:py-5">
          <p className="mb-5">
            <Image
              src={colorfilter}
              alt="Color-Filter"
              className="w-12 h-12"
            />{" "}
          </p>
          <h3 className="text-3xl">Engage in one-on-one sessions</h3>
          <p className="text-[#717171] text-1xl mt-5">
            Digital currency, wich is an alternative form of payment crated
            using encription algorithms
          </p>
        </div>
      </section>

      {/* video  */}
      <section>
        <section className="px-6 ">
          <div>
            <Image
              src={videoCall}
              alt="learn everything"
              className=" block m-auto mt-10 w-110 h-80 rounded-3xl transition-transform duration-300 
hover:scale-85"
            />
          </div>
          <div className=" flex gap-2  w-fit items-center mt-7 px-5 mx-auto">
            <div className="w-10 h-10 bg-[#083510] flex items-center  rounded-xl">
              <FaMicrophone className=" h-5 w-5 text-[white] mx-auto" />
            </div>
            <div className="w-10 h-10 bg-[#083510] flex items-center  rounded-xl">
              <FaVideo className=" h-5 w-5 text-[white] mx-auto" />
            </div>
            <div className="w-10 h-10 bg-[#111111]  flex items-center flex items-center  rounded-xl">
              <FaEllipsisH className=" h-5 w-5 text-[white] mx-auto" />
            </div>
            <div className="w-10 h-10 bg-[red] flex items-center  rounded-xl">
              <FaPhone className=" h-5 w-5 text-[white] mx-auto" />
            </div>
          </div>
        </section>
      </section>

      {/* why */}
      <section className=" mt-25">
        <h3 className=" text-center text-4xl my-10"> Why baase3?</h3>
        <section className="flex flex-col gap-10">
          <div className=" bg-[#1A1A1A] rounded-3xl items-center mx-5 pt-10 ">
            <h3 className="text-3xl text-center mb-7">Elevate Your Career</h3>
            <p className="text-[#718A77] text-2xl px-6">
              Engage witt top mentors on Base3 to not only expand your skills
              butt also open doors to potential employment.
            </p>

            <button className=" block m-auto rounded-3xl py-1 px-4 text-[17px] text-white bg-[#00B328] my-6">
              Get Started{" "}
            </button>
            <p>
              <Image
                src={peopleCollage}
                alt="People Collage"
                className="w-full md:hidden"
              />
              <Image
                src={peopleCollage1}
                alt="People Collage"
                className=" hidden w-full md:block rounded-b-3xl"
              />
            </p>
          </div>
          <div className=" flex flex-col gap-10 md:flex md:gap-10 ">
            <div className=" bg-[#1A1A1A] rounded-3xl items-center mx-5  py-17 px-6 md:py-6">
              <p className="mb-5">
                <Image
                  src={colorfilter}
                  alt="Color-Filter"
                  className="w-12 h-12"
                />{" "}
              </p>
              <h3 className="text-2xl">Build your skill set in Web3 space</h3>
              <p className="text-[#717171] text-2xl mt-5">
                Digital currency, wich is an alternative form of payment created
                using encription algorithms
              </p>
            </div>

            <div className=" bg-[#011B06] rounded-3xl items-center mx-5 py-17 px-6 md:py-6">
              <p className="mb-5">
                <Image
                  src={colorfilter}
                  alt="Color-Filter"
                  className="w-12 h-12"
                />{" "}
              </p>
              <h3 className="text-2xl">Earn exciting Tokens</h3>
              <p className="text-[#717171] text-2xl mt-5">
                Digital currency, wich is an alternative form of payment crated
                using encription algorithms
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default LearnEverthing;
