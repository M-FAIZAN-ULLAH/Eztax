import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Form from "../components/Sections/Form";
import Footer from "../components/Sections/Footer";

export default function QuotationPage() {
  return (
    <>
      <TopNavbar inFormPage={true} />
      <Form quotation={true} heading={"Get Quotation"} />
      <Footer />
    </>
  );
}
