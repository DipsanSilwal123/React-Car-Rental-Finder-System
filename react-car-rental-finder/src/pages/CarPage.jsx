import React from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { useParams, useLoaderData, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CarPage = ({ deleteCar }) => {
  const { id } = useParams();
  const car = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (carId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this car?");
    if (!confirmDelete) return;

    deleteCar(carId);
    toast.success("Car deleted successfully");
    navigate("/cars");
  };

  return (
    <>
      {/* Back Button */}
      <section className="bg-white border-b">
        <div className="container mx-auto py-6 px-6">
          <NavLink
            to="/cars"
            className="text-teal-600 hover:text-teal-700 flex items-center font-medium"
          >
            <FaArrowLeft className="mr-2" /> Back to Car Listings
          </NavLink>
        </div>
      </section>

      <section className="bg-teal-50 py-10">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT — MAIN CAR CONTENT */}
          <main className="lg:col-span-2 space-y-8">

            {/* Car Header */}
            <div className="bg-white shadow-md rounded-xl p-8">
              <p className="text-teal-600 text-sm uppercase font-semibold tracking-wide mb-3">
                {car.type} • {car.transmission}
              </p>

              <h1 className="text-4xl font-extrabold text-teal-900 leading-tight mb-4">
                {car.name}
              </h1>

              <div className="flex items-center text-teal-700 text-lg">
                <FaMapMarker className="text-teal-500 mr-2" />
                <span className="font-medium">{car.location}</span>
              </div>
            </div>

            {/* Car Details */}
            <div className="bg-white shadow-md rounded-xl p-8">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                Car Description
              </h3>

              <p className="text-teal-800 leading-relaxed mb-6">
                {car.description}
              </p>

              <h3 className="text-2xl font-bold text-teal-700 mb-2">
                Rental Price
              </h3>

              <p className="text-teal-900 font-semibold text-lg">
                ${car.price} / Day
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-teal-800">
                <p><strong>Fuel:</strong> {car.fuel}</p>
                <p><strong>Seats:</strong> {car.seats}</p>
                <p><strong>Mileage:</strong> {car.mileage}</p>
                <p><strong>Year:</strong> {car.year}</p>
              </div>
            </div>
          </main>

          {/* RIGHT — SIDEBAR */}
          <aside className="space-y-8">

            {/* Rental Company Info */}
            <div className="bg-white shadow-md rounded-xl p-8">
              <h3 className="text-xl font-bold text-teal-900 mb-6">
                Rental Company
              </h3>

              <h2 className="text-2xl font-semibold text-teal-800 mb-2">
                {car.company.name}
              </h2>

              <p className="text-teal-700 mb-4 leading-relaxed">
                {car.company.description}
              </p>

              <hr className="my-4 border-teal-200" />

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-800">Contact Email</h4>
                  <p className="bg-teal-50 text-teal-700 p-2 rounded font-medium">
                    {car.company.contactEmail}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-teal-800">Contact Phone</h4>
                  <p className="bg-teal-50 text-teal-700 p-2 rounded font-medium">
                    {car.company.contactPhone}
                  </p>
                </div>
              </div>
            </div>

            {/* Manage Car */}
            <div className="bg-white shadow-md rounded-xl p-8">
              <h3 className="text-xl font-bold text-teal-900 mb-6">
                Manage Car
              </h3>

              <NavLink
                to={`/edit-car/${car.id}`}
                className="w-full block text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-full transition shadow"
              >
                Edit Car
              </NavLink>

              <button
                onClick={() => onDeleteClick(car.id)}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-full mt-4 transition shadow"
              >
                Delete Car
              </button>
            </div>

          </aside>
        </div>
      </section>
    </>
  );
};

const carLoader = async ({ params }) => {
  const res = await fetch(`/api/cars/${params.id}`);
  return res.json();
};

export { CarPage as default, carLoader }
