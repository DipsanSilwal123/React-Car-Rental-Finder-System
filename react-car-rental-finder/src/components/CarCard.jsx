import React, { useState } from "react";
import { FaMapMarker, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = car.description;
  if (!showFullDescription) {
    description = description.substring(0, 100) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <div className="p-5">
        {/* Car Type & Name */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-teal-600 font-semibold">
            <FaCar className="text-teal-500" />
            {car.type}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{car.name}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        <button
          onClick={() => setShowFullDescription((prev) => !prev)}
          className="text-teal-600 font-medium hover:text-teal-700 mb-4 transition-colors duration-200"
        >
          {showFullDescription ? "Show Less" : "Show More"}
        </button>

        {/* Price */}
        <h4 className="text-teal-700 font-bold text-lg mb-4">
          ${car.price} / Day
        </h4>

        <div className="border-t border-gray-200 mb-4" />

        {/* Location & Details Button */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
          <div className="flex items-center text-teal-600 font-medium">
            <FaMapMarker className="mr-1" />
            {car.location}
          </div>

          <Link
            to={`/cars/${car.id}`}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard