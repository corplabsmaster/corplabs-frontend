import React from "react";
import { Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { DrowIcon } from "@components/common/drowIcon";
import { Link } from "gatsby";
import logo from "@images/logo.png";
import langIcon from "@images/lang.png";
import useBreakpoints from "@helpers/hooks/breakPoints";
import {
  headerGameMenu,
  headerTourMenu,
  headerPagesMenu,
  headerLangMenu,
  headerHomeMenu,
  paths,
} from "@helpers/const";

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
      {breakMDBelow ? (
        <>
          <div className="w-full bg-jb-black-200 z-100">
            <div
              className="relative flex justify-between h-full px-2 m-auto text-lg font-bold text-white border-b border-black z-100"
              style={{ zIndex: 100 }}
            >
              <div className="inline-flex items-center ">
                <Link to="/index-2">
                  <img src={logo} className="w-[116px] h-[32px] mb-0 mr-8" />
                </Link>
              </div>
              <div className="inline-flex items-center py-6">
                <button className="jb-btn-green mr-[10px]">REGISTER</button>
                <button className="jb-btn-red">SIGN IN</button>
              </div>
            </div>
          </div>
          <div className="w-full py-2 bg-jb-black-200 z-100">
            <div
              className="relative flex justify-center h-full px-2 m-auto text-lg font-bold text-white z-100"
              style={{ zIndex: 100 }}
            >
              <div className="inline-flex items-center ">
                <Link
                  to="/"
                  className="mr-10 cursor-pointer hover:text-jb-orange-400"
                >
                  HOME
                </Link>
                {/* <div className="relative mr-10 cursor-pointer hover:text-jb-orange-400">
                <Dropdown
                  overlay={
                    <Menu
                      className="w-[230px] bg-black mt-10 hover:bg-black"
                      theme="dark"
                      items={headerHomeMenu}
                    />
                  }
                  placement="bottomLeft"
                >
                  <span className="mr-2">HOME</span>
                </Dropdown>
                <DrowIcon />
              </div> */}
                <Link
                  to="/cricket-betting"
                  className="mr-10 cursor-pointer hover:text-jb-orange-400"
                >
                  SPORTS BETTING
                </Link>
                <Link
                  to="/online-betting"
                  className="mr-10 cursor-pointer hover:text-jb-orange-400"
                >
                  LIVE CASINO
                </Link>
                <Link
                  to="/live-casino"
                  className="mr-10 cursor-pointer hover:text-jb-orange-400"
                >
                  CRICKET BETTING
                </Link>
                <Link
                  to="/sports-betting"
                  className="mr-10 cursor-pointer hover:text-jb-orange-400"
                >
                  ONLINE CASINO
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-[62px] bg-black flex justify-between p-4">
          <div className="inline-flex items-center ">
            <img src={logo} className="w-[116px] h-[32px] mb-0 mr-8" />
          </div>
          <div className="inline-flex items-center ">
            <MenuOutlined className="text-xl text-white" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
