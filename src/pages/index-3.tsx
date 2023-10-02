import React from "react";
import styled from "styled-components";
import SEO from "@components/common/seo";
// import "tw-elements";

import Layout from "@components/layout";

import withLocation from "@helpers/hoc/withLocation";
import bannerIllus from "@components/images/banner-illus.png";
import searchIcon from "@components/images/search-icon.png";
import featureIcon1 from "@components/images/features-icon-1.png";
import featureIcon2 from "@components/images/features-icon-2.png";
import featureIcon3 from "@components/images/features-icon-3.png";
import featureIcon4 from "@components/images/features-icon-4.png";
import featureIcon5 from "@components/images/features-icon-5.png";
import featureIcon6 from "@components/images/features-icon-6.png";
// import bannerBottom1 from "@components/images/features-icon-1.png";

// import jackpotImg3 from "@components/images/jackpot-img-3.png";
import topGame1 from "@components/images/top-game-1.png";
import topGame2 from "@components/images/top-game-2.png";
import topGame3 from "@components/images/top-game-3.png";
import topGame4 from "@components/images/top-game-4.png";
import topGame5 from "@components/images/top-game-5.png";
import topGame6 from "@components/images/top-game-6.png";
import topGame7 from "@components/images/top-game-7.png";
import topGame8 from "@components/images/top-game-8.png";
import levelUpLeft from "@components/images/level-up-left.png";
import freespinsIcon from "@components/images/freespins-icon.png";
import bonusesIcon from "@components/images/bonuses-icon.png";
import tournamentsIcon from "@components/images/tournaments-icon.png";
import counterIcon1 from "@components/images/counter-icon-1.png";
import counterIcon2 from "@components/images/counter-icon-2.png";
import counterIcon3 from "@components/images/counter-icon-3.png";
import counterIcon4 from "@components/images/counter-icon-4.png";
import star from "@components/images/star.png";
import star2 from "@components/images/star-2.png";
import { home3Carousels } from "@helpers/const";
import { Home3Carousel } from "@components/common/carousel";

import gameIcon1 from "@components/images/game-icon-1.png";
import tableIcon1 from "@components/images/table-icon-1.png";
import gameIcon2 from "@components/images/game-icon-2.png";
import tableIcon2 from "@components/images/table-icon-2.png";
import gameIcon3 from "@components/images/game-icon-3.png";
import tableIcon3 from "@components/images/table-icon-3.png";
import gameIcon4 from "@components/images/game-icon-4.png";
import tableIcon4 from "@components/images/table-icon-4.png";
import gameIcon5 from "@components/images/game-icon-5.png";
import tableIcon5 from "@components/images/table-icon-5.png";
import gameIcon6 from "@components/images/game-icon-6.png";
import tableIcon6 from "@components/images/table-icon-6.png";
import faqLeft from "@components/images/faq-left.png";
// import trophy from "@components/images/tropy.png";
// import ribbon from "@components/images/ribbon.png";

import winners1 from "@components/images/winners-1.png";
import winners2 from "@components/images/winners-2.png";
import winners3 from "@components/images/winners-3.png";
import winners4 from "@components/images/winners-4.png";
// import user2 from "@components/images/user-2.png";
// import win3 from "@components/images/win-3.png";
// import user3 from "@components/images/user-3.png";

type Props = {
  search?: {
    search: string;
  };
  location: object;
};

const Home3 = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: { search },
}: Props) => {
  return (
    <Layout location={"/index-3"} showSideMenu={false}>
      <HomeWrapper>
        <SEO
          title="Home"
          description="Jwin7 is an established international cricket betting platform that also provides online casino games. It offers a wide range of services from its own Jwin7 casino to the latest 2022 Fifa world cup news."
        />
        <section id="banner-section" className="index-2 home-2 mt-[10%]">
          <div className="relative banner-content pt-120 d-flex align-items-center">
            <div className="container">
              <img
                src={bannerIllus}
                className="banner-side absolute lg:right-[-15%] z-0"
                alt="image"
              />
              <div className="row">
                <div className="col-lg-6 col-md-9 pb-120">
                  <div className="main-content pb-120">
                    <div className="top-area">
                      <h1 className="uppercase text-white text-[76px] leading-[91.2px] font-chakra">
                        Battle, Win,Earn Live esports Contests
                      </h1>
                      <p className="text-lg font-normal leading-6 text-white">
                        Play your favorite game, use the coin of your choice
                        &amp; chat with your friends. Simple, social and most
                        importantly entertaining!
                      </p>
                      <button
                        type="button"
                        className="cmn-btn jb-btn-red mt-[20px]"
                        data-toggle="modal"
                        data-target="#signUpModalReg"
                      >
                        Start Playing!
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 mt-[15%] row justify-content-center z-10">
                  <div className="flex rounded-lg bottom-item bg-jb-orange-400 ">
                    <div className="container bg-jb-black ml-[12px] mr-[12px] rounded-lg py-[80px]">
                      <div className="bottom-content">
                        <div className="flex flex-wrap row justify-content-center">
                          <div className="col-lg-4 col-md-6 flex-[0_0_100%] max-w-[100%] md:flex-[0_0_50%] md:max-w-[50%] lg:flex-[0_0_33%] lg:max-w-[33.33%]">
                            <div className="grid items-center left-area align-items-center">
                              <h4 className="uppercase text-white text-[23px] top-[10px] font-chakra font-[600]">
                                WINNERS
                              </h4>
                              <div className="banner-carousel mb-[15px] d-flex flex mt-[24px]">
                                <a href="https://jeetbuzz777.com/af/zDY03gm1/jbcasino" className="single-item mr-[24px]">
                                  <img
                                    src={winners1}
                                    alt="image"
                                    className="rounded-[50%]"
                                  />
                                  <span className="box-border bg-jb-yellow text-white rounded-[14px] block leading-[20px] absolute px-[8px] py-[2px] mt-[-36px] ml-[6px]">
                                    $100
                                  </span>
                                </a>
                                <a href="https://jeetbuzz777.com/af/zDY03gm1/jbcasino" className="single-item mr-[24px]">
                                  <img
                                    src={winners2}
                                    alt="image"
                                    className="rounded-[50%]"
                                  />
                                  <span className="box-border bg-jb-yellow text-white rounded-[14px] block leading-[20px] absolute px-[8px] py-[2px] mt-[-36px] ml-[12px]">
                                    $100
                                  </span>
                                </a>
                                <a href="https://jeetbuzz777.com/af/zDY03gm1/jbcasino" className="single-item mr-[24px]">
                                  <img
                                    src={winners3}
                                    alt="image"
                                    className="rounded-[50%]"
                                  />
                                  <span className="box-border bg-jb-yellow text-white rounded-[14px] block leading-[20px] absolute px-[8px] py-[2px] mt-[-36px] ml-[12px]">
                                    $100
                                  </span>
                                </a>
                                <a href="https://jeetbuzz777.com/af/zDY03gm1/jbcasino" className="single-item mr-[24px]">
                                  <img
                                    src={winners4}
                                    alt="image"
                                    className="rounded-[50%]"
                                  />
                                  <span className="box-border bg-jb-yellow text-white rounded-[14px] block leading-[20px] absolute px-[8px] py-[2px] mt-[-36px] ml-[12px]">
                                    $100
                                  </span>
                                </a>
                              </div>
                              <a
                                href="winners.html"
                                className="cmn-btn-second jb-border-violet px-[16px] py-[12px] rounded-[25px] uppercase font-[700] text-[13px] leading-[18px] text-white w-[152px]"
                              >
                                View All Winner
                              </a>
                            </div>
                          </div>
                          <div className="text-center col-lg-5">
                            <div className="right-area">
                              <h4 className="uppercase text-white text-[23px] top-[10px] font-chakra font-[600]">
                                Tournament
                              </h4>
                              <h4 className="couter-area mt-[50px] mb-[62px]">
                                <span className="uppercase text-[#ff8a14] text-[24px] font-[800] bg-jb-blue-400 rounded-[5px] px-[16px] py-[24px] m-[-2px] mx-[2px]">
                                  $
                                </span>
                                <span className="uppercase text-[#ff8a14] text-[24px] font-[800] bg-jb-blue-400 rounded-[5px] px-[16px] py-[24px] m-[-2px] mx-[2px]">
                                  2
                                </span>
                                <span className="uppercase text-[#ff8a14] text-[24px] font-[800] bg-jb-blue-400 rounded-[5px] px-[16px] py-[24px] m-[-2px] mx-[2px]">
                                  8
                                </span>
                                <span className="uppercase text-[#ff8a14] text-[24px] font-[800] bg-jb-blue-400 rounded-[5px] px-[16px] py-[24px] m-[-2px] mx-[2px]">
                                  3
                                </span>
                                <span className="uppercase text-[#ff8a14] text-[24px] font-[800] bg-jb-blue-400 rounded-[5px] px-[16px] py-[24px] m-[-2px] mx-[2px]">
                                  1
                                </span>
                              </h4>
                              <a
                                href="tournaments-details.html"
                                className="cmn-btn-second jb-border-violet px-[16px] py-[12px] rounded-[25px] uppercase font-[700] text-[13px] leading-[18px] text-white w-[152px] mt-[24px]"
                              >
                                Join Now!
                              </a>
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
        <section id="available-game-section" className="index-2 games-2 home-2">
          <div className="overlay pt-120 pb-120 py-[100px] container wow fadeInUp  px-4 mx-auto w-full">
            <div className="menu-area pt-120">
              <div className="container ">
                <div className="menu-bar">
                  <div className="flex flex-wrap justify-between -mx-4 row justify-content-between mb-9">
                    <div className="col-lg-8">
                      <ul
                        className="border-none nav nav-tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item mr-[10px]">
                          <a
                            className="flex items-center mr-2 cmn-btn-alt cmn-btn active jb-btn-green"
                            id="latest-tab"
                            data-toggle="tab"
                            href="#latest"
                            role="tab"
                            aria-controls="latest"
                            aria-selected="true"
                          >
                            latest
                          </a>
                        </li>
                        <li className="nav-item mr-[10px]">
                          <a
                            className="flex items-center mr-2 cmn-btn-alt cmn-btn jb-btn-green"
                            id="popular-tab"
                            data-toggle="tab"
                            href="#popular"
                            role="tab"
                            aria-controls="popular"
                            aria-selected="false"
                          >
                            popular
                          </a>
                        </li>
                        <li className="nav-item mr-[10px]">
                          <a
                            className="flex items-center mr-2 cmn-btn-alt cmn-btn jb-btn-green"
                            id="slots-tab"
                            data-toggle="tab"
                            href="#slots"
                            role="tab"
                            aria-controls="slots"
                            aria-selected="false"
                          >
                            slots
                          </a>
                        </li>
                        <li className="nav-item mr-[10px]">
                          <a
                            className="flex items-center mr-2 cmn-btn-alt cmn-btn jb-btn-green"
                            id="poker-tab"
                            data-toggle="tab"
                            href="#poker"
                            role="tab"
                            aria-controls="poker"
                            aria-selected="true"
                          >
                            poker
                          </a>
                        </li>
                        <li className="nav-item mr-[10px]">
                          <a
                            className="flex items-center mr-2 cmn-btn-alt cmn-btn jb-btn-green"
                            id="table-tab"
                            data-toggle="tab"
                            href="#table"
                            role="tab"
                            aria-controls="table"
                            aria-selected="false"
                          >
                            table
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4">
                      <form action="#">
                        <div className="input-area d-flex px-[4px] h-[50px] bg-[#181868] jb-border-violet rounded-[28px] h-[60px]">
                          <div className="icon d-flex align-items-center pt-[23px] pl-[24px]">
                            <img src={searchIcon} alt="image" />
                          </div>
                          <input
                            type="text"
                            placeholder="What’s your game?"
                            className="bg-transparent border-none px-[10px] pt-[23px] py-[20px] h-[50px]"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container wow fadeInUp">
              <div className="tab-content" id="myTabContentt">
                <div
                  className="tab-pane fade show active"
                  id="latest"
                  role="tabpanel"
                  aria-labelledby="latest-tab"
                >
                  <div className="row contained-area mb-30-none 2md:mt-[30px]">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame1} alt="image" className="mx-auto" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame2} alt="image" className="mx-auto" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame3} alt="image" className="mx-auto" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame4} alt="image" className="mx-auto" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame5} alt="image" className="mx-auto" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame6} alt="image" className="mx-auto" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame7} alt="image" className="mx-auto" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame8} alt="image" className="mx-auto" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="popular"
                  role="tabpanel"
                  aria-labelledby="popular-tab"
                >
                  <div className="row contained-area mb-30-none 2md:mt-[30px]">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame3} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame2} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame1} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame7} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame5} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame6} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame4} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame8} alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="slots"
                  role="tabpanel"
                  aria-labelledby="slots-tab"
                >
                  <div className="row contained-area mb-30-none 2md:mt-[30px]">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame8} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame2} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame7} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame6} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame4} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame6} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame3} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame1} alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="poker"
                  role="tabpanel"
                  aria-labelledby="poker-tab"
                >
                  <div className="row contained-area mb-30-none 2md:mt-[30px]">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame7} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame8} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame3} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame2} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame5} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame6} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame1} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame4} alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="table"
                  role="tabpanel"
                  aria-labelledby="table-tab"
                >
                  <div className="row contained-area mb-30-none 2md:mt-[30px]">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame5} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame6} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame7} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame4} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame1} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame2} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame3} alt="image" />
                      </a>
                    </div>
                    <div className="text-center col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame8} alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-[24px]">
                <div className="text-center col-lg-6">
                  <a
                    href="games-2.html"
                    className="cmn-btn-second hover:border-[#7400D3] hover:border-1 hover:border-solid hover:bg-[#7400D3] hover:ease-in-out hover:duration-300 px-[8px] py-[15px] rounded-[25px] border-[1px] border-solid border-[#BE97FF] uppercase font-[700] text-[13px] leading-[18px] text-white"
                  >
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="jackpot-section"
          className="bg-[url('../images/jackpot-bg.png')] bg-[length:100%_700px]  bg-no-repeat"
        >
          <div className="overlay pt-120 pb-120 h-[700px]">
            <div className="container">
              <div className="row justify-content-center">
                <div className="text-center col-lg-8">
                  <div className="right-area mt-[48px]">
                    <h3 className="uppercase text-white text-[58px] leading-[91.2px] font-chakra">
                      TOTAL JACKPOT AMOUNT
                    </h3>
                    <h1 className="couter-area mt-3 mb-[68px]">
                      <span className="uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra">
                        €
                      </span>
                      <span className="uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra">
                        4
                      </span>
                      <span className="uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra">
                        9
                      </span>
                      <span className="uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra">
                        6
                      </span>
                      <span className="uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra">
                        1
                      </span>
                      <span className="uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra">
                        4
                      </span>
                      <span className="uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra">
                        9
                      </span>
                      <span className="uppercase text-[#ff8a14] bg-jb-grey-1300 rounded-[5px] px-[15px] py-[15px] m-[5px] text-[65px] font-chakra">
                        1
                      </span>
                    </h1>
                    <a className="cmn-btn-second jb-cmn-btn-second bg-[#7400D3] border-[#7400D3] border-1 border-solid uppercase mt-4 px-[8px] py-[15px] rounded-[25px] border-[1px] font-[700] text-[13px] leading-[18px] text-white">
                      Get Start Now!
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 pt-120 px-[10%] py-[10%] jackpot-area mb-[-260px] z-1">
                  <div className="section-header">
                    <h3 className="uppercase text-white text-[42px] leading-[91.2px] font-chakra">
                      Jackpot
                    </h3>
                  </div>
                  <div className="carousel-jackpot">
                    <div className="feature-game-carousel slick-initialized slick-slider">
                      <div className="m-auto slick-list draggable">
                        <Home3Carousel home3Carousels={home3Carousels} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="level-up-section" className="bg-black pt-[24px]">
          <div className="overlay pt-120 pb-120 py-[100px]">
            <div className="container-fluid w-full px-[15px] mx-auto">
              <div className="row">
                <div className="col-lg-6 flex-[0_0_100%] max-w-[100%] md:flex-[0_0_50%] md:max-w-[50%]">
                  <div className="left-area d-flex justify-content-lg-center">
                    <img src={levelUpLeft} alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center flex-[0_0_100%] max-w-[100%] md:flex-[0_0_50%] md:max-w-[50%]">
                  <div className="container wow fadeInUp">
                    <div className="row flex flex-wrap -mx-[15px]">
                      <div className="col-lg-10 align-items-center right-area">
                        <div className="mb-8 section-header">
                          <h2 className="title jb-section-title mb-[20px]">
                            LEVEL UP! GET REWARDS
                          </h2>
                          <p className="text-base font-normal text-white">
                            Each time you reach a new level you&apos;ll get a
                            reward
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 d-flex justify-content-between">
                            <div className="single-item">
                              <img src={freespinsIcon} alt="image" />
                              <h6 className="text-lg text-white uppercase mt-7 font-chakra">
                                Freespins
                              </h6>
                            </div>
                            <div className="single-item">
                              <img src={bonusesIcon} alt="image" />
                              <h6 className="text-lg text-white uppercase mt-7 font-chakra">
                                BONUSES
                              </h6>
                            </div>
                            <div className="single-item">
                              <img src={tournamentsIcon} alt="image" />
                              <h6 className="text-lg text-white uppercase mt-7 font-chakra">
                                TOURNAMENTS
                              </h6>
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
        <section className="relative z-10 block latest-activites-section jb-pseudo-before-latest-act">
          {/* <section className="relative block latest-activites-section"> */}
          <div className="ani-div opacity-30 relative !z-[-1]">
            <img
              className="obj-1 absolute left-[13%] -top-[30px]"
              src={star}
              alt="image"
            />
            <img
              className="obj-2 absolute right-[4%] top-[125px]"
              src={star}
              alt="image"
            />
            <img
              className="obj-3 absolute left-[2%] top-[320px]"
              src={star2}
              alt="image"
            />
          </div>
          <div className="overlay pt-120 pt-[120px] block">
            <div className="container wow fadeInUp">
              <div className="row justify-content-between">
                <div className="col-lg-6 col-md-6">
                  <div className="section-header">
                    <h2 className="title jb-section-title mb-[20px] z-[3]">
                      Latest Activites
                    </h2>
                    <p className="text-base font-normal text-white">
                      Each time you reach a new level you&apos;ll get a reward
                    </p>
                  </div>
                </div>
                <div className="z-10 col-lg-5 col-md-5 d-flex align-items-center justify-content-end justify-cen">
                  <ul
                    className="nav nav-tabs bg-jb-black-300 jb-tab-shadow uppercase border-none flex flex-wrap pl-0 mb-0 list-none !rounded-[28px]"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item m-0 text-lg font-normal text-white leading-[25px]">
                      <a
                        className="nav-link active !bg-jb-green-200 font-black py-[15px] px-[30px] !rounded-[28px] text-white !border-jb-green-200"
                        id="bets-tab"
                        data-toggle="tab"
                        href="#bets"
                        role="tab"
                        aria-controls="bets"
                        aria-selected="true"
                      >
                        Latest Bets
                      </a>
                    </li>
                    <li className="nav-item m-0 text-lg font-normal text-white leading-[25px]">
                      <a
                        className="nav-link font-black py-[15px] px-[30px] text-white"
                        id="contest-tab"
                        data-toggle="tab"
                        href="#contest"
                        role="tab"
                        aria-controls="contest"
                        aria-selected="false"
                      >
                        Contest
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="tab-content mb-[-180px]" id="myTabContent">
                    <div
                      className="tab-pane fade active show "
                      id="bets"
                      role="tabpanel"
                      aria-labelledby="bets-tab"
                    >
                      <div className="block w-full overflow-x-auto table-responsive jb-table-shadow">
                        <table className="table mb-0 border-collapse bg-jb-black-300 text-jb-black-200">
                          <thead>
                            <tr className="uppercase bg-jb-orange-400">
                              <th
                                className="text-start jb-table-col"
                                scope="col"
                              >
                                Game
                              </th>
                              <th
                                className="text-center jb-table-col"
                                scope="col"
                              >
                                Player
                              </th>
                              <th
                                className="text-center jb-table-col"
                                scope="col"
                              >
                                Bet ID
                              </th>
                              <th
                                className="text-center jb-table-col"
                                scope="col"
                              >
                                Payout
                              </th>
                              <th
                                className="text-center jb-table-col"
                                scope="col"
                              >
                                Profit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon1}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  Fishing Disco
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Bessie Cooper
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                0.70X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon1}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon2}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  Ninjax
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Eleanor Pena
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                2.21X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon2}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon3}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  Dragons Gate
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Cody Fisher
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                3.01X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon3}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon4}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  King of Glory
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Arlene McCoy
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                1.11X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon4}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  - 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon5}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  Dice
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Leslie Alexander
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                0.00X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon5}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon6}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  League Of Legends
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Theresa Webb
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                3.19X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon6}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="contest"
                      role="tabpanel"
                      aria-labelledby="contest-tab"
                    >
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th
                                className="text-start jb-table-col"
                                scope="col"
                              >
                                Game
                              </th>
                              <th
                                className="text-center jb-table-col"
                                scope="col"
                              >
                                Player
                              </th>
                              <th
                                className="text-center jb-table-col"
                                scope="col"
                              >
                                Bet ID
                              </th>
                              <th
                                className="text-center jb-table-col"
                                scope="col"
                              >
                                Payout
                              </th>
                              <th
                                className="text-center jb-table-col"
                                scope="col"
                              >
                                Profit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon1}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  Fishing Disco
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Bessie Cooper
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                0.70X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon1}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon2}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  Ninjax
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Eleanor Pena
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                2.21X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon2}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon3}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  Dragons Gate
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Cody Fisher
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                3.01X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon3}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon4}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  King of Glory
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Arlene McCoy
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                1.11X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon4}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  - 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon5}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  Dice
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Leslie Alexander
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                0.00X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon5}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th className="jb-table-col" scope="row">
                                <a className="flex">
                                  <img
                                    src={gameIcon6}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  League Of Legends
                                </a>
                              </th>
                              <td className="text-center jb-table-col">
                                Theresa Webb
                              </td>
                              <td className="text-center jb-table-col">
                                30320267096
                              </td>
                              <td className="text-center jb-table-col">
                                3.19X
                              </td>
                              <td className="text-center jb-table-col">
                                <a className="flex items-center justify-center text-center">
                                  <img
                                    src={tableIcon6}
                                    alt="image"
                                    className="mb-0 mr-1"
                                  />
                                  + 0.00312150
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features-section" className="bg-jb-grey-1400">
          <div className="overlay pt-120 pb-120 py-[120px] mt-[120px]">
            <div className="container wow fadeInUp">
              <div className="row justify-content-center text-center mb-[24px]">
                <div className="col-lg-8">
                  <div className="section-header">
                    <h2 className="title jb-section-title mb-[20px]">
                      A safe and secure gaming environment
                    </h2>
                    <p className="jb-p">
                      Play your favorite game, use the coin of your choice &amp;
                      chat with your friends. Simple, social and most
                      importantly entertaining!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row px-[10%] mt-[60px]">
                <div className="col-lg-4 col-md-6 mb-[80px]">
                  <div className="text-center single-item">
                    <div className="icon-area d-flex justify-content-center align-items-center">
                      <img
                        src={featureIcon1}
                        alt="image"
                        className="bg-jb-blue-100 rounded-[50%] h-[110px] w-[110px] p-[24px]"
                      />
                    </div>
                    <h4 className="jb-h4">VIP membership</h4>
                    <p className="jb-p">
                      Become a Premium VIP Member for a month and enjoy the
                      benefits that will enrich your gambling adventures.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="text-center single-item">
                    <div className="icon-area d-flex justify-content-center align-items-center">
                      <img
                        src={featureIcon2}
                        alt="image"
                        className="bg-jb-blue-100 rounded-[50%] h-[110px] w-[110px] p-[24px]"
                      />
                    </div>
                    <h4 className="jb-h4">Provably fair</h4>
                    <p className="jb-p">
                      We utilize the industry standard for provably fair gaming.
                      Verify drawings with our or 3rd party verification tools.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="text-center single-item">
                    <div className="icon-area d-flex justify-content-center align-items-center">
                      <img
                        src={featureIcon3}
                        alt="image"
                        className="bg-jb-blue-100 rounded-[50%] h-[110px] w-[110px] p-[24px]"
                      />
                    </div>
                    <h4 className="jb-h4">Fast withdrawals</h4>
                    <p className="jb-p">
                      Get your winnings paid out to your wallet on your own
                      terms. Simply select the withdrawal speed and confirm.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="text-center single-item">
                    <div className="icon-area d-flex justify-content-center align-items-center">
                      <img
                        src={featureIcon4}
                        alt="image"
                        className="bg-jb-blue-100 rounded-[50%] h-[110px] w-[110px] p-[24px]"
                      />
                    </div>
                    <h4 className="jb-h4">Prog jackpots</h4>
                    <p className="jb-p">
                      With every bet on dice and roulette you have the chance to
                      win our ever growing jackpot.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="text-center single-item">
                    <div className="icon-area d-flex justify-content-center align-items-center">
                      <img
                        src={featureIcon5}
                        alt="image"
                        className="bg-jb-blue-100 rounded-[50%] h-[110px] w-[110px] p-[24px]"
                      />
                    </div>
                    <h4 className="jb-h4">Low house edge</h4>
                    <p className="jb-p">
                      You’re here to win often and a lot. Our games have
                      extremely low house edge, starting at only 1%.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="text-center single-item">
                    <div className="icon-area d-flex justify-content-center align-items-center">
                      <img
                        src={featureIcon6}
                        alt="image"
                        className="bg-jb-blue-100 rounded-[50%] h-[110px] w-[110px] p-[24px]"
                      />
                    </div>
                    <h4 className="jb-h4">Secure and private</h4>
                    <p className="jb-p">
                      We don’t collect sensitive private information such as
                      bank accounts, which makes your stay with us safe and
                      private.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black counter-section">
          <div className="overlay pt-120 px-[10%] pb-[60px]">
            <div className="container bg-jb-orange-400 pt-[24px]">
              <div className="row mb-40-none">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-item mb-[40px] text-center">
                    <img src={counterIcon1} alt="image" className="m-auto" />
                    <span className="count font-bold text-[32px] leading-[38px] text-white !mt-3 !mb-[5px] block">
                      $ <span className="counter">53763</span>
                    </span>
                    <h6 className="text-jb-orange-600 font-bold text-[18px] leading-[21.6px] font-chakra">
                      JACKPOT
                    </h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="text-center single-item">
                    <img src={counterIcon2} alt="image" className="m-auto" />
                    <span className="count font-bold text-[32px] leading-[38px] text-white !mt-3 !mb-[5px] block">
                      $ <span className="counter">32348819</span>
                    </span>
                    <h6 className="text-jb-orange-600 font-bold text-[18px] leading-[21.6px] font-chakra">
                      TOTAL PAID
                    </h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="text-center single-item">
                    <img src={counterIcon3} alt="image" className="m-auto" />
                    <span className="count font-bold text-[32px] leading-[38px] text-white !mt-3 !mb-[5px] block">
                      <span className="counter">39</span>%
                    </span>
                    <h6 className="text-jb-orange-600 font-bold text-[18px] leading-[21.6px] font-chakra">
                      SECURE
                    </h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-item mb-[40px] text-center">
                    <img src={counterIcon4} alt="image" className="m-auto" />
                    <span className="count font-bold text-[32px] leading-[38px] text-white !mt-3 !mb-[5px] block">
                      <span className="counter">9</span>/
                      <span className="counter">2</span>
                    </span>
                    <h6 className="text-jb-orange-600 font-bold text-[18px] leading-[21.6px] font-chakra">
                      SUPPORT
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq-section">
          <div className="overlay pb-120 py-[100px]">
            <div className="container">
              <div className="text-center row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-header">
                    <h2 className="title jb-section-title mb-[20px] text-center">
                      Our most common questions
                    </h2>
                    <p className="text-base font-normal text-center text-white">
                      Do you have a question about gainio? Please contact us! We
                      would love to answer your questions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-5 d-flex align-items-center cus-mb">
                  <div className="jb-rounded-animation-before jb-rounded-animation-after">
                    <span>
                      <img src={faqLeft} alt="image" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-7 wow fadeInUp">
                  <div id="accordionFlush">
                    <div className="card mb-5 relative flex flex-col min-w-0  break-words bg-white bg-clip-border !rounded">
                      <div
                        className="card-header bg-jb-green-100 !py-3 !px-5 !mb-0"
                        id="headingOne"
                      >
                        <h6 className="mb-0 text-lg leading-[21.6px] text-white font-semibold">
                          <button
                            className=" w-full flex items-center text-decoration-none text-inherit uppercase text-lg leading-[21.6px] font-chakra jb-btn-link jb-btn-link-before jb-btn-link-after"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Can I earn money playing on Gainio?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="flush-collapseOne"
                        className="border-0 accordion-collapse collapse show"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlush"
                      >
                        <div className="card-body bg-jb-green-300 pt-[15px] pb-[20px] px-[30px]">
                          <p className="text-sm font-normal text-white ">
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-5 relative flex flex-col min-w-0  break-words bg-white bg-clip-border !rounded">
                      <div
                        className="card-header bg-jb-green-100 !py-3 !px-5 !mb-0"
                        id="headingTwo"
                      >
                        <h6 className="mb-0 text-lg leading-[21.6px] text-white font-semibold">
                          <button
                            className="collapsed w-full flex items-center text-decoration-none text-inherit uppercase text-lg leading-[21.6px] font-chakra jb-btn-link jb-btn-link-before jb-btn-link-after"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Are there any benefits other than money?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="flush-collapseTwo"
                        className="border-0 accordion-collapse collapse"
                        aria-labelledby="flush-collapseTwo"
                        data-bs-parent="#accordionFlush"
                      >
                        <div className="card-body bg-jb-green-300 pt-[15px] pb-[20px] px-[30px]">
                          <p className="text-sm font-normal text-white ">
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-5 relative flex flex-col min-w-0  break-words bg-white bg-clip-border !rounded">
                      <div
                        className="card-header bg-jb-green-100 !py-3 !px-5 !mb-0"
                        id="headingThree"
                      >
                        <h6 className="mb-0 text-lg leading-[21.6px] text-white font-semibold">
                          <button
                            className="collapsed w-full flex items-center text-decoration-none text-inherit uppercase text-lg leading-[21.6px] font-chakra jb-btn-link jb-btn-link-before jb-btn-link-after"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            What is a challenge, and how do I join one?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="flush-collapseThree"
                        className="border-0 accordion-collapse collapse"
                        aria-labelledby="flush-collapseThree"
                        data-bs-parent="#accordionFlush"
                      >
                        <div className="card-body bg-jb-green-300 pt-[15px] pb-[20px] px-[30px]">
                          <p className="text-sm font-normal text-white ">
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-5 relative flex flex-col min-w-0  break-words bg-white bg-clip-border !rounded">
                      <div
                        className="card-header bg-jb-green-100 !py-3 !px-5 !mb-0"
                        id="headingFour"
                      >
                        <h6 className="mb-0 text-lg leading-[21.6px] text-white font-semibold">
                          <button
                            className="collapsed w-full flex items-center text-decoration-none text-inherit uppercase text-lg leading-[21.6px] font-chakra jb-btn-link jb-btn-link-before jb-btn-link-after"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            Can I earn money playing on Gainio?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="flush-collapseFour"
                        className="border-0 accordion-collapse collapse"
                        aria-labelledby="flush-collapseFour"
                        data-bs-parent="#accordionFlush"
                      >
                        <div className="card-body bg-jb-green-300 pt-[15px] pb-[20px] px-[30px]">
                          <p className="text-sm font-normal text-white ">
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-5 relative flex flex-col min-w-0  break-words bg-white bg-clip-border !rounded">
                      <div
                        className="card-header bg-jb-green-100 !py-3 !px-5 !mb-0"
                        id="headingFive"
                      >
                        <h6 className="mb-0 text-lg leading-[21.6px] text-white font-semibold">
                          <button
                            className="collapsed w-full flex items-center text-decoration-none text-inherit uppercase text-lg leading-[21.6px] font-chakra jb-btn-link jb-btn-link-before jb-btn-link-after"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive"
                          >
                            Who do I compete against in the challenges?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="flush-collapseFive"
                        className="border-0 accordion-collapse collapse"
                        aria-labelledby="flush-collapseFive"
                        data-bs-parent="#accordionFlush"
                      >
                        <div className="card-body bg-jb-green-300 pt-[15px] pb-[20px] px-[30px]">
                          <p className="text-sm font-normal text-white ">
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-5 relative flex flex-col min-w-0  break-words bg-white bg-clip-border !rounded">
                      <div
                        className="card-header bg-jb-green-100 !py-3 !px-5 !mb-0"
                        id="headingSix"
                      >
                        <h6 className="mb-0 text-lg leading-[21.6px] text-white font-semibold">
                          <button
                            className="collapsed w-full flex items-center text-decoration-none text-inherit uppercase text-lg leading-[21.6px] font-chakra jb-btn-link jb-btn-link-before jb-btn-link-after"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSix"
                            aria-expanded="false"
                            aria-controls="flush-collapseSix"
                          >
                            How does G-Loot collect game data?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="flush-collapseSix"
                        className="border-0 accordion-collapse collapse"
                        aria-labelledby="flush-collapseSix"
                        data-bs-parent="#accordionFlush"
                      >
                        <div className="card-body bg-jb-green-300 pt-[15px] pb-[20px] px-[30px]">
                          <p className="text-sm font-normal text-white ">
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HomeWrapper>
    </Layout>
  );
};

export default withLocation(Home3);

const HomeWrapper = styled.div`
  && {
    margin: 0 auto;
  }
`;
