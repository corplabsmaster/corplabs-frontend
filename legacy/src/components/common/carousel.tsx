import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeCarousel: React.FC<HomeCarouselProps> = ({
  homeCarousels,
}: HomeCarouselProps) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        1670: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1030: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        693: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
    >
      {homeCarousels?.map(({ img }, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={img} className="m-auto" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

type GameCarouselProps = {
  gameCarousels: [
    {
      title: string;
      name: string;
      desc: string;
      img: string;
    }
  ];
};

export const GameCarousel: React.FC<GameCarouselProps> = ({
  gameCarousels,
}: GameCarouselProps) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        1400: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1030: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
    >
      {gameCarousels?.map(({ title, name, desc, img }, index) => {
        return (
          <SwiperSlide key={index}>
            <civ className="col">
              <div className="bg-[#2a2a2a] rounded-[20px] p-[30px] mx-[15px] flex flex-col items-center text-center">
                <div className="star">
                  <i className="fas fa-star text-[#FFC107] text-[16px]"></i>
                  <i className="fas fa-star text-[#FFC107] text-[16px]"></i>
                  <i className="fas fa-star text-[#FFC107] text-[16px]"></i>
                  <i className="fas fa-star text-[#FFC107] text-[16px]"></i>
                  <i className="fas fa-star text-[#FFC107] text-[16px]"></i>
                </div>
                <a>
                  <h5 className="text-white font-chakra text-[24px] mt-[25px] mb-[15px]">
                    {title}
                  </h5>
                </a>
                <p className="text-white font-chakra text-[18px] leading-[23px]">
                  {desc}
                </p>
                <div className="profile">
                  <img
                    src={img}
                    alt="image"
                    className="mx-auto mt-[35px] mb-[20px] bg-[#ff9900] w-16 h-16 rounded-[50%]"
                  />
                  <a>
                    <h6 className="text-white uppercase font-chakra text-[18px]">
                      {name}
                    </h6>
                  </a>
                </div>
              </div>
            </civ>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

type Home3CarouselProps = {
  home3Carousels: [
    {
      img: string;
      amount: string;
    }
  ];
};

export const Home3Carousel: React.FC<Home3CarouselProps> = ({
  home3Carousels,
}: Home3CarouselProps) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={2} loop={true}>
      {home3Carousels?.map(({ img, amount }, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative single-item">
              <h6 className="absolute top-[20px] left-[35px] px-[30px] bg-[#ffd800] rounded-[10px] uppercase text-white text-[16px] leading-[38px] font-chakra">
                {amount}
              </h6>
              <a>
                <img src={img} alt="image" />
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

type TournamentDetailsCarouselProps = {
  tournamentDetailsCarousels: [
    {
      img: string;
    }
  ];
};

export const TournamentDetailsCarousel: React.FC<
  TournamentDetailsCarouselProps
> = ({ tournamentDetailsCarousels }: TournamentDetailsCarouselProps) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      breakpoints={{
        1030: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {tournamentDetailsCarousels?.map(({ img }, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={img} className="m-auto" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
