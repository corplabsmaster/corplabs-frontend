import React from "react";
import { Link } from "gatsby";

const whiteColor = "#fff";
const blueGrey = "#F7F9FB";
export const color = {
  primary: "#003E6F",
  secondary: "#000000",
  tertiary: "#fff3ab",
  navMenu: whiteColor,
  navSideMenuText: "#9a9fbf",
  containerBackground: whiteColor,
  navTextColor: whiteColor,
  communityTimeStamp: "#ccc",
  communityStar: "rgba(0, 0, 0, 0.45)",
  primaryTransparentColor: "rgba(77, 105, 136, 0.95)",
  newletterCard: "#F4F4F4",
  whiteColor,
  footerBack: blueGrey,
  loginBack: blueGrey,
  cartCardBack: blueGrey,
  blackColor100: "#282828",
};

export const font = {
  primary: '"Roboto", "Helvetica", "Arial", sans-serif',
};

export const messages = {
  errors: {
    login: "ID or password mismatch",
    network: "Network Error",
  },
  success: {
    addCart: "Succesfully Added to Cart!",
    addWishlist: "Succesfully Added to Wishlist!",
  },
  others: {
    adding: "Adding..",
  },
};

export const PREFIXED_URI = "";

export const authSelection = {
  login: "login",
  signup: "signup",
};

export const providers = {
  google: "google",
  facebook: "facebook",
};

export const providersQuery = {
  google: "id_token",
  facebook: "access_token",
};

export const paths = {
  about: `/about`,
  faq: `/faq`,
  home: `/home`,
  home2: `/index-2`,
  gaming: `/gaming`,
  gaming2: `/gaming-2`,
  index2: `/index-2`,
  index3: `/index-3`,
  tournamentDetails: `/tournament-details`,
  tournaments: `/tournaments`,
  winners: `/winners`,
};

export const URLS = {
  home: `/`,
  home2: `${PREFIXED_URI}${paths.index2}`,
  home3: `${PREFIXED_URI}${paths.index3}`,
  about: `${PREFIXED_URI}${paths.about}`,
  faq: `${PREFIXED_URI}${paths.faq}`,
  gaming: `${PREFIXED_URI}${paths.gaming}`,
  gaming2: `${PREFIXED_URI}${paths.gaming2}`,
  index2: `${PREFIXED_URI}${paths.index2}`,
  index3: `${PREFIXED_URI}${paths.index3}`,
  tournamentDetails: `${PREFIXED_URI}${paths.tournamentDetails}`,
  tournaments: `${PREFIXED_URI}${paths.tournaments}`,
  winners: `${PREFIXED_URI}${paths.winners}`,
};

export const menu: Array<any> = [
  { text: "Casino", url: paths.gaming },
  { text: "Slot", url: paths.slot },
  { text: "Table", url: paths.table },
  {
    text: "Lottery",
    url: "https://jwin7.live/guest/viewGame?t=sport&v=Saba&act=161",
    external: true,
  },
  { text: "Fishing", url: paths.fishing },
  { text: "Promotions", url: paths.promotion },
];

export const sideMenu: Array<any> = [
  { label: "About us", url: paths.about, key: paths.about },
  { label: "Privacy Policy", url: paths.privacy, key: paths.privacy },
  { label: "Term and Conditions", url: paths.term, key: paths.term },
  {
    label: "Responsible Gaming",
    url: paths.responsible,
    key: paths.responsible,
  },
  { label: "18+", url: paths.eighteen, key: paths.eighteen },
];

export const keywords = {
  logo: ``,
};

// export const headerHomeMenu = [
//   {
//     key: "0",
//     label: (
//       <Link
//         className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase "
//         to="/index-2"
//       >
//         HOME 1
//       </Link>
//     ),
//   },
//   {
//     key: "1",
//     label: (
//       <Link
//         className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
//         to="/index-3"
//       >
//         HOME 2
//       </Link>
//     ),
//   },
// ];

export const headerHomeMenu = [
  {
    key: "0",
    label: (
      <Link
        to={URLS.home}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        HOME
      </Link>
    ),
  },
  {
    key: "1",
    label: (
      <Link
        to={URLS.home2}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        HOME 2
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to={URLS.home3}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        HOME 3
      </Link>
    ),
  },
];

export const headerGameMenu = [
  {
    key: "1",
    label: (
      <Link
        to={URLS.gaming}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        GAMES 1
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to={URLS.gaming2}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        GAMES 2
      </Link>
    ),
  },
  // {
  //   key: "1",
  //   label: (
  //     <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
  //       SPORTS
  //     </Link>
  //   ),
  // },
  // {
  //   key: "2",
  //   label: (
  //     <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
  //       SLOT
  //     </Link>
  //   ),
  // },
  // {
  //   key: "3",
  //   label: (
  //     <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
  //       TABLE
  //     </Link>
  //   ),
  // },
  // {
  //   key: "4",
  //   label: (
  //     <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
  //       FISHING
  //     </Link>
  //   ),
  // },
  // {
  //   key: "5",
  //   label: (
  //     <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
  //       CASINO
  //     </Link>
  //   ),
  // },
  // {
  //   key: "6",
  //   label: (
  //     <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
  //       LOTTERY
  //     </Link>
  //   ),
  // },
];
export const headerTourMenu = [
  {
    key: "1",
    label: (
      <Link
        to={URLS.tournaments}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        TOURNAMENTS
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to={URLS.tournamentDetails}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase "
      >
        TOURNAMENTS DETAILS
      </Link>
    ),
  },
];
export const headerPagesMenu = [
  {
    key: "1",
    label: (
      <Link
        to={URLS.about}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        ABOUT US
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to={URLS.winners}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        WINNERS
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        to={URLS.faq}
        className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase"
      >
        FAQ
      </Link>
    ),
  },
];
export const headerLangMenu = [
  {
    key: "1",
    label: (
      <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
        EN
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
        BN
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
        ES
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link className="py-[15px] px-[20px] text-white font-bold text-lg hover:text-jb-orange-400 uppercase">
        NL
      </Link>
    ),
  },
];

import game1 from "@components/images/game-1.png";
import game2 from "@components/images/game-2.png";
import game3 from "@components/images/game-3.png";
import game4 from "@components/images/game-4.png";
import game5 from "@components/images/game-5.png";
import game6 from "@components/images/game-6.png";
import game7 from "@components/images/game-7.png";
import jackpotImg1 from "@components/images/jackpot-img-1.png";
import jackpotImg2 from "@components/images/jackpot-img-2.png";
import tournamentsGames1 from "@components/images/tournaments-games-1.png";
import tournamentsGames2 from "@components/images/tournaments-games-2.png";
import tournamentsGames3 from "@components/images/tournaments-games-3.png";
import tournamentsGames4 from "@components/images/tournaments-games-4.png";

export const homeCarousels = [
  { img: game1 },
  { img: game2 },
  { img: game3 },
  { img: game4 },
  { img: game5 },
  { img: game6 },
  { img: game7 },
];

export const home3Carousels = [
  { img: jackpotImg1, amount: "€3,601,509.79" },
  { img: jackpotImg2, amount: "€3,601,509.79" },
  { img: jackpotImg1, amount: "€3,601,509.79" },
];

export const tournamentDetailsCarousels = [
  { img: tournamentsGames1 },
  { img: tournamentsGames2 },
  { img: tournamentsGames3 },
  { img: tournamentsGames4 },
  { img: tournamentsGames1 },
];

export const settings = {
  autoPlay: true,
  // infinite: true,
};

import testimo1 from "@components/images/testimo-1.png";
import testimo2 from "@components/images/testimo-2.png";
import testimo3 from "@components/images/testimo-3.png";

export const gameCarousels = [
  {
    title: "Amazing Support!",
    name: "Tom Powell",
    desc: "My VIP host is awesome - there’s no problem she can’t handle. And she always replies super fast!",
    img: testimo1,
  },
  {
    title: "Amazing Support!",
    name: "Tom Powell",
    desc: "My VIP host is awesome - there’s no problem she can’t handle. And she always replies super fast!",
    img: testimo2,
  },
  {
    title: "Amazing Support!",
    name: "Tom Powell",
    desc: "My VIP host is awesome - there’s no problem she can’t handle. And she always replies super fast!",
    img: testimo3,
  },
  {
    title: "Amazing Support!",
    name: "Tom Powell",
    desc: "My VIP host is awesome - there’s no problem she can’t handle. And she always replies super fast!",
    img: testimo2,
  },
  {
    title: "Amazing Support!",
    name: "Tom Powell",
    desc: "My VIP host is awesome - there’s no problem she can’t handle. And she always replies super fast!",
    img: testimo1,
  },
  {
    title: "Amazing Support!",
    name: "Tom Powell",
    desc: "My VIP host is awesome - there’s no problem she can’t handle. And she always replies super fast!",
    img: testimo3,
  },
];
