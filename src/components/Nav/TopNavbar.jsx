import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets

import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar({ inFormPage }) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      {!inFormPage && (
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      )}

      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link to="/">
            <h1
              style={{
                marginLeft: "10px",
                color: "yellow",
                fontFamily: "monospace",
              }}
              className="font20 extraBold"
            >
              A1 24 HOUR
            </h1>
          </Link>
          {!inFormPage && (
            <>
              <BurderWrapper
                className="pointer"
                style={{ color: "yellow", stroke: "yellow" }}
                onClick={() => toggleSidebar(!sidebarOpen)}
              >
                <BurgerIcon style={{ color: "yellow", stroke: "yellow" }} />
              </BurderWrapper>
              <UlWrapper className="flexNullCenter">
                <li className="semiBold font15 pointer">
                  <ScrollLink
                    activeClass="active"
                    style={{
                      padding: "10px 15px",
                      color: "yellow",
                      fontFamily: "inherit",
                    }}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="semiBold font15 pointer">
                  <ScrollLink
                    activeClass="active"
                    style={{
                      padding: "10px 15px",
                      color: "yellow",
                      fontFamily: "inherit",
                    }}
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    About Us
                  </ScrollLink>
                </li>
                <li className="semiBold font15 pointer">
                  <ScrollLink
                    activeClass="active"
                    style={{
                      padding: "10px 15px",
                      color: "yellow",
                      fontFamily: "inherit",
                    }}
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Services
                  </ScrollLink>
                </li>
                <li className="semiBold font15 pointer">
                  <ScrollLink
                    activeClass="active"
                    style={{
                      padding: "10px 15px",
                      color: "yellow",
                      fontFamily: "inherit",
                    }}
                    to="fleets"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Fleets
                  </ScrollLink>
                </li>
                <li className="semiBold font15 pointer">
                  <ScrollLink
                    activeClass="active"
                    style={{
                      padding: "10px 15px",
                      color: "yellow",
                      fontFamily: "inherit",
                    }}
                    to="airport-directory"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Airport Directory
                  </ScrollLink>
                </li>
                <li className="semiBold font15 pointer">
                  <ScrollLink
                    activeClass="active"
                    style={{
                      padding: "10px 15px",
                      color: "yellow",
                      fontFamily: "inherit",
                    }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    More Info
                  </ScrollLink>
                </li>
              </UlWrapper>
              <UlWrapperRight className="flexNullCenter">
                <li className="semiBold font15 pointer">
                  <a
                    href="/"
                    style={{
                      padding: "10px 30px 10px 0",
                      color: "yellow",
                      fontFamily: "inherit",
                    }}
                  >
                    Log in
                  </a>
                </li>
                <li className="semiBold font15 pointer flexCenter">
                  <a
                    href="/"
                    className="radius8 lightBg"
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "yellow",
                      color: "black",
                    }}
                  >
                    Get Started
                  </a>
                </li>
              </UlWrapperRight>
            </>
          )}
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #000000;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  // background-color: #FFFF00;
  // color: #FFF00;
  height: 100%;
  padding: 0 15px;
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;

  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
