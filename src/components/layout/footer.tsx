import React from "react";
import { Link } from "gatsby";
import { Row, Layout } from "antd";
import suppicon from "../images/footer/icon-24hr.png";

import safe1 from "../images/footer/safe1.png";
import safe2 from "../images/footer/safe2.png";
import safe3 from "../images/footer/safe3.png";
import pay16 from "../images/footer/pay16.png";
import pay22 from "../images/footer/pay22.png";
import pay33 from "../images/footer/pay33.png";
import pay34 from "../images/footer/pay34.png";
import guideicon from "../images/footer/icon-book.png";
import programicon from "../images/footer/icon-program.png";
import androidicon from "../images/footer/android-en.png";
import license from "../images/footer/gaming_license.png";

// import facebook from "../images/footer/facebook.png";
// import instagram from "../images/footer/instagram.png";
// import twitter from "../images/footer/twitter.png";
// import pinterest from "../images/footer/pinterest.png";
import logo2 from "@images/logos/jetbuzzLogo.png";

import styled from "styled-components";

import "../styles/footer.css";
// import { URLS } from "@helpers/const";
import { color, URLS } from "@helpers/const";
// import { isLoggedIn } from "@services/auth";

const AntFooter = Layout.Footer;

type WithThisUser<T = {}> = T & { children?: React.ReactNode };

type FooterProps = WithThisUser<{}>;

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      <>
        <AntFooter className="bg-jb-black-200">
          <div>
            <div className="footer">
              <div className="grid grid-cols-1 gap-4 supp-guide sm:grid-cols-2 md:grid-cols-4">
                <div className="supp w-[270px]">
                  <span className="icon-supp icon-wrap">
                    <img src={suppicon} />
                  </span>
                  <span className="content">
                    <h3 className="text-white title">Customer Support 24/7</h3>
                    <h5 className="desc jb-grey-1000">
                      Have a question? Speak to our agent online.
                    </h5>
                    <a className="text-jb-brown-200" href="#!">
                      Contact CS
                    </a>
                  </span>
                </div>
                <div className="guide w-[270px]">
                  <span className="icon-guide icon-wrap">
                    <img src={guideicon} />
                  </span>
                  <span className="content">
                    <h3 className="text-white title">New Member Guide</h3>
                    <h5 className="desc jb-grey-1000">
                      Check out FAQ and guides
                    </h5>
                    <a className="text-jb-brown-200" href="#!">
                      Explore Now
                    </a>
                  </span>
                </div>
                <div className="guide w-[270px]">
                  <span className="icon-guide icon-wrap">
                    <img src={programicon} />
                  </span>
                  <span className="content">
                    <h3 className="text-white title">Affiliates Program</h3>
                    <h5 className="desc jb-grey-1000">
                      You send us Business, we send you Money
                    </h5>
                    <a className="text-jb-brown-200" href="#!">
                      Find Out more
                    </a>
                  </span>
                </div>
                <div className="android-icon">
                  <img src={androidicon} />
                </div>
              </div>
              <div className="footer-partner-wrap">
                <div className="duty">
                  <h5 className="text-white title">Info</h5>
                  <div className="safe-icons">
                    <img src={safe1} />
                    <img src={safe2} />
                    <img src={safe3} />
                  </div>
                </div>
                <div className="payment">
                  <h5 className="text-white title">Payment Methods</h5>
                  <div className="safe-icons">
                    <img src={pay16} />
                    <img src={pay22} />
                    <img src={pay33} />
                    <img src={pay34} />
                  </div>
                </div>
                {/* <div className="community-links">
                  <h5 className="title">Community Websites</h5>
                  <div className="safe-icons">
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={twitter} />
                    <img src={pinterest} />
                  </div>
                </div> */}
              </div>
              <div className="mt-3 license-wrapper">
                <div className="license">
                  <h5 className="title text-jb-grey-1000">Gaming License</h5>
                  <img src={license} className="w-auto h-[50px]" />
                </div>
              </div>

              <div className="footer-logo-wrap">
                <div className="footer-logo">
                  <img className="logo" src={logo2} />
                </div>
                <div className="link-wrap">
                  {/* <ul className="justify-end">
                    <li>
                      <Link
                        to={URLS.responsible}
                        target="_blank"
                        rel="noreferrer"
                        className="text-jb-brown-200"
                      >
                        Responsible Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={URLS.about}
                        target="_blank"
                        rel="noreferrer"
                        className="text-jb-brown-200"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul> */}
                  <p className="text-jb-grey-1000">
                    © 2022 <Link to="https://jeetbuzz168.com">MCW</Link>{" "}
                    Copyrights. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AntFooter>
        <Row
          style={{
            background: color.primary,
            color: color.whiteColor,
            paddingLeft: "50px",
          }}
        ></Row>
      </>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  /* && {
    margin: 0 auto;
    padding-left: 10%;
    padding-right: 10%;
    height: 100%;
  }

  .welcomeRow {
    padding: 10px;
  } */
`;
