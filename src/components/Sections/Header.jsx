// import React from "react";
// import styled from "styled-components";
// // Components
// import FullButton from "../Buttons/FullButton";
// // Assets
// import HeaderImage from "../../assets/img/header-img.png";
// import QuotesIcon from "../../assets/svg/Quotes";
// import Dots from "../../assets/svg/Dots";

// import BackgroundImg from "../../assets/newimg/ptwo.jpg"

// export default function Header() {
//   return (
//     <Wrapper id="home" className="container flexSpaceCenter">
//       <LeftSide className="flexCenter">
//         <div>
//           <h1 className="extraBold font60">TAXI FOR YOU LONDON</h1>
//           <HeaderP className="font20 semiBold">
//             Welcome to Taxi For You - your reliable choice for seamless transportation in London! From airports to festivals, we've got you covered. Book your cab today!
//           </HeaderP>
//           <BtnWrapper>
//             <FullButton title="Get Started" />
//             <FullButton title="Get Started" />
//           </BtnWrapper>
//         </div>
//       </LeftSide>
//       <RightSide>
//         <ImageWrapper>
//           <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
//           <QuoteWrapper className="flexCenter darkBg radius8">
//             <QuotesWrapper>
//               <QuotesIcon />
//             </QuotesWrapper>
//             <div>
//               <p className="font20 whiteColor">
//                 <em>Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</em>
//               </p>
//               <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Ralph Waldo Emerson</p>
//             </div>
//           </QuoteWrapper>
//           <DotsWrapper>
//             <Dots />
//           </DotsWrapper>
//         </ImageWrapper>
//         <GreyDiv className="lightBg"></GreyDiv>
//       </RightSide>
//     </Wrapper>
//   );
// }

// // const Wrapper = styled.section`
// //   padding-top: 80px;
// //   width: 100%;
// //   min-height: 840px;

// //   @media (max-width: 960px) {
// //     flex-direction: column;
// //   }
// // `;

// const Wrapper = styled.section`
//   // padding-top: 80px;

//   width: 100%;
//   min-height: 840px;
//   // background-image: url(${BackgroundImg}); /* Add your image path here */
//   background-size: cover; /* Adjust the background size to cover the entire section */
//   background-position: center; /* Center the background image */
//   position: relative; /* Ensure positioning context for children elements */
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const LeftSide = styled.div`
//   width: 50%;
//   height: 100%;
//   @media (max-width: 960px) {
//     width: 100%;
//     order: 2;
//     margin: 50px 0;
//     text-align: center;
//   }
//   @media (max-width: 560px) {
//     margin: 80px 0 50px 0;
//   }
// `;
// const RightSide = styled.div`
//   width: 50%;
//   height: 100%;
//   @media (max-width: 960px) {
//     width: 100%;
//     order: 1;
//     margin-top: 30px;
//   }
// `;
// const HeaderP = styled.div`
//   max-width: 470px;
//   padding: 15px 0 50px 0;
//   line-height: 1.5rem;
//   @media (max-width: 960px) {
//     padding: 15px 0 50px 0;
//     text-align: center;
//     max-width: 100%;
//   }
// `;
// const BtnWrapper = styled.div`
//   max-width: 190px;
//   @media (max-width: 960px) {
//     margin: 0 auto;
//   }
// `;
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
// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   position: relative;
//   z-index: 9;
//   @media (max-width: 960px) {
//     width: 100%;
//     justify-content: center;
//   }
// `;
// const Img = styled.img`
//   @media (max-width: 560px) {
//     width: 80%;
//     height: auto;
//   }
// `;
// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 50px;
//   max-width: 330px;
//   padding: 30px;
//   z-index: 99;
//   @media (max-width: 960px) {
//     left: 20px;
//   }
//   @media (max-width: 560px) {
//     bottom: -50px;
//   }
// `;
// const QuotesWrapper = styled.div`
//   position: absolute;
//   left: -20px;
//   top: -10px;
// `;
// const DotsWrapper = styled.div`
//   position: absolute;
//   right: -100px;
//   bottom: 100px;
//   z-index: 2;
//   @media (max-width: 960px) {
//     right: 100px;
//   }
//   @media (max-width: 560px) {
//     display: none;
//   }
// `;

import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
// import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

import carImage from "../../assets/newimg/car.jpg";

import BackgroundImg from "../../assets/newimg/ptwo.jpg";
import Typewriter from "../Effects/TypeWriter";

import { Typography } from "@material-tailwind/react";

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
            TAXI FOR YOU LONDON
          </h1>
          <HeaderP
            className="font20 semiBold"
            style={{ height: 130, width: 500 }}
          >
            Welcome to Taxi For You - <Typewriter data={typeWriter} />
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Book Now" />
            <FullButton title="Quotation" />
          </BtnWrapper>
        </div>
        <Typography>
          Material Tailwind is an easy to use components library for Tailwind
          CSS and Material Design. It provides a simple way to customize your
          components, you can change the colors, fonts, breakpoints and
          everything you need.
        </Typography>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius2"
            src={carImage}
            alt="office"
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
        {/* <GreyDiv className="lightBg"></GreyDiv> */}
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 840px;
  // background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  position: relative;
  @media (max-width: 960px) {
    flex-direction: column;
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
