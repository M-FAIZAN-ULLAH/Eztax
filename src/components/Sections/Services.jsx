import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import backgroundImg from "../../assets/img/Bg-img-taxi.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  return (
    <Wrapper class="section services-section" id="services">
      <div className="container whiteColor">
        <div className="textCenter heading-service">
          <h2 className="font40 extraBold ">Services</h2>
          <h4 className="font20 semiBold">
            Experience a diverse range of cab services designed to meet your
            every travel requirement.
          </h4>
        </div>
        <div className="service-list grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center">
          {/* Feature 1 */}
          <div class="feature-box-1 bg-black opacity-80">
            <div class="icon">
              <i class="fa fa-desktop"></i>
            </div>
            <div class="feature-content">
              <h5 className="font25 extraBold" style={{ color: "white" }}>
                Mini Bus
              </h5>
              <p className="font18 semiBold">
                Spacious transportation for group travels.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div class="feature-box-1 bg-black opacity-80">
            <div class="icon"></div>
            <div class="feature-content">
              <h5 className="font25 extraBold" style={{ color: "white" }}>
                24/7
              </h5>
              <p className="font18 semiBold">
                Around-the-clock service for your convenience.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div class="feature-box-1 bg-black opacity-80">
            <div class="icon">
              <i class="fa fa-desktop"></i>
            </div>
            <div class="feature-content">
              <h5 className="font25 extraBold" style={{ color: "white" }}>
                Pets services
              </h5>
              <p className="font18 semiBold">
                Ensuring your pet's tranquility throughout the journey.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div class="feature-box-1 bg-black opacity-80">
            <div class="icon">
              <i class="fa fa-desktop"></i>
            </div>
            <div class="feature-content">
              <h5 className="font25 extraBold" style={{ color: "white" }}>
                Airport Transfer
              </h5>
              <p className="font18 semiBold">
                Seamless transfers to and from major airports.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div class="feature-box-1 bg-black opacity-80">
            <div class="icon">
              <i class="fa fa-desktop"></i>
            </div>
            <div class="feature-content">
              <h5 className="font25 extraBold" style={{ color: "white" }}>
                Baby Seat
              </h5>
              <p className="font18 semiBold">
                Safe and comfortable rides for your little ones.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div class="feature-box-1 bg-black opacity-80">
            <div class="icon">
              <i class="fa fa-desktop"></i>
            </div>
            <div class="feature-content">
              <h5 className="font25 extraBold" style={{ color: "white" }}>
                Wheelchair
              </h5>
              <p className="font18 semiBold">
                Accessibility for all passengers.
              </p>
            </div>
          </div>

          {/* Feature 7 */}
          <div class="feature-box-1 bg-black opacity-80">
            <div class="icon">
              <i class="fa fa-desktop"></i>
            </div>
            <div class="feature-content">
              <h5 className="font25 extraBold" style={{ color: "white" }}>
                Night Out
              </h5>
              <p className="font18 semiBold">
                Reliable transportation for your evening adventures
              </p>
            </div>
          </div>

          {/* Feature 8 */}
          <div class="feature-box-1 bg-black opacity-80">
            <div class="icon">
              <i class="fa fa-desktop"></i>
            </div>
            <div class="feature-content">
              <h5 className="font25 extraBold" style={{ color: "white" }}>
                Festivals
              </h5>
              <p className="font18 semiBold">
                Making your festival experiences hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 60px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("${backgroundImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

// import React from 'react';
// import styled from 'styled-components';

// import AddImage4 from "../../assets/newimg/ptwo.jpg";

// const ServicesContainer = styled.div`
//   background-color: #000; /* Black background */
//   padding: 50px; /* Padding for spacing */
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const ServiceCard = styled.div`
//   width: 200px;
//   height: 150px;
//   background-color: #ffcc00; /* Yellow background */
//   border-radius: 10px;
//   overflow: hidden;
//   margin: 15px;
//   position: relative;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.03);
//     box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
//   }

//   .service-image {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden; /* Prevent image flickering on hover */
//     transition: transform 0.3s ease-in-out;
//   }

//   .service-image:hover {
//     transform: scale(1.1); /* Zoom in on hover */
//   }

//   .service-details {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black */
//     opacity: 0;
//     color: #fff; /* White text */
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     transition: opacity 0.3s ease-in-out;

//     &:hover {
//       opacity: 1;
//     }

//     h3 {
//       font-size: 20px;
//       margin-bottom: 15px;
//     }

//     p {
//       font-size: 16px;
//       line-height: 1.5; /* Adjust line spacing for better readability */
//     }
//   }
// `;

// const servicesData = [
//   {
//     image: {AddImage4}, // Replace with your image URLs
//     title: 'Web Development',
//     description: 'Create stunning and functional websites that meet your needs.',
//   },
//   {
//     image: {AddImage4}, // Replace with your image URLs
//     title: 'Web Development',
//     description: 'Create stunning and functional websites that meet your needs.',
//   },
//   {
//     image: {AddImage4}, // Replace with your image URLs
//     title: 'Web Development',
//     description: 'Create stunning and functional websites that meet your needs.',
//   },
//   {
//     image: {AddImage4}, // Replace with your image URLs
//     title: 'Web Development',
//     description: 'Create stunning and functional websites that meet your needs.',
//   },
//   {
//     image: {AddImage4}, // Replace with your image URLs
//     title: 'Web Development',
//     description: 'Create stunning and functional websites that meet your needs.',
//   },
//   {
//     image: {AddImage4}, // Replace with your image URLs
//     title: 'Web Development',
//     description: 'Create stunning and functional websites that meet your needs.',
//   },
//   // Add data for 8 more services
// ];

// const Services = () => {
//   return (
//     <ServicesContainer>
//       {servicesData.map((service, index) => (
//         <ServiceCard key={index}>
//           <img className="service-image" src={service.image} alt={service.title} />
//           <div className="service-details">
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         </ServiceCard>
//       ))}
//     </ServicesContainer>
//   );
// };

// export default Services;
