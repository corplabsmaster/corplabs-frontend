import React from "react";
import styled from "styled-components";
import SEO from "@components/common/seo";
import withLocation from "@helpers/hoc/withLocation";
import Layout from "@components/layout";
import bannerLeft from "@components/images/tour-left-banner.png";
import bannerRight from "@components/images/faq-banner.png";

const About = ({ location }: any) => {
  return (
    <Layout location={location.pathname}>
      <AboutWrapper>
        <SEO
          title="About"
          description="Jwin7 is an established international cricket betting platform that also provides online casino games. It offers a wide range of services from its own Jwin7 casino to the latest 2022 Fifa world cup news."
        />
        <section className="bg-[unset] bg-[length:100%_100%] pt-[140px] pb-[0px] md:pt-[202px] md:pb-[78px] relative bg-no-repeat">
          <div className="max-w-[1140px] m-auto">
            <div className="flex row justify-content-start">
              <div className="col-lg-12">
                <div className="top-area px-[12px] md:px-[0px] relative z-10">
                  <h1 className="uppercase text-white font-chakra text-[40px] md:text-[76px]">
                    FAQ
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
                          FAQ
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="cir-1 mb-0 absolute -left-[8%] top-[0%] w-[35%] md:left-0 md:top-[0%] md:w-[auto]"
              src={bannerLeft}
              alt="img"
            />
            <img
              className="cir-1 mb-0 absolute bottom-[6%] right-[2%] w-[50%] md:bottom-0 md:right-[0%] md:w-[auto]"
              src={bannerRight}
              alt="img"
            />
          </div>
        </section>

        <section
          id="faq-page"
          className="faq bg-[#4e4e4e] pt-[50px] pb-[120px] md:py-[120px]"
        >
          <div className="overlay">
            <div className="container wow fadeInUp">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <div className="text-center section-header md:mb-14">
                    <h2 className="jb-section-title mb-[20px] text-center text-[30px] md:text-[57px]">
                      frequently asked questions
                    </h2>
                    <p className="text-lg font-normal text-center text-white">
                      Play in multi-player tournaments or head to head for cash
                      prizes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center row">
                <div className="col-lg-8">
                  <ul
                    className="justify-center border-0 nav nav-tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="mx-2 my-2 nav-item md:my-0">
                      <a
                        className="nav-link jb-btn-purple-active py-[10px] px-[13px] md:py-[16px] md:px-[30px] active"
                        id="account-tab"
                        data-toggle="tab"
                        href="#account"
                        role="tab"
                        aria-controls="account"
                        aria-selected="true"
                      >
                        account
                      </a>
                    </li>
                    <li className="mx-2 my-2 nav-item md:my-0">
                      <a
                        className="nav-link jb-faq-btn py-[10px] px-[13px] md:py-[16px] md:px-[30px]"
                        id="deposits-tab"
                        data-toggle="tab"
                        href="#deposits"
                        role="tab"
                        aria-controls="deposits"
                        aria-selected="false"
                      >
                        deposits
                      </a>
                    </li>
                    <li className="mx-2 my-2 nav-item md:my-0">
                      <a
                        className="nav-link jb-faq-btn py-[10px] px-[13px] md:py-[16px] md:px-[30px]"
                        id="games-tab"
                        data-toggle="tab"
                        href="#games"
                        role="tab"
                        aria-controls="games"
                        aria-selected="false"
                      >
                        games
                      </a>
                    </li>
                    <li className="mx-2 my-2 nav-item md:my-0">
                      <a
                        className="nav-link jb-faq-btn py-[10px] px-[13px] md:py-[16px] md:px-[30px]"
                        id="security-tab"
                        data-toggle="tab"
                        href="#security"
                        role="tab"
                        aria-controls="security"
                        aria-selected="false"
                      >
                        security
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="account"
                      role="tabpanel"
                      aria-labelledby="account-tab"
                    >
                      <h4 className="my-[30px] md:my-[40px] text-white text-center uppercase text-[18px] md:text-[32px]">
                        My account
                      </h4>
                      <div id="accordion-one">
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="headingOne"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How do I create an Gainio account?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion-one"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="headingTwo"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Help! I&apos;ve forgotten my password!
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapseTwo"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion-one"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="headingThree"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                How do I add another currency to my account?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse"
                            aria-labelledby="headingThree"
                            data-parent="#accordion-one"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="headingFour"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                How do I switch from one currency to another?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapseFour"
                            className="collapse"
                            aria-labelledby="headingFour"
                            data-parent="#accordion-one"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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

                    <div
                      className="tab-pane fade"
                      id="deposits"
                      role="tabpanel"
                      aria-labelledby="deposits-tab"
                    >
                      <h4>Deposits & Withdrawals</h4>
                      <div id="accordion-two">
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading5"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra"
                                data-toggle="collapse"
                                data-target="#collapse5"
                                aria-expanded="true"
                                aria-controls="collapse5"
                              >
                                What currencies does Gainio accept?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse5"
                            className="collapse show"
                            aria-labelledby="heading5"
                            data-parent="#accordion-two"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading6"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse6"
                                aria-expanded="false"
                                aria-controls="collapse6"
                              >
                                How long till a deposit shows up on my account?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse6"
                            className="collapse"
                            aria-labelledby="heading6"
                            data-parent="#accordion-two"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading7"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse7"
                                aria-expanded="false"
                                aria-controls="collapse7"
                              >
                                Will I be charged any fees for making deposits
                                or withdrawals?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse7"
                            className="collapse"
                            aria-labelledby="heading7"
                            data-parent="#accordion-two"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading8"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse8"
                                aria-expanded="false"
                                aria-controls="collapse8"
                              >
                                I have made a deposit but the Bitcoins have not
                                been credited to my account. What should I do?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse8"
                            className="collapse"
                            aria-labelledby="heading8"
                            data-parent="#accordion-two"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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

                    <div
                      className="tab-pane fade"
                      id="games"
                      role="tabpanel"
                      aria-labelledby="games-tab"
                    >
                      <h4>Games</h4>

                      <div id="accordion-three">
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading9"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra"
                                data-toggle="collapse"
                                data-target="#collapse9"
                                aria-expanded="true"
                                aria-controls="collapse9"
                              >
                                Are Gainio&apos;s games fair?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse9"
                            className="collapse show"
                            aria-labelledby="heading9"
                            data-parent="#accordion-three"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading10"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse10"
                                aria-expanded="false"
                                aria-controls="collapse10"
                              >
                                Can I play the casino games without spending any
                                money?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse10"
                            className="collapse"
                            aria-labelledby="heading10"
                            data-parent="#accordion-three"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading11"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse11"
                                aria-expanded="false"
                                aria-controls="collapse11"
                              >
                                What happens if the game I’m playing freezes in
                                the middle of a round?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse11"
                            className="collapse"
                            aria-labelledby="heading11"
                            data-parent="#accordion-three"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading12"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse12"
                                aria-expanded="false"
                                aria-controls="collapse12"
                              >
                                I can’t get the casino game to start when I
                                click the link. What should I do?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse12"
                            className="collapse"
                            aria-labelledby="heading12"
                            data-parent="#accordion-three"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading13"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse13"
                                aria-expanded="false"
                                aria-controls="collapse13"
                              >
                                Why do I have some unfinished games showing in
                                my Profile?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse13"
                            className="collapse"
                            aria-labelledby="heading13"
                            data-parent="#accordion-three"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                    <div
                      className="tab-pane fade"
                      id="security"
                      role="tabpanel"
                      aria-labelledby="security-tab"
                    >
                      <h4>Security</h4>
                      <div id="accordion-four">
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading14"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra"
                                data-toggle="collapse"
                                data-target="#collapse14"
                                aria-expanded="true"
                                aria-controls="collapse14"
                              >
                                Is all my information secure at Gainio?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse14"
                            className="collapse show"
                            aria-labelledby="heading14"
                            data-parent="#accordion-four"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading15"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse15"
                                aria-expanded="false"
                                aria-controls="collapse15"
                              >
                                Will I need to verify my account when I make a
                                deposit or withdrawal?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse15"
                            className="collapse"
                            aria-labelledby="heading15"
                            data-parent="#accordion-four"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading16"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse16"
                                aria-expanded="false"
                                aria-controls="collapse16"
                              >
                                How do I submit my documents?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse16"
                            className="collapse"
                            aria-labelledby="heading16"
                            data-parent="#accordion-four"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading17"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse17"
                                aria-expanded="false"
                                aria-controls="collapse17"
                              >
                                How long does it take before my documents are
                                approved?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse17"
                            className="collapse"
                            aria-labelledby="heading17"
                            data-parent="#accordion-four"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading18"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse18"
                                aria-expanded="false"
                                aria-controls="collapse18"
                              >
                                Can my documents be rejected?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse18"
                            className="collapse"
                            aria-labelledby="heading18"
                            data-parent="#accordion-four"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
                        <div className="card !mb-5 border-0">
                          <div
                            className="card-header !bg-[#f8931f]"
                            id="heading19"
                          >
                            <h6 className="mb-0">
                              <button
                                className="text-sm font-bold text-white no-underline btn btn-link md:text-lg font-chakra collapsed"
                                data-toggle="collapse"
                                data-target="#collapse19"
                                aria-expanded="false"
                                aria-controls="collapse19"
                              >
                                Where can I see the status of my documents?
                              </button>
                            </h6>
                          </div>
                          <div
                            id="collapse19"
                            className="collapse"
                            aria-labelledby="heading19"
                            data-parent="#accordion-four"
                          >
                            <div className="card-body bg-[#f57606] py-[15px] px-[30px] text-white text-sm md:text-lg font-normal font-chakra">
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
