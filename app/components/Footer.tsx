import React from "react";

const Footer = () => {
  const links = {
    About: ["Team", "News", "Contact-us"],
    Product: ["About", "Features", "Pricing"],
    Social: ["Twitter", "LinkedIn", "Instagram"],
  };

  return (
    <div className="  flex flex-col lg:flex-row gap-10px md:px-40">
      {/*  */}
      <footer
        className=" bg-[#1A1A1A] flex flex-col mx-8 px-8 my-10 gap-10  rounded-3xl
         md:flex-1 md:gap-20  md:flex-row-reverse  md:px-15 md:pt-10
       "
      >
        <div className="md:mt-10">
          {/* Get mentored */}
          <div className=" text-white  rounded-3xl  py-8 md:hidden">
            {" "}
            <h3 className="text-xl font-semibold mb-3">
              Get mentored by world class mentors
            </h3>
            <p className="text-[#717171] text-sm leading-relaxed">
              Digital currency, which is an alternative form of payment created
              using encryption algorithms.
            </p>
          </div>
          {/* Newsletter */}
          <div className=" text-[#555555] ">
            <h3 className=" text-white text-xl font-semibold mb-4">
              Join our newsletter
            </h3>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder=" Your email"
                className=" bg-white/20 placeholder-white/60 text-white text-sm pl-4 py-2.5 rounded-full outline-none "
              />
              <button className="bg-[#00B328] text-white text-sm font-medium px-4 py-2.5 rounded-full whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className=" text-sm mt-4 mb-5">
              Digital currency, which is an alternative form of payment created
              using encryption algorithms.
            </p>
          </div>
        </div>

        {/*  */}
        <section className=" text-white   pt-10 pb-6 ">
          <h3 className=" hidden text-xl font-semibold mb-3 md:block">
            Get mentored by world class mentors
          </h3>
          {/* Links */}
          <div className="grid grid-cols-3 justify-between mb-10   ">
            {Object.entries(links).map(([category, items]) => (
              <div key={category} className=" w-fit ">
                <h4 className="text-[#717171] text-xs uppercase tracking-widest mb-3">
                  {category}
                </h4>
                <ul className=" flex flex-col gap-2 w-fit  ">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white text-sm hover:text-[#00B328] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </footer>

      {/* Social icons */}
      <div className="flex justify-between md:my-10 mb-8 mx-2 px-8 md:grid md:grid-rows-3 md:justify-between md:gap-10 md:px-0 ">
        {/* Twitter/X */}
        <div className=" bg-[#121212] py-5 px-8 rounded-2xl md:items-center md:flex">
          <a
            href="#"
            className="w-9 h-9 md:h-15 md:w-15 rounded-full  flex items-center justify-center hover:bg-[#00B328]/20 transition-colors md:items-center"
          >
            <svg
              className="w-8 h-8   text-[#C4F4CF]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
        {/* LinkedIn */}
        <div className=" bg-[#121212] py-5 px-8 rounded-2xl md:items-center md:flex">
          <a
            href="#"
            className="w-9 h-9 md:h-15 md:w-15 rounded-full  flex items-center justify-center hover:bg-[#00B328]/20 transition-colors"
          >
            <svg
              className="w-8 h-8 text-[#C4F4CF]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Instagram */}
        <div className=" bg-[#121212] py-5 px-8 rounded-2xl md:items-center md:flex">
          <a
            href="#"
            className="w-9 h-9  md:h-15 md:w-15 rounded-full  flex items-center justify-center hover:bg-[#00B328]/20 transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#C4F4CF]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4771 1.691 4.919 4.919.058 1.265.069 1645.069 4.849 0 3.205-.012 3.584-069 4.849-.149 3.225-1.664 4.771-4919 4.919-1.266.058-1.644.07-4.85.07-3204 0-3.584-.012-4.849-.07-3.26-149-4.771-1.699-4.919-4.92-058-1.265-.07-1.644-.07-4.849 0-3.204013-3.583.07-4.849.149-3.227 1664-4.771 4.919-4.919 1.266-.057 1645-.069 4.849-.069zM12 0C8.741 0 8333.014 7.053.072 2.695.272.273 2.69073 7.052.014 8.333 0 8.741 012c0 3.259.014 3.668.072 4.948.2 4358 2.618 6.78 6.98 6.98C8.333 23.9868.741 24 12 24c3.259 0 3.668-.014 4948-.072 4.354-.2 6.782-2.618 6979-6.98.059-1.28.073-1.689.073-4948 0-3.259-.014-3.667-.072-4.947-196-4.354-2.617-6.78-6.979-698C15.668.014 15.259 0 12 0zm0 5838a6.162 6.162 0 100 12.324 6.162 6162 0 000-12.324zM12 16a4 4 0110-8 4 4 0 010 8zm6.406-11.845a1.44 144 0 100 2.881 1.44 1.44 0 000-2881z" />{" "}
            </svg>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
