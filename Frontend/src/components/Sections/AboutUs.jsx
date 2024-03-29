import React from "react";

// This is the about us section. Most if not all styling will be done using tailwind css

export default function AboutUs() {
  return (
    <section id="about-us" style={{ width: "100%", padding: "60px 0" }}>
      <div className="container">
        <div
          className="flex flex-col gap-2 justify-center p-12 rounded-xl "
          style={{
            backgroundColor: "#cfcfcf",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h1 className="font-bold text-4xl">About Us</h1>
          <p className=" text-lg">
            Taxi For You is a London-based taxi company that offers a range of
            services to cater to all your transportation needs. Whether you need
            a ride to the airport, a trip to the city, or a ride to a festival,
            we've got you covered. Our drivers are professional and reliable,
            and our fleet of vehicles is well-maintained and comfortable. We
            pride ourselves on providing excellent customer service and making
            sure you get to your destination safely and on time. Book your cab
            with Taxi For You today and experience the difference!
          </p>
        </div>
      </div>
    </section>
  );
}
