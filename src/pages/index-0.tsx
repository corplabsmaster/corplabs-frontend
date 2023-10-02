import React from "react";
import styled from "styled-components";
import SEO from "@components/common/seo";

import Layout from "@components/layout";
import withLocation from "@helpers/hoc/withLocation";
import bannerIllu from "@components/images/banner-illu.png";
import coin1 from "@components/images/coin-1.png";
import coin2 from "@components/images/coin-2.png";
import coin3 from "@components/images/coin-3.png";
import coin4 from "@components/images/coin-4.png";
import bannerBottom1 from "@components/images/banner-bottom-1.png";
import bannerBottom2 from "@components/images/banner-bottom-2.png";
import bannerBottom3 from "@components/images/banner-bottom-3.png";
import doubleRight from "@components/images/double-right.png";
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
import { homeCarousels } from "@helpers/const";
import { HomeCarousel } from "@components/common/carousel";

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

type Props = {
  search?: {
    search: string;
  };
  location: object;
};

const Home = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: { search },
}: Props) => {
  return (
    <Layout>
      <HomeWrapper>
        <SEO
          title="Home"
          description="Jwin7 is an established international cricket betting platform that also provides online casino games. It offers a wide range of services from its own Jwin7 casino to the latest 2022 Fifa world cup news."
        />

        <section className="bg-[url('../images/banner-bg.png')] bg-[length:100%] pt-[167px] mb-[69px]">
          <div className="banner-content d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="main-content">
                    <div className="text-center top-area justify-content-center">
                      <h1 className="uppercase text-white text-[76px] leading-[91.2px] font-chakra">
                        Play &amp; gain <br />{" "}
                        <span className="text-jb-orange-400">rewards</span>
                      </h1>
                      <p className="text-lg font-normal leading-6 text-white">
                        Free, Fun &amp; Fair Rewards For Everyone
                      </p>
                      <button type="button" className="mb-5 jb-btn-red mt-9 ">
                        Start Playing!
                      </button>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-12">
                        <div className="relative ani-img">
                          <img
                            className="cir-1 absolute top-0 left-[-15%] jb-animation-float"
                            src={coin1}
                            alt="circle"
                          />
                          <img
                            className="cir-2 absolute top-[200px] left-[-35%] jb-animation-float"
                            src={coin2}
                            alt="circle"
                          />
                          <img
                            className="cir-3 absolute top-0 right-[-15%] jb-animation-float"
                            src={coin3}
                            alt="circle"
                          />
                          <img
                            className="cir-4 absolute top-[200px] right-[-35%] jb-animation-float"
                            src={coin4}
                            alt="circle"
                          />
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-lg-12">
                            <div className="text-center bottom-area">
                              <img src={bannerIllu} alt="banner-circle" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-4 -mb-16 rounded-lg bottom-item bg-jb-orange-400">
                  <div className="flex flex-wrap row">
                    <div className="col-lg-4 col-md-6  flex-[0_0_100%] max-w-[100%] md:flex-[0_0_50%] md:max-w-[50%] lg:flex-[0_0_33%] lg:max-w-[33.33%]">
                      <div className="single-item d-flex pt-[22px] pb-[26px] flex">
                        <div className="grid items-center left-area align-items-center">
                          <img
                            src={bannerBottom1}
                            alt="image"
                            className="mx-[30px] max-w-[inherit] rounded-[50%]"
                          />
                        </div>
                        <div className="text-white right-area">
                          <h4 className="mb-2 uppercase text-[32px] lead-[38.4px] font-semibold text-white">
                            PLAY
                          </h4>
                          <p className="text-lg font-normal leading-6">
                            A huge collection of web and mobile games.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6  flex-[0_0_100%] max-w-[100%] md:flex-[0_0_50%] md:max-w-[50%] lg:flex-[0_0_33%] lg:max-w-[33.33%]">
                      <div className="single-item d-flex pt-[22px] pb-[26px] flex">
                        <div className="grid items-center left-area align-items-center">
                          <img
                            src={bannerBottom2}
                            alt="image"
                            className="mx-[30px] max-w-[inherit] rounded-[50%]"
                          />
                        </div>
                        <div className="text-white right-area">
                          <h4 className="mb-2 uppercase text-[32px] lead-[38.4px] font-semibold text-white">
                            WIN
                          </h4>
                          <p className="text-lg font-normal leading-6">
                            Points and cash from playing and competing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 flex-[0_0_100%] max-w-[100%] md:flex-[0_0_50%] md:max-w-[50%] lg:flex-[0_0_33%] lg:max-w-[33.33%]">
                      <div className="single-item d-flex pt-[22px] pb-[26px] flex">
                        <div className="grid items-center left-area align-items-center">
                          <img
                            src={bannerBottom3}
                            alt="image"
                            className="mx-[30px] max-w-[inherit] rounded-[50%]"
                          />
                        </div>
                        <div className="text-white right-area">
                          <h4 className="mb-2 uppercase text-[32px] lead-[38.4px] font-semibold text-white">
                            EARN
                          </h4>
                          <p className="text-lg font-normal leading-6">
                            Your Wombucks or prize money from challenges.
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
        <section id="feature-game-section bg-jb-grey-1100">
          <div className="overlay pt-120 pb-120 py-[100px]">
            <div className="container-fruid wow fadeInUp">
              <div className="container max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mx-auto w-full">
                <div className="flex flex-wrap justify-between -mx-4 row justify-content-between mb-9">
                  <div className="col-lg-6 col-md-9 col-sm-8">
                    <div className="section-header -mt-[12px] mb-[20px]">
                      <h2 className="title jb-section-title mb-[20px] text-center sm:!text-left">
                        PROMOTIOS
                      </h2>
                      <p className="text-base font-normal text-white text-center sm:!text-left">
                        Grab it now before it runs out.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-4 d-flex align-items-center justify-content-center justify-content-sm-end">
                    <div className="right-area">
                      <a
                        href="games.html"
                        className="flex items-center cmn-btn-alt cmn-btn jb-btn-green"
                      >
                        Show all{" "}
                        <img
                          src={doubleRight}
                          alt="image"
                          className="mb-0 ml-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-game-carousel slick-initialized slick-slider">
                <div className="m-auto slick-list draggable">
                  <HomeCarousel homeCarousels={homeCarousels} />
                </div>
              </div>
              {/* <div>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={swiper => console.log(swiper)}
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  ...
                </Swiper>
              </div> */}
            </div>
          </div>
        </section>
        <section className="available-game-section bg-jb-black-400">
          <div className="overlay pt-120 pb-120 py-[100px]">
            <div className="container wow fadeInUp max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mx-auto w-full">
              <div className="flex flex-wrap justify-between -mx-4 row justify-content-between mb-9">
                <div className="col-lg-6 col-md-6">
                  <div className="section-header mb-[20px]">
                    <h2 className="title jb-section-title mb-[20px] text-center sm:!text-left">
                      Games
                    </h2>
                    <p className="text-base font-normal text-white text-center sm:!text-left">
                      Endless fun anywahere, anytime!
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 d-flex align-items-center justify-content-end justify-cen !justify-center sm:!justify-end">
                  <div className="flex right-area">
                    <a
                      href="games-2.html"
                      className="flex items-center mr-2 cmn-btn-alt cmn-btn jb-btn-green"
                    >
                      TOP GAMES{" "}
                      <img
                        src={doubleRight}
                        alt="image"
                        className="mb-0 ml-1"
                      />
                    </a>
                    <a
                      href="tournaments.html"
                      className="flex items-center cmn-btn-alt cmn-btn jb-btn-green"
                    >
                      Tournaments{" "}
                      <img
                        src={doubleRight}
                        alt="image"
                        className="mb-0 ml-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row contained-area mb-30-none">
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
          </div>
        </section>
        <section id="level-up-section">
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
        <section className="bg-black counter-section">
          <div className="overlay pt-120 pb-120 py-[100px]">
            <div className="container">
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
        <section id="faq-section">
          <div className="overlay py-[120px] md:py-[100px] mt-[180px]">
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
                  <div id="accordion-one">
                    <div className="card mb-5 relative flex flex-col min-w-0  break-words bg-white bg-clip-border !rounded">
                      <div
                        className="card-header bg-jb-green-100 !py-3 !px-5 !mb-0"
                        id="headingOne"
                      >
                        <h6 className="mb-0 text-lg leading-[21.6px] text-white font-semibold">
                          <button
                            className="btn btn-link relative w-full flex items-center text-decoration-none text-inherit uppercase text-lg leading-[21.6px] font-chakra"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Can I earn money playing on Gainio?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion-one"
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
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h6 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Are there any benefits other than money?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion-one"
                      >
                        <div className="card-body">
                          <p>
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h6 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is a challenge, and how do I join one?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion-one"
                      >
                        <div className="card-body">
                          <p>
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h6 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Can I earn money playing on Gainio?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordion-one"
                      >
                        <div className="card-body">
                          <p>
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFive">
                        <h6 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Who do I compete against in the challenges?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-parent="#accordion-one"
                      >
                        <div className="card-body">
                          <p>
                            Duis sapien justo, posuere interdum mauris eu,
                            tincidunt placerat ante. Curabitur aliquet leo
                            ipsum, at maximus dolor fringilla vel. Aliquam
                            sagittis elementum volutpat. Vestibulum vel arcu
                            nisl.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingSix">
                        <h6 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            How does G-Loot collect game data?
                          </button>
                        </h6>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-parent="#accordion-one"
                      >
                        <div className="card-body">
                          <p>
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

        <div
          className="hidden modal register fade"
          id="signUpModalReg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="signUpModalRegTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signUpModalRegTitle">
                  <img src="images/logo.png" alt="image" />
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="images/cross-icon-1.png" alt="image" />
                </button>
              </div>
              <div className="modal-body">
                <h5 className="welcome">Welcome back</h5>
                <p>
                  Not a member? <a>REGISTER</a>
                </p>
                <div className="form-area">
                  <form action="#">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        className="form-control"
                        placeholder="Registered Email Address."
                        type="email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                    <div className="form-group d-flex justify-content-end">
                      <label>
                        <a>Not a member?</a>
                      </label>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="cmn-btn cmn-btn-alt">
                        {" "}
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div className="reg-with">
                    <p>Register in directly with</p>
                    <div className="social-area d-flex justify-content-center">
                      <a>
                        <img src="images/twitter.png" alt="image" />
                      </a>
                      <a>
                        <img src="images/facebook.png" alt="image" />
                      </a>
                      <a>
                        <img src="images/linkedin.png" alt="image" />
                      </a>
                      <a>
                        <img src="images/google.png" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeWrapper>
    </Layout>
  );
};

export default withLocation(Home);

const HomeWrapper = styled.div`
  && {
    margin: 0 auto;
  }
`;
