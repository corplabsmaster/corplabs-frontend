import React from "react";
import styled from "styled-components";
import SEO from "@components/common/seo";
import Layout from "@components/layout";
import withLocation from "@helpers/hoc/withLocation";
import bannerRight from "@components/images/about-right.png";
import aboutBottomIllu from "@components/images/about-bottom-illu.png";
import leadingBrandIllu from "@components/images/leading-brand-Illu.png";
import leadingIcon1 from "@components/images/leading-icon-1.png";
import leadingIcon2 from "@components/images/leading-icon-2.png";
import leadingIcon3 from "@components/images/leading-icon-3.png";
import leadingIcon4 from "@components/images/leading-icon-4.png";
import twitter from "@images/twitter.png";
import facebook from "@images/facebook.png";
import linkedin from "@images/linkedin.png";
import google from "@images/google.png";
import member1 from "@images/member-1.png";
import member2 from "@images/member-2.png";
import member3 from "@images/member-3.png";
import member4 from "@images/member-4.png";
const About = ({ location }: any) => {
  return (
    <Layout location={location.pathname}>
      <AboutWrapper>
        <SEO
          title="About"
          description="Jwin7 is an established international cricket betting platform that also provides online casino games. It offers a wide range of services from its own Jwin7 casino to the latest 2022 Fifa world cup news."
        />
        <section className="bg-[#181818] pt-[80px] pb-[0px] md:pt-[150px] md:pb-[0px] relative">
          <div className="banner-content">
            <div className="max-w-[1140px] m-auto">
              <img
                className="mb-0 absolute bottom-[6%] right-[2%] w-[50%] md:bottom-0 md:right-[0%] md:w-[auto]"
                src={bannerRight}
                alt="games banner right"
              />
              <div className="flex justify-start row">
                <div className="col-lg-12">
                  <div className="top-area px-[12px] md:px-[0px]">
                    <h1 className="uppercase text-white font-chakra text-[40px] md:text-[76px]">
                      ABOUT US
                    </h1>
                    <div className="breadcrumb-area">
                      <nav aria-label="breadcrumb">
                        <ol className="flex py-3 breadcrumb mb-11">
                          <li className="text-base font-normal leading-6 text-white md:text-2xl">
                            <a href="index-2.html">Home</a>
                          </li>
                          <span className="mx-2 text-base font-normal leading-6 text-white md:text-2xl">
                            &#x3e;
                          </span>
                          <li
                            className="text-base font-normal leading-6 text-white md:text-2xl active"
                            aria-current="page"
                          >
                            About Us
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="banner-bottom abou z-[1] -mt-[450px]">
                  <div className="overlay">
                    <div className="container wow fadeInUp">
                      <div className="main-content flex flex-col items-center text-center translate-y-[420px] before:bg-[#2a2a2a] before:absolute before:z-[1] before:rounded-[20px] before:w-[100%] before:h-[70%] before:left-[0%] md:before:w-[90%] md:before:h-[80%] md:before:left-[5%] before:content-['']">
                        <img
                          className="w-[80%] z-10"
                          src={aboutBottomIllu}
                          alt="image"
                        />
                        <div className="item-area translate-x-[0px] translate-y-[-80px] z-10 w-[100%] md:w-auto">
                          <div className="flex justify-center row">
                            <div className="col-lg-12 content-item grid md:flex bg-[#31148B] p-[30px] rounded-[20px]">
                              <div className="col">
                                <div className="text-center single-item">
                                  <h2 className="text-[#ff8a14] font-bold font-chakra uppercase text-[30px] md:text-[57px]">
                                    200*
                                  </h2>
                                  <p className="text-white font-normal font-chakra text-[14px] md:text-[18px]">
                                    We&apos;re proud of our partners
                                  </p>
                                </div>
                              </div>
                              <div className="col">
                                <div className="text-center single-item">
                                  <h2 className="text-[#ff8a14] font-bold font-chakra uppercase text-[30px] md:text-[57px]">
                                    20 mil.
                                  </h2>
                                  <p className="text-white font-normal font-chakra text-[14px] md:text-[18px]">
                                    A happy is a loyal customer
                                  </p>
                                </div>
                              </div>
                              <div className="col">
                                <div className="text-center single-item mb-cus">
                                  <h2 className="text-[#ff8a14] font-bold font-chakra uppercase text-[30px] md:text-[57px]">
                                    2010—
                                  </h2>
                                  <p className="text-white font-normal font-chakra text-[14px] md:text-[18px]">
                                    We&apos;ve been Gaming company since
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="story-behind-gainio"
          className="about bg-[#181818] py-[50px] md:py-[120px] mt-[280px] md:mt-[387px]"
        >
          <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
              <div className="row justify-content-center">
                <div className="text-center col-lg-6">
                  <h2 className="uppercase text-white font-chakra text-[30px] md:text-[57px] font-bold">
                    THE STORY BEHIND Gainio TEAM
                  </h2>
                  <p className="uppercase text-white font-chakra text-[14px] md:text-[18px] my-7 font-normal">
                    Welcome to Gainio — a perfect place to chill and enjoy some
                    high-level entertainment. The best part? Everything is
                    available for you right here! Enjoy our rich array of
                    charming slots, card games, lotteries, and VIP level
                    treatment!
                  </p>
                  <div className="btn-area d-flex justify-content-center">
                    <a className="jb-btn-green rounded-[10px] !font-[13px] mx-[15px] px-[18px]">
                      Join our team
                    </a>
                    <a className="jb-btn-green shadow-none bg-[transparent] !border-[#BE97FF] border-[1px] rounded-[10px] font-[13px] text-white mx-[15px] px-[18px] hover:bg-[#7400D3] hover:border-[#7400D3]">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="leading-brand" className="about jb-black-400">
          <div className="overlay py-[50px] md:py-[120px]">
            <img
              className="mb-0 absolute right-[2%] w-[50%] md:-right-[20%] hidden md:block"
              src={leadingBrandIllu}
              alt="image"
            />
            <div className="max-w-[1140px] m-auto wow fadeInUp">
              <div className="row">
                <div className="col-lg-8">
                  <div className="px-3 section-header mb-7 md:mb-14 md:px-0">
                    <h2 className="uppercase text-white font-chakra text-[30px] md:text-[57px] font-bold">
                      The Leading Brand of Online Gaming
                    </h2>
                    <p className="uppercase text-white font-chakra text-[14px] md:text-[18px] !my-5 md:my-7 font-normal">
                      Gainio has created tremendous performance in the
                      industry.While dedicating to build a playground on your
                      finger tip, Gainio gaming attracts great amounts of
                      wagers, has now become the first-tier gaming product.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="flex items-center border-[1px] border-[#31148B] !mx-3 p-[20px] md:!mx-0 rounded-[10px] mb-[30px]">
                        <div className="left-side">
                          <div className="bg-[#3B13B6] w-20 h-20 rounded-full flex justify-center items-center mr-5">
                            <img
                              className="mb-0"
                              src={leadingIcon1}
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="text-area">
                          <h5 className="uppercase text-white font-chakra md:text-[24px] font-semibold">
                            Multi- Account
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="flex items-center border-[1px] border-[#31148B] !mx-3 p-[20px] md:!mx-0 rounded-[10px] mb-[30px]">
                        <div className="left-side">
                          <div className="bg-[#3B13B6] w-20 h-20 rounded-full flex justify-center items-center mr-5">
                            <img
                              className="mb-0"
                              src={leadingIcon2}
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="text-area">
                          <h5 className="uppercase text-white font-chakra md:text-[24px] font-semibold">
                            Transparent
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="flex items-center border-[1px] border-[#31148B] !mx-3 p-[20px] md:!mx-0 rounded-[10px] mb-[30px]">
                        <div className="left-side">
                          <div className="bg-[#3B13B6] w-20 h-20 rounded-full flex justify-center items-center mr-5">
                            <img
                              className="mb-0"
                              src={leadingIcon3}
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="text-area">
                          <h5 className="uppercase text-white font-chakra md:text-[24px] font-semibold">
                            Security
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="flex items-center border-[1px] border-[#31148B] !mx-3 p-[20px] md:!mx-0 rounded-[10px] mb-[30px]">
                        <div className="left-side">
                          <div className="bg-[#3B13B6] w-20 h-20 rounded-full flex justify-center items-center mr-5">
                            <img
                              className="mb-0"
                              src={leadingIcon4}
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="text-area">
                          <h5 className="uppercase text-white font-chakra md:text-[24px] font-semibold">
                            Fast withdraw
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team-member" className="about bg-[#4e4e4e]">
          <div className="overlay pt-[50px] pb-16 md:py-[120px]">
            <div className="container wow fadeInUp">
              <div className="row">
                <div className="col-lg-12 justify-content-center d-flex">
                  <div className="text-center section-header">
                    <h2 className="uppercase text-white font-chakra text-[30px] md:text-[57px] font-bold">
                      Our amazing team
                    </h2>
                    <p className="uppercase text-white font-chakra text-[14px] md:text-[18px] my-7 font-normal">
                      Our small team is an incredible group of people
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-cus">
                <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
                  <div className="single-item mb-14 md:mb-0">
                    <div className="rounded-full flex justify-center items-end bg-[#ff9900] w-36 h-36 mx-auto overflow-hidden">
                      <img className="mb-0" src={member1} alt="image" />
                    </div>
                    <div className="bottom-area">
                      <h5 className="uppercase text-white font-chakra text-[14px] md:text-[24px] my-6 text-center font-semibild">
                        Jane Wilson
                      </h5>
                      <div className="inline-flex items-center m-auto md:!ml-auto md:!mr-0">
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img src={twitter} className="relative m-[8px]" />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img
                            src={facebook}
                            className="relative my-[7px] mx-[11px]"
                          />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img src={linkedin} className="relative m-[8px]" />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img
                            src={google}
                            className="relative my-[7px] mx-[8px]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
                  <div className="single-item mb-14 md:mb-0">
                    <div className="rounded-full flex justify-center items-end bg-[#ff9900] w-36 h-36 mx-auto overflow-hidden">
                      <img className="mb-0" src={member2} alt="image" />
                    </div>
                    <div className="bottom-area">
                      <h5 className="uppercase text-white font-chakra text-[14px] md:text-[24px] my-6 text-center font-semibild">
                        Jane Cooper
                      </h5>
                      <div className="inline-flex items-center m-auto md:!ml-auto md:!mr-0">
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img src={twitter} className="relative m-[8px]" />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img
                            src={facebook}
                            className="relative my-[7px] mx-[11px]"
                          />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img src={linkedin} className="relative m-[8px]" />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img
                            src={google}
                            className="relative my-[7px] mx-[8px]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
                  <div className="single-item mb-14 md:mb-0">
                    <div className="rounded-full flex justify-center items-end bg-[#ff9900] w-36 h-36 mx-auto overflow-hidden">
                      <img className="mb-0" src={member3} alt="image" />
                    </div>
                    <div className="bottom-area">
                      <h5 className="uppercase text-white font-chakra text-[14px] md:text-[24px] my-6 text-center font-semibild">
                        Jim Moody
                      </h5>
                      <div className="inline-flex items-center m-auto md:!ml-auto md:!mr-0">
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img src={twitter} className="relative m-[8px]" />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img
                            src={facebook}
                            className="relative my-[7px] mx-[11px]"
                          />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img src={linkedin} className="relative m-[8px]" />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img
                            src={google}
                            className="relative my-[7px] mx-[8px]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
                  <div className="single-item mb-14 md:mb-0">
                    <div className="rounded-full flex justify-center items-end bg-[#ff9900] w-36 h-36 mx-auto overflow-hidden">
                      <img className="mb-0" src={member4} alt="image" />
                    </div>
                    <div className="bottom-area">
                      <h5 className="uppercase text-white font-chakra text-[14px] md:text-[24px] my-6 text-center font-semibild">
                        Jenny Wilson
                      </h5>
                      <div className="inline-flex items-center m-auto md:!ml-auto md:!mr-0">
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img src={twitter} className="relative m-[8px]" />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img
                            src={facebook}
                            className="relative my-[7px] mx-[11px]"
                          />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img src={linkedin} className="relative m-[8px]" />
                        </a>
                        <a className="before:absolute before:content-[''] before:bg-[url('../images/social-bg.png')] before:w-[30px] before:h-[30px] ml-2">
                          <img
                            src={google}
                            className="relative my-[7px] mx-[8px]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AboutWrapper>
    </Layout>
  );
};

export default withLocation(About);

const AboutWrapper = styled.div`
  && {
    margin: 0 auto;
  }
`;
