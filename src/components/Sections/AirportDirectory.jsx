import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function AirportDirectory() {
  return (
    <Wrapper class="section services-section" id="airport-directory">
      <div className="container">
        <div className="textCenter heading-service">
          <h2 className="font40 extraBold ">AIRPORT DIRECTORY</h2>
          <h4 className="font20">
            Discover our comprehensive airport directory offering a wide array
            of travel services to accommodate your needs.
          </h4>
        </div>
        <div className="airport-list flex flex-col sm:flex-row justify-center ">
          {/* Airport 1 */}
          <div class="feature-box-1">
            <div class="feature-content">
              <h5 className="font25 extraBold">London Airports</h5>
              <ul>
                <li className="font18 semiBold">London City Airport</li>
                <li className="font18 semiBold">Gatwick Airport</li>
                <li className="font18 semiBold">
                  London Heathrow International Airport
                </li>
                <li className="font18 semiBold">London Luton Airport</li>
                <li className="font18 semiBold">Stansted Airport</li>
              </ul>
            </div>
          </div>

          {/* Airport 2 */}
          <div class="feature-box-1">
            <div class="feature-content">
              <h5 className="font25 extraBold">Other English Airports</h5>
              <ul>
                <li className="font18 semiBold">
                  Birmingham International Airport
                </li>
                <li className="font18 semiBold">
                  Nottingham - Leicester - Derby
                </li>
                <li className="font18 semiBold">
                  Exeter International Airport
                </li>
                <li className="font18 semiBold">Leeds Bradford Airport</li>
                <li className="font18 semiBold">Liverpool Airport</li>
                <li className="font18 semiBold">Manchester Airport</li>
                <li className="font18 semiBold">Newcastle Airport</li>
                <li className="font18 semiBold">Southampton Airport</li>
              </ul>
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
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
