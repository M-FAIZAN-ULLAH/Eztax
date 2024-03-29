import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Screens
import Landing from "./screens/Landing.jsx";
import FormPage from "./screens/FormPage.jsx";
import QuotationPage from "./screens/QuotationPage.jsx";

// Import WhatsAppButton component
import WhatsAppButton from "./components/Buttons/whatsappButton.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/quote" element={<QuotationPage />} />
        </Routes>
      </Router>
      {/* WhatsApp button */}
      <WhatsAppButton />
    </>
  );
}
