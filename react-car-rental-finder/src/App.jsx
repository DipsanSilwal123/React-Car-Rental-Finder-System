import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import CarsPage from "./pages/CarsPage";
import NotFoundPage from "./pages/NotFoundPage";
import CarPage, { carLoader } from "./pages/CarPage";
import AddCarPage from "./pages/AddCarPage";
import EditCarPage from "./pages/EditCarPage";

const App = () => {
  // Add New Car
  const addCar = async (newCar) => {
    await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    });
  };

  // Delete Car
  const deleteCar = async (id) => {
    await fetch(`/api/cars/${id}`, {
      method: "DELETE",
    });
  };

  // Update Car
  const updateCar = async (car) => {
    await fetch(`/api/cars/${car.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/add-car" element={<AddCarPage addCarSubmit={addCar} />} />
        <Route
          path="/edit-car/:id"
          element={<EditCarPage updateCarSubmit={updateCar} />}
          loader={carLoader}
        />
        <Route path="/cars/:id" element={<CarPage deleteCar={deleteCar} />} loader={carLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
