import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import AboutUs from "../components/Sections/AboutUs";

import Services from "../components/Sections/Services";
import Fleets from "../components/Sections/Fleets";
import Projects from "../components/Sections/Projects";
import AirportDirectory from "../components/Sections/AirportDirectory";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <AboutUs />
      <Services />
      <Fleets />
      <AirportDirectory />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
