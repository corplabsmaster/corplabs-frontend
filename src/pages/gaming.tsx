import React from "react";
import Layout from "@components/layout";

import styled from "styled-components";
import SEO from "@components/common/seo";

import withLocation from "@helpers/hoc/withLocation";
import bannerRight from "@components/images/games-banner-right.png";
import searchIcon from "@components/images/search-icon.png";
import featuredIcon from "@components/images/featured-icon.png";
import instantIcon from "@components/images/instant-icon.png";
import tournamentIcon from "@components/images/tournament-icon.png";

import tropy2 from "@components/images/tropy-2.png";
import user4 from "@components/images/user-4.png";
import ribbon from "@components/images/ribbon.png";

import user1 from "@components/images/user-1.png";
import user2 from "@components/images/user-2.png";
import user3 from "@components/images/user-3.png";

import win1 from "@components/images/win-1.png";
import win2 from "@components/images/win-2.png";
import win3 from "@components/images/win-3.png";

import doubleAltRight from "@components/images/double-right-alt.png";

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
import star from "@components/images/star.png";
import star2 from "@components/images/star-2.png";
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

type Props = {
  search?: {
    search: string;
  };
  location: object;
};

const Gaming = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: { search },
}: Props) => {
  return (
    <Layout>
      <GamingWrapper>
        <SEO
          title="Gaming"
          description="Jwin7 is an established international cricket betting platform that also provides online casino games. It offers a wide range of services from its own Jwin7 casino to the latest 2022 Fifa world cup news."
        />
        <section className="bg-[url('../images/games-inner-bg.png')] bg-[length:100%_100%] pt-[140px] pb-[0px] md:pt-[202px] md:pb-[78px] relative bg-no-repeat">
          <div className="banner-content">
            <div className="max-w-[1140px] m-auto">
              <div className="flex row justify-content-start">
                <div className="col-lg-12">
                  <div className="top-area px-[12px] md:px-[0px]">
                    <h1 className="uppercase text-white font-chakra text-[40px] md:text-[76px]">
                      GAMES
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
                            Games
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="cir-1 mb-0 absolute bottom-[6%] right-[2%] w-[50%] md:bottom-0 md:right-[0%] md:w-[auto]"
              src={bannerRight}
              alt="games banner right"
            />
          </div>
        </section>

        <section className="available-game-section bg-jb-black-400">
          <div className="overlay pt-[50px] pb-[50px] md:py-[100px]">
            <div className="container wow fadeInUp max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] px-4 mx-auto w-full">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-9 col-sm-8">
                  <div className="text-center section-header">
                    <h2 className="jb-section-title mb-[20px] text-center text-[30px] md:text-[57px]">
                      Available <span className="text-orange-400">games</span>
                    </h2>
                    <p className="text-lg font-normal text-center text-white">
                      To meet today&apos;s challenges & earn cryptocurrency
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-bar rounded-[58px] md:rounded-full bg-[#0E0E67] p-4 my-14">
                <div className="row">
                  <div className="col-lg-5 col-md-12">
                    <form action="#">
                      <div className="jb-rounded-input">
                        <img className="mb-0" src={searchIcon} alt="search" />
                        <input
                          type="text"
                          placeholder="What’s your game?"
                          className="w-full text-lg bg-transparent focus:outline-0 focus-visible:outline-0 py-[10px] px-[14px] rounded-[28px] border-none jb-elipsis text-white"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-7 col-md-12">
                    <ul
                      className="justify-center border-0 nav nav-tabs "
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          href="#featured"
                          role="tab"
                          aria-controls="featured"
                          aria-selected="true"
                          className="flex items-center mt-2 mb-2 text-white jb-btn-green md:mt-0 md:mb-0 md:mr-2"
                          id="featured-tab"
                          data-toggle="tab"
                        >
                          <img
                            src={featuredIcon}
                            alt="image"
                            className="mb-0 ml-1 bg-[#7400D3] rounded-[50%] p-[5px] mr-1"
                          />
                          Featured{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          id="instant-tab"
                          data-toggle="tab"
                          href="#instant"
                          role="tab"
                          aria-controls="instant"
                          aria-selected="false"
                          className="flex items-center mt-2 mb-2 text-white jb-btn-green md:mt-0 md:mb-0 md:mr-2"
                        >
                          <img
                            src={instantIcon}
                            alt="image"
                            className="mb-0 ml-1 bg-[#7400D3] rounded-[50%] p-[5px] mr-1"
                          />
                          Instant{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          id="tournaments-tab"
                          data-toggle="tab"
                          href="#tournaments"
                          role="tab"
                          aria-controls="tournaments"
                          aria-selected="false"
                          className="flex items-center mt-2 mb-2 text-white jb-btn-green md:mt-0 md:mb-0 md:mr-2"
                        >
                          <img
                            src={tournamentIcon}
                            alt="image"
                            className="mb-0 ml-1 bg-[#7400D3] rounded-[50%] p-[5px] mr-1"
                          />
                          Tournaments{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-content" id="myTabContentt">
                <div
                  className="tab-pane fade show active"
                  id="featured"
                  role="tabpanel"
                  aria-labelledby="featured-tab"
                >
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
                <div
                  className="tab-pane fade"
                  id="instant"
                  role="tabpanel"
                  aria-labelledby="instant-tab"
                >
                  <div className="row contained-area mb-30-none">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame2} alt="image" className="mx-auto" />
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
                      <a>
                        <img src={topGame1} alt="image" className="mx-auto" />
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
                  id="tournaments"
                  role="tabpanel"
                  aria-labelledby="tournaments-tab"
                >
                  <div className="row contained-area mb-30-none">
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
            </div>
          </div>
        </section>

        {/* Todays winner In start */}
        <section id="todays-winner-section" className="bg-black games">
          <div className="overlay py-[50px] md:py-[120px]">
            <div className="container wow fadeInUp">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="mb-[56px] text-center">
                    <h2 className="title jb-section-title mb-[20px] text-center">
                      Recent Big{" "}
                      <span className="text-orange-400">Winners</span>
                    </h2>
                    <p className="text-lg font-normal text-center text-white">
                      We update our site regularly; more and more winners are
                      added every day! To locate the most recent winner&apos;s
                      information
                    </p>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-5 col-md-4">
                  <div className="jb-jackpot-winner-card text-center mb-[30px] md:mb-[0]">
                    <h5 className="mb-3 text-2xl text-white uppercase font-chakra">
                      Jackpot Winner
                    </h5>
                    <div className="mid-area">
                      <img src={tropy2} alt="image" className="mx-auto mb-0" />
                    </div>
                    <div className="relative inline-block mt-3">
                      <img
                        src={user4}
                        alt="image"
                        className="mx-auto rounded-[50%] mb-0"
                      />
                      <h5 className="text-white jb-jackpot-winner-btn font-chakra">
                        € 496
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-8">
                  <div className="right-side bg-[#480B96] rounded-[30px] pt-[50px] px-[0px] pb-[22px] md:pt-[30px] md:px-[39px]">
                    <div className="relative flex justify-center mb-5 title-area">
                      <img
                        src={ribbon}
                        alt="image"
                        className="mx-auto rounded-[50%] mb-0"
                      />
                      <h5 className="uppercase text-lg md:text-2xl font-chakra text-white mt-[3px] md:mt-[10px] absolute">
                        Recent Wins
                      </h5>
                    </div>
                    <div className="winner-chart">
                      <div className="bg-[#7818DD] px-[8px] py-[25px] rounded-[10px] mx-[15px] my-[10px] grid md:flex justify-center md:justify-between items-center">
                        <div className="grid items-center left-area md:flex">
                          <img
                            src={win1}
                            alt="image"
                            className="mx-auto rounded-[50%] mb-0"
                          />
                          <a className="name-area d-flex align-items-center">
                            <img
                              src={user1}
                              alt="image"
                              className="my-0 mx-[12px] bg-[#ff9900] w-10 h-10  rounded-[50%]"
                            />
                            <h6 className="text-sm text-white uppercase font-chakra">
                              Bessie Cooper
                            </h6>
                          </a>
                        </div>
                        <div className="flex items-center jb-jackpot-winner-amount">
                          <span className="uppercase text-sm font-chakra font-bold text-[#00FF6D]">
                            + 56.65994
                          </span>
                          <span className="uppercase text-sm font-chakra font-bold text-white mx-[5px]">
                            ETH
                          </span>
                          <span>
                            <img
                              src={doubleAltRight}
                              alt="image"
                              className="mx-auto rounded-[50%] mb-0"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#7818DD] px-[8px] py-[25px] rounded-[10px] mx-[15px] my-[10px] grid md:flex justify-center md:justify-between items-center">
                        <div className="grid items-center left-area md:flex">
                          <img
                            src={win2}
                            alt="image"
                            className="mx-auto rounded-[50%] mb-0"
                          />
                          <a className="name-area d-flex align-items-center">
                            <img
                              src={user2}
                              alt="image"
                              className="my-0 mx-[12px] bg-[#ff9900] w-10 h-10  rounded-[50%]"
                            />
                            <h6 className="text-sm text-white uppercase font-chakra">
                              Jerome Bell
                            </h6>
                          </a>
                        </div>
                        <div className="flex items-center jb-jackpot-winner-amount">
                          <span className="uppercase text-sm font-chakra font-bold text-[#00FF6D]">
                            + 56.65994
                          </span>
                          <span className="uppercase text-sm font-chakra font-bold text-white mx-[5px]">
                            ETH
                          </span>
                          <span>
                            <img
                              src={doubleAltRight}
                              alt="image"
                              className="mx-auto rounded-[50%] mb-0"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#7818DD] px-[8px] py-[25px] rounded-[10px] mx-[15px] my-[10px] grid md:flex justify-center md:justify-between items-center">
                        <div className="grid items-center left-area md:flex">
                          <img
                            src={win3}
                            alt="image"
                            className="mx-auto rounded-[50%] mb-0"
                          />
                          <a className="name-area d-flex align-items-center">
                            <img
                              src={user3}
                              alt="image"
                              className="my-0 mx-[12px] bg-[#ff9900] w-10 h-10  rounded-[50%]"
                            />
                            <h6 className="text-sm text-white uppercase font-chakra">
                              Darrell Steward
                            </h6>
                          </a>
                        </div>
                        <div className="flex items-center jb-jackpot-winner-amount">
                          <span className="uppercase text-sm font-chakra font-bold text-[#00FF6D]">
                            + 56.65994
                          </span>
                          <span className="uppercase text-sm font-chakra font-bold text-white mx-[5px]">
                            ETH
                          </span>
                          <span>
                            <img
                              src={doubleAltRight}
                              alt="image"
                              className="mx-auto rounded-[50%] mb-0"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest activities */}
        <section className="relative z-10 block latest-activites-section jb-pseudo-before-latest-act">
          {/* <section className="relative block latest-activites-section"> */}
          <div className="ani-div opacity-30 relative !z-[-1]">
            <img
              className="obj-1 absolute mb-0 left-[13%] -top-[0px]"
              src={star}
              alt="image"
            />
            <img
              className="obj-2 absolute mb-0 right-[4%] top-[125px]"
              src={star}
              alt="image"
            />
            <img
              className="obj-3 absolute mb-0 left-[2%] top-[320px]"
              src={star2}
              alt="image"
            />
          </div>
          <div className="overlay pt-[50px] md:pt-[120px] block">
            <div className="container wow fadeInUp">
              <div className="row justify-content-between">
                <div className="col-lg-6 col-md-6">
                  <div className="section-header mb-[56px]">
                    <h2 className="title jb-section-title text-center md:text-[57px] md:!text-left mb-[20px] z-[3]">
                      Latest Activites
                    </h2>
                    <p className="md:text-lg font-normal text-white text-center md:!text-left">
                      Each time you reach a new level you&apos;ll get a reward
                    </p>
                  </div>
                </div>
                <div className="z-10 items-center justify-center col-lg-5 col-md-5 d-flex md:justify-end">
                  <ul
                    className="nav nav-tabs bg-jb-black-300 jb-tab-shadow uppercase border-none flex flex-wrap pl-0 mb-[30px] md:mb-0 list-none !rounded-[28px]"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item m-0 text-sm md:text-lg font-normal text-white leading-[25px]">
                      <a
                        className="nav-link active !bg-jb-green-200 font-black py-[10px] md:py-[15px] px-[30px] !rounded-[28px] text-white !border-jb-green-200"
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
                    <li className="nav-item m-0 text-sm md:text-lg font-normal text-white leading-[25px]">
                      <a
                        className="nav-link font-black py-[10px] md:py-[15px] text-white"
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

        <section id="level-up-section">
          <div className="overlay pt-[220px] pb-[100px] md:pt-[300px] md:pb-[120px] bg-[#4e4e4e]">
            <div className="container px-[15px] mx-auto">
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
                          <h2 className="jb-section-title mb-[20px] text-center md:!text-left text-[30px] md:text-[57px]">
                            LEVEL UP! GET REWARDS
                          </h2>
                          <p className="text-base font-normal text-white text-center md:!text-left">
                            Each time you reach a new level you&apos;ll get a
                            reward
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-4">
                            <div className="flex flex-col items-center single-item mb-7 md:mb-0">
                              <img
                                src={freespinsIcon}
                                alt="image"
                                className="mb-0"
                              />
                              <h6 className="mt-3 text-lg text-center text-white uppercase md:mt-7 font-chakra">
                                Freespins
                              </h6>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="flex flex-col items-center single-item mb-7 md:mb-0">
                              <img
                                src={bonusesIcon}
                                alt="image"
                                className="mb-0"
                              />
                              <h6 className="mt-3 text-lg text-center text-white uppercase md:mt-7 font-chakra">
                                BONUSES
                              </h6>
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="flex flex-col items-center single-item mb-7 md:mb-0">
                              <img
                                src={tournamentsIcon}
                                alt="image"
                                className="mb-0"
                              />
                              <h6 className="mt-3 text-lg text-center text-white uppercase md:mt-7 font-chakra">
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

        {/* <div
          className="hidden modal register fade"
          id="signUpModalReg"
          tabIndex={-1}
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
                  Not a member? <a >REGISTER</a>
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
                        <a >Not a member?</a>
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
                      <a >
                        <img src="images/twitter.png" alt="image" />
                      </a>
                      <a >
                        <img src="images/facebook.png" alt="image" />
                      </a>
                      <a >
                        <img src="images/linkedin.png" alt="image" />
                      </a>
                      <a >
                        <img src="images/google.png" alt="image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </GamingWrapper>
    </Layout>
  );
};

export default withLocation(Gaming);

const GamingWrapper = styled.div`
  && {
    margin: 0 auto;
  }
`;
