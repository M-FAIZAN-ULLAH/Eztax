import React from "react";

import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import MercedesEClass from "../../assets/img/Carousel/MercedesEClass.png";

// This is the fleets section. Most if not all styling will be done using tailwind css

export default function Fleets() {
  return (
    <section id="fleets" style={{ width: "100%", padding: "60px 0" }}>
      <div className="container">
        <div className=" text-center mb-4">
          <h2 className="font40 extraBold">FLEETS</h2>
          <h4 className="font20">
            Explore our diverse fleet of vehicles tailored to meet all your
            transportation needs.
          </h4>
        </div>
        <Carousel
          className="rounded-xl h-3/6 md:h-1/6"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="yellow"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="yellow"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 yellowBg" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="h-full w-full">
            <img
              src={MercedesEClass}
              className=" mx-auto"
              alt="Mercedes"
              width={600}
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  className="mb-2 text-3xl md:text-4xl lg:text-5xl"
                  style={{ color: "#FF0" }}
                >
                  Mercedes E-Class
                </Typography>
                <Typography variant="lead" color="white">
                  Arrive in style with our Mercedes E-Class luxury sedan
                  service.
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
