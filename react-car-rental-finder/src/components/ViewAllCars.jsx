import React from "react";
import { Link } from "react-router-dom";

const ViewAllCars = () => {
  return (
    <>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          to="/cars"
          className="block bg-teal-500 text-white text-center py-4 px-6 rounded-xl shadow-md hover:bg-teal-600 transition duration-200"
        >
          View All Cars
        </Link>
      </section>
    </>
  );
};

export default ViewAllCars
