"use client";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  const links = {
    About: ["Team", "News", "Contact-us"],
    Product: ["About", "Features", "Pricing"],
    Social: ["Twitter", "LinkedIn", "Instagram"],
  };

  return (
    <div className=" flex flex-col lg:flex-row items-stretch gap-0 md:px-20 lg:px-40">
      {/* Footer main */}
      <motion.div
        className="lg:flex-1"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <footer
          className="bg-[#1A1A1A] flex flex-col mx-6 px-6 my-10 gap-10 rounded-3xl
          lg:flex-1 lg:gap-20 lg:flex-row-reverse lg:px-15 lg:pt-10 lg:my-10 "
        >
          <div className="md:mt-10">
            {/* Get mentored */}
            <div className="text-white rounded-3xl py-8 lg:hidden">
              <h3 className="text-xl font-semibold mb-3">
                Get mentored by world class mentors
              </h3>
              <p className="text-[#717171] text-sm leading-relaxed">
                Digital currency, which is an alternative form of payment
                created using encryption algorithms.
              </p>
            </div>
            {/* Newsletter */}
            <div className="text-[#555555]">
              <h3 className="text-white text-xl font-semibold mb-4">
                Join our newsletter
              </h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/20 min-w-4 placeholder-white/60 text-white text-sm pl-4 py-2.5 rounded-full outline-none"
                />
                <button className="bg-[#00B328] text-white text-[12px] md:text-sm font-medium px-2 py-2 rounded-full whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-4 mb-0">
                Digital currency, which is an alternative form of payment
                created using encryption algorithms.
              </p>
            </div>
          </div>

          <section className="text-white pt-10 pb-6">
            <h3 className="hidden text-xl font-semibold mb-3 lg:block">
              Get mentored by world class mentors
            </h3>
            <div className="grid grid-cols-3 justify-between mb-10">
              {Object.entries(links).map(([category, items]) => (
                <div key={category} className="w-fit">
                  <h4 className="text-[#717171] text-xs uppercase tracking-widest mb-3">
                    {category}
                  </h4>
                  <ul className="flex flex-col gap-2 w-fit">
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
      </motion.div>

      {/* Social icons — now stretches full height */}
      <div
        className="flex justify-between mx-6 mb-8
        lg:flex-col lg:justify-between lg:my-10 lg:mx-0 lg:gap-0"
      >
        {[
          {
            href: "#",
            icon: (
              <svg
                className="w-6 h-6 text-[#C4F4CF]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            ),
          },
          {
            href: "#",
            icon: (
              <svg
                className="w-8 h-8 text-[#C4F4CF]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            ),
          },
          {
            href: "#",
            icon: (
              <svg
                className="w-4 h-4 text-[#C4F4CF]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            ),
          },
        ].map((social, index) => (
          <motion.div
            key={index}
            className="flex-1 flex items-center justify-center lg:flex-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-[#121212] mx-2 py-2 rounded-2xl flex items-center justify-center w-full h-full lg:w-auto lg:h-auto lg:px-5 lg:py-5">
              <a
                href={social.href}
                className="flex items-center justify-center hover:bg-[#00B328]/20 transition-colors p-2 rounded-full"
              >
                {social.icon}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
