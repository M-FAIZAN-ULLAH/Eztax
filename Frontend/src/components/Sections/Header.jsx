import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import FullButton from "../Buttons/FullButton";

// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import carImage from "../../assets/newimg/car.png";
import BackgroundImg from "../../assets/newimg/ptwo.jpg";

import Typewriter from "../Effects/TypeWriter";

export default function Header() {
  const typeWriter = [
    "your reliable choice for seamless transportation in London! From airports to festivals",
    "weve got you covered. Book your cab today!",
  ];

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60" style={{ fontFamily: "sans-serif" }}>
            A1 24 HOUR
          </h1>
          <HeaderP
            className="font20 semiBold"
            style={{ height: 130, width: 500 }}
          >
            Welcome to A1 24 HOUR - <Typewriter data={typeWriter} />
          </HeaderP>
          <BtnWrapper>
            <Link to="/form" style={{ width: "300px" }}>
              <FullButton title="Book Now" />
            </Link>

            <Link to="/quote" style={{ width: "300px" }}>
              <FullButton title="Quotation" />
            </Link>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            src={carImage}
            className=""
            alt="Image of a taxi car"
            style={{ zIndex: 1, height: 400, width: 800 }}
          />
          <QuoteWrapper
            className="flexCenter darkBg radius8"
            style={{ backgroundColor: "yellow" }}
          >
            <QuotesWrapper>
              <QuotesIcon style={{ backgroundColor: "yellow" }} />
            </QuotesWrapper>
            <div>
              <p className="font20 whiteColor" style={{ color: "black" }}>
                <em>
                  Life is like riding in a taxi. Whether you are going anywhere
                  or not, the meter keeps ticking.
                </em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ color: "black" }}
              >
                John C. Maxwell
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  // min-height: 740px;
  //padding-top: 10.5rem;
  // background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  position: relative;
  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (min-width: 560px) {
    padding-top: 10.5rem;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  max-width: 250px;
  display: flex; /* Add this line */
  justify-content: space-between; /* Add this line */
  gap: 10px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

// const GreyDiv = styled.div`
//   width: 30%;
//   height: 700px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  // z-index: 0;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 70;
  bottom: 300px;
  max-width: 280px;
  right: 299;
  padding: 20px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
