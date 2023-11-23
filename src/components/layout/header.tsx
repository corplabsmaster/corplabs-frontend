import useBreakpoints from "@helpers/hooks/breakPoints";
import logo from "@images/corplabs-logo.svg";
import React from "react";

type WithThisUser<T = {}> = T & {
  children?: React.ReactNode;
  siteTitle: string;
  menuExpand: boolean;
  triggerMenu: Function;
  location: string;
};

type HeaderProps = WithThisUser<{}>;

const Header: React.FC<HeaderProps> = props => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const point = useBreakpoints();
  const breakMDBelow = point !== "md" && point !== "sm";

  return (
    <>
      <header className="text-white body-font bg-purple-100 font-interlight">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt="corplabs-logo" className="w-10 h-10" />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-purple-200 font-interlight">Home</a>
            <a className="mr-5 hover:text-purple-200 font-interlight">About</a>
            <a className="mr-5 hover:text-purple-200 font-interlight">
              Solution
            </a>
            <a className="mr-5 hover:text-purple-200 font-interlight">Career</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-interlight">
            Contact
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
