import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditCarPage = ({ updateCarSubmit }) => {
  const car = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  if (!car) {
    return (
      <div className="text-center py-20 text-teal-600">
        Loading car details...
      </div>
    );
  }

  const [name, setName] = useState(car.name);
  const [type, setType] = useState(car.type);
  const [transmission, setTransmission] = useState(car.transmission);
  const [description, setDescription] = useState(car.description);
  const [location, setLocation] = useState(car.location);
  const [price, setPrice] = useState(car.price);
  const [fuel, setFuel] = useState(car.fuel);
  const [seats, setSeats] = useState(car.seats || 4);
  const [mileage, setMileage] = useState(car.mileage);
  const [year, setYear] = useState(car.year || new Date().getFullYear());

  const [companyName, setCompanyName] = useState(car.company?.name);
  const [companyDescription, setCompanyDescription] = useState(car.company?.description);
  const [contactEmail, setContactEmail] = useState(car.company?.contactEmail);
  const [contactPhone, setContactPhone] = useState(car.company?.contactPhone);

  const submitForm = (e) => {
    e.preventDefault();

    const updatedCar = {
      id,
      name,
      type,
      transmission,
      description,
      location,
      price,
      fuel,
      seats,
      mileage,
      year,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateCarSubmit(updatedCar);
    toast.success("Car Updated Successfully 🚗");
    navigate(`/cars/${id}`);
  };

  return (
    <section className="bg-teal-50 min-h-screen py-16">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="bg-white p-10 rounded-xl shadow-lg border border-teal-200">
          <h2 className="text-4xl font-extrabold text-teal-800 text-center mb-10">
            Edit Car Listing
          </h2>

          <form onSubmit={submitForm} className="space-y-6">
            {/* Car Name */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Car Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                placeholder="Car Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Car Type */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Car Type
              </label>
              <select
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-2 px-3 text-teal-700 bg-teal-50"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Electric">Electric</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>

            {/* Transmission */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Transmission
              </label>
              <select
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-2 px-3 text-teal-700 bg-teal-50"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                required
              >
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            {/* Fuel */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Fuel Type
              </label>
              <select
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-2 px-3 text-teal-700 bg-teal-50"
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
                required
              >
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Price Per Day ($)
              </label>
              <input
                type="number"
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            {/* Seats */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Number of Seats
              </label>
              <input
                type="number"
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                required
              />
            </div>

            {/* Mileage */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Mileage
              </label>
              <input
                type="text"
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Year
              </label>
              <input
                type="number"
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-lg font-semibold text-teal-700 mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                placeholder="Pickup Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            {/* Company Info */}
            <div className="pt-6 border-t border-teal-200">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">
                Company Information
              </h3>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-teal-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-teal-700 mb-2">
                  Company Description
                </label>
                <textarea
                  rows="4"
                  className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label className="block text-lg font-semibold text-teal-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-lg font-semibold text-teal-700 mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border-teal-300 focus:ring-teal-500 focus:border-teal-500 py-3 px-4 bg-teal-50"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-teal-700 transition duration-200 shadow-md"
              >
                Update Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditCarPage
