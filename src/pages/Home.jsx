import React from "react";
import {
  AboutUs,
  Benefits,
  Customers,
  Feedback,
  FiltersControl,
  MainSlider,
  Products,
  Reservation,
  Sidebar,
} from "../components/Home";

const Home = () => {
  //!!! EXTRA RERENDR if we remove selectedFields and pizzas length equality check in products

  return (
    <>
      <MainSlider />
      <FiltersControl />
      <Products />
      <AboutUs />
      <Benefits />
      <Reservation />
      <Customers />
      <Feedback />
      <Sidebar />
    </>
  );
};

export default Home;
