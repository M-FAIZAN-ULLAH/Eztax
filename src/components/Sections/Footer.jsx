import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoIcon from "../../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <footer class="footer_area section_padding_130_0">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-footer-widget section_padding_0_130 flex flex-col gap-3">
                <Link
                  className="pointer flexNullCenter"
                  to="home"
                  smooth={true}
                >
                  <LogoIcon />
                  <h1
                    style={{
                      marginLeft: "10px",
                      color: "yellow",
                      fontFamily: "monospace",
                    }}
                    className="font20 extraBold"
                  >
                    Taxi For You
                  </h1>
                </Link>

                <StyleP className="font13">
                  © {getCurrentYear()} -{" "}
                  <span className="purpleColor font13">Fanatic</span> All Right
                  Reserved
                </StyleP>

                <div class="footer_social_area">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Pinterest"
                  >
                    <i class="fa fa-pinterest"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Skype"
                  >
                    <i class="fa fa-skype"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Twitter"
                  >
                    <i class="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h5 class="widget-title">Areas We Cover</h5>

                <div class="footer_menu">
                  <ul>
                    <li>
                      <a href="#/">Bedfordshire</a>
                    </li>
                    <li>
                      <a href="#/">Biggleswade</a>
                    </li>
                    <li>
                      <a href="#/">Dunstable</a>
                    </li>
                    <li>
                      <a href="#/">Flitwick</a>
                    </li>
                    <li>
                      <a href="#/">Houghton Regis</a>
                    </li>
                    <li>
                      <a href="#/">Leighton buzzard</a>
                    </li>
                    <li>
                      <a href="#/">Luton</a>
                    </li>
                    <li>
                      <a href="#/">Hertfordshire</a>
                    </li>
                    <li>
                      <a href="#/">Houghton Regis</a>
                    </li>
                    <li>
                      <a href="#/">Buckinghamshire</a>
                    </li>
                    <li>
                      <a href="#/">Central London</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h5 class="widget-title">Quick Links</h5>

                <div class="footer_menu">
                  <ul>
                    <li>
                      <a href="#/">HOME</a>
                    </li>
                    <li>
                      <a href="#/">About US</a>
                    </li>
                    <li>
                      <a href="#/">SERVICES</a>
                    </li>
                    <li>
                      <a href="#/">FLEETS</a>
                    </li>
                    <li>
                      <a href="#/">AIRPORT DIRECTORY</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h5 class="widget-title">Contact Information</h5>

                <div class="footer_menu">
                  <ul>
                    <li>enquiries@taxiforyou.org.uk</li>
                    <li>07838-479-992</li>
                    <li>72 Romen Rd, Luton LU4 9DN, UK</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    // <Wrapper>
    //   <div className="darkBg">
    //     <div className="container">
    //       <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
    //         <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
    //           <LogoImg />
    //           <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
    //             Fanatic
    //           </h1>
    //         </Link>
    //         <StyleP className="whiteColor font13">
    //           © {getCurrentYear()} - <span className="purpleColor font13">Fanatic</span> All Right Reserved
    //         </StyleP>

    //         <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
    //           Back to top
    //         </Link>
    //       </InnerWrapper>
    //     </div>
    //   </div>
    // </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
