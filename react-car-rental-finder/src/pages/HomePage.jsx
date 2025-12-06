import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import CarsListing from "../components/CarsListing";
import ViewAllCars from "../components/ViewAllCars";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Drive Your Dream Car Today"
        subtitle="Easy, fast, and secure car rentals near you"
        className="bg-teal-700 text-white"
      />

      {/* Renters & Car Owners Section */}
      <section className="py-12 bg-teal-50">
        <HomeCards
          renterBtnClass="bg-teal-600 hover:bg-teal-700 text-white"
          ownerBtnClass="bg-teal-500 hover:bg-teal-600 text-white"
        />
      </section>

      {/* Featured Cars Section */}
      <section className="py-12 bg-teal-100">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
            Featured Cars
          </h2>
          <CarsListing isHome={true} />
        </div>
      </section>

      {/* View All Cars Button */}
      <section className="py-8 bg-teal-50">
        <ViewAllCars
          btnClass="bg-teal-600 hover:bg-teal-700 text-white"
        />
      </section>
    </>
  );
};

export default HomePage;
