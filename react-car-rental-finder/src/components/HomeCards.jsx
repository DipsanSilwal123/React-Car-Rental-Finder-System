import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <>
      {/* Renters & Vehicle Owners */}
      <section className="py-10 bg-teal-50">
        <div className="container-xl lg:container m-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Rent a Car */}
            <Card bg="bg-white shadow-lg border border-teal-200">
              <h2 className="text-2xl font-bold text-teal-700">For Renters</h2>
              <p className="mt-3 mb-6 text-gray-700">
                Browse available cars and book your ride easily and securely.
              </p>
              <Link
                to="/cars"
                className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg px-6 py-2 transition duration-300 shadow-md"
              >
                Browse Cars
              </Link>
            </Card>

            {/* List a Car */}
            <Card bg="bg-teal-100 shadow-md border border-teal-200">
              <h2 className="text-2xl font-bold text-teal-800">For Car Owners</h2>
              <p className="mt-3 mb-6 text-gray-700">
                List your vehicle and start earning from rentals today.
              </p>
              <Link
                to="/add-car"
                className="inline-block bg-teal-700 hover:bg-teal-600 text-white font-semibold rounded-lg px-6 py-2 transition duration-300 shadow-md"
              >
                List a Car
              </Link>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards
