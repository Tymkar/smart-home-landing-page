import React from "react";
import partner1 from "../../src/assets/partner1.svg";
import partner2 from "../../src/assets/partner2.svg";
import partner3 from "../../src/assets/partner3.svg";
import partner4 from "../../src/assets/partner4.svg";
import partner5 from "../../src/assets/partner5.svg";
import partner6 from "../../src/assets/partner6.svg";
import partner7 from "../../src/assets/partner7.svg";

function Partners() {
  return (
    <section
      aria-labelledby="partners"
      className="text-center grid gap-8 place-items-center"
    >
      <div className="grid gap-4">
        <h2 id="partners" className="text-4xl font-bold text-amber-400">
          Our Partners
        </h2>
        <p className="w-full max-w-lg">
          We've partnered with hundreds of smart home brands to help you create
          a smart home that fits your needs and doesn't lock you in.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={partner1} alt="Partner" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={partner2} alt="Partner" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={partner3} alt="Partner" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={partner4} alt="Partner" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={partner5} alt="Partner" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={partner6} alt="Partner" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={partner7} alt="Partner" className="h-16 w-16" />
        </div>
      </div>
    </section>
  );
}

export default Partners;
