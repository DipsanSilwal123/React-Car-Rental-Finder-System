import React from "react";

const Hero = (props) => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-600 py-24 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {props.title || "Rent Your Perfect Car Today"}
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-teal-100">
              {props.subtitle || "Choose from a wide range of cars for city trips, weekend getaways, or long journeys."}
            </p>

            {/* Optional Call-to-Action Button */}
            {props.cta && (
              <a
                href={props.ctaLink || "#cars"}
                className="mt-8 inline-block bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                {props.cta}
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
