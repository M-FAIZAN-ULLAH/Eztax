import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Form from "../components/Sections/Form";
import Footer from "../components/Sections/Footer";

export default function FormPage() {
  return (
    <>
      <TopNavbar />
      <Form quotation={false} heading={"Book Your Ride"} />
      <Footer />
    </>
  );
}
