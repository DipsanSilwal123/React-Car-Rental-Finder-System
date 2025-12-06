import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCarPage = ({ addCarSubmit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Sedan");
  const [transmission, setTransmission] = useState("Automatic");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(3000);
  const [fuel, setFuel] = useState("Petrol");
  const [seats, setSeats] = useState(4);
  const [mileage, setMileage] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());

  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newCar = {
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

    addCarSubmit(newCar);
    toast.success("Car Added Successfully 🚗");
    navigate("/cars");
  };

  return (
    <section className="bg-teal-50 min-h-screen py-16">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white shadow-lg border border-teal-200 rounded-xl p-8">

          <h2 className="text-4xl font-bold text-center text-teal-900 mb-10">
            Add a New Car
          </h2>

          <form onSubmit={submitForm} className="space-y-8">

            {/* Car Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-teal-900 border-b pb-3">
                Car Details
              </h3>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Car Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full border-teal-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  required
                >
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Electric">Electric</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Car Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tesla Model 3"
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Transmission</label>
                <select
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  className="w-full border-teal-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  required
                >
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Fuel Type</label>
                <select
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  className="w-full border-teal-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  required
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Seats</label>
                <input
                  type="number"
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                  min="1"
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Mileage</label>
                <input
                  type="text"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  placeholder="e.g. 120 MPGe"
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Year</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  min="1900"
                  max={new Date().getFullYear()}
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Description</label>
                <textarea
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Car features, condition, mileage, etc..."
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Price Per Day ($)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Pickup Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Portland, OR"
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-teal-900 border-b pb-3">
                Car Company Information
              </h3>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Port Rentals"
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Company Description</label>
                <textarea
                  rows="4"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                  placeholder="Short description about the company"
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Contact Email</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="company@example.com"
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">Contact Phone</label>
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="Company phone number"
                  className="w-full border-teal-300 rounded-lg shadow-sm py-2 px-3 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-full transition shadow-md"
            >
              Add Car
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCarPage;
