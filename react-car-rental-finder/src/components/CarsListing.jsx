import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import Spinner from "./Spinner";

const CarsListing = ({ isHome = false }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      const apiUrl = isHome ? "/api/cars?_limit=3" : "/api/cars";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.log("Error fetching car data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [isHome]);

  return (
    <section className="bg-teal-50 px-4 py-10">
      <div className="container-xl lg:container mx-auto">
        <h2 className="text-3xl font-bold text-teal-600 mb-8 text-center">
          {isHome ? "Recent Cars" : "Browse Cars"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : cars.length === 0 ? (
          <p className="text-center text-teal-500">No cars available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CarsListing;
