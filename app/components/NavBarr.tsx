import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Logo.png";
import logo1 from "@/app/assets/Logo (1).png";

const NavBar = () => {
  return (
    <div className="bg-[#F8F8F8] w-full h-full py-7">
      <div
        className=" flex justify-between shadow-sm  bg-transparent
      rounded-4xl px-3 py-2  mx-5  rounded- bg-red"
      >
        <Image
          src={logo1}
          className="w-15  my-auto  h-5 ml-5 center"
          alt="logo"
        />
        <div className=" flex gap-6">
          <p className="w-fit hidden mt-auto md:block mb-auto px-3 py-1.5 h-fit  bg-[#ccffd7] rounded-4xl text-black  text-center text-[12px] ">
            {" "}
            Become a Member{" "}
          </p>
          <p className="w-fit mt-auto mb-auto px-3 py-1.5 h-fit  bg-[#00B328] rounded-4xl text-white  text-center text-[12px] ">
            {" "}
            Sign Up{" "}
          </p>
        </div>
        {/* <button>Sign up <button/> */}
      </div>
    </div>
  );
};

export default NavBar;
