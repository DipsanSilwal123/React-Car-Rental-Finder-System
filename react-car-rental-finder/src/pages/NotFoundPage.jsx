import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-teal-50 px-4">
      <FaExclamationTriangle className="text-teal-400 text-6xl mb-6" />
      <h1 className="text-6xl font-extrabold mb-4 text-teal-800">404 Not Found</h1>
      <p className="text-xl mb-6 text-teal-700">Oops! This page does not exist.</p>
      <Link
        to="/"
        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg px-6 py-3 transition-shadow shadow-md"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
