import React from "react";

import { Carousel, Typography, Button } from "@material-tailwind/react";

// This is the fleets section. Most if not all styling will be done using tailwind css

export default function Fleets() {
  return (
    <section style={{ width: "100%", padding: "60px 0" }}>
      <div className="container">
        <div className=" text-center">
          <h2 className="font40 extraBold">FLEETS</h2>
          <h4 className="font20">
            Explore our diverse fleet of vehicles tailored to meet all your
            transportation needs.
          </h4>
        </div>
      </div>
    </section>
  );
}
