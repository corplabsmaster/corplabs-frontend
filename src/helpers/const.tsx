import React from "react";
import { Link } from "gatsby";

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
  
  home: `/home`,
  page1: `/page1`,
  
};

export const URLS = {
  home: `/`,
  home1: `${PREFIXED_URI}${paths.home}`,
  page1: `${PREFIXED_URI}${paths.page1}`,
  
};

export const menu: Array<any> = [
  { text: "item", url: paths.page1 },
  
  {
    text: "item1",
    url: "https://www.google.com",
    external: true,
  },
 
];

export const sideMenu: Array<any> = [
  { label: "About us", url: paths.page1, key: paths.about },
  { label: "Privacy Policy", url: paths.page1, key: paths.page1 },
  { label: "Term and Conditions", url: paths.page1, key: paths.page1 },
  {
    label: "lorem ipsum",
    url: paths.page1,
    key: paths.page1,
  },
  { label: "lorem", url: paths.page1, key: paths.page1 },
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
        to={URLS.page1}
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
        to={URLS.page1}
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
        to={URLS.page1}
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
        to={URLS.page1}
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

export const headerPagesMenu = [
  {
    key: "1",
    label: (
      <Link
        to={URLS.page1}
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
        to={URLS.page1}
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
        to={URLS.page1}
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

import blank1 from "@components/images/blank.png";

export const homeCarousels = [
  { img: blank1 },
  { img: blank1 },
  { img: blank1 },

];


export const settings = {
  autoPlay: true,
  // infinite: true,
};

import testimo1 from "@components/images/blank.png";
import testimo2 from "@components/images/blank.png";
import testimo3 from "@components/images/blank.png";

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
