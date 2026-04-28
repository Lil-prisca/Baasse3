import React from "react";

const WhyLearn = () => {
  return (
    <section className=" mx-5  py-12 md:px-20 lg:px-40">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Why Learn Everything Web3?
      </h2>

      <div className="flex flex-col gap-4">
        {/* Trusted by key players */}
        <div className="bg-[#0E1910] text-white text-center rounded-3xl px-6 py-8">
          <div className="flex  m-auto w-fit  -space-x-10 mb-10">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-green-700 to-green-900   flex items-center justify-center"
              >
                <svg
                  className="w-15 h-15 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
                </svg>
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
      </div>
    </section>
  );
};

export default WhyLearn;
