import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import withThisUser from "@helpers/hoc/withThisUser";

// import logoWhiteImg from "@images/logos/logo.png";
import logoWhiteImg from "../images/logos/logo.png";

// import { menu, color } from "@helpers/const";
import { menu, color } from "../../helpers/const";

type Props = {
  menuExpand: boolean;
  triggerMenu?: (flag: boolean) => void;
};

const SideBar: React.FC<Props> = ({ menuExpand, triggerMenu, role }: Props) => {
  const [open] = React.useState(false);

  const toggleDrawer = () => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    triggerMenu(false);
  };

  const sideList = () => (
    <div role="presentation">
      <Logo>
        <img
          style={{
            width: "auto",
            height: "40px",
            margin: "0 15px 0 0",
          }}
          alt={"lottie-logo"}
          src={logoWhiteImg}
        />
        LottieFiles
      </Logo>
      <List>
        {menu.map(({ text, Icon, url, view }: any, index: any) => {
          return view === role ? (
            <Link to={url} key={index} onClick={toggleDrawer()}>
              <MenuList>
                <ListItem button>
                  <Icon
                    style={{
                      fontSize: "20px",
                      marginRight: "25px",
                      color: color.navSideMenuText,
                    }}
                  />
                  <ListItemText primary={text} />
                </ListItem>
              </MenuList>
            </Link>
          ) : null;
        })}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding onClick={toggleDrawer()}></List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={menuExpand} onClose={toggleDrawer()}>
        {sideList()}
      </Drawer>
    </div>
  );
};

export default withThisUser(SideBar);

const Logo = styled.div`
  width: 100%;
  line-height: 64px;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 0.0075em;
  font-weight: 100;
  background-color: ${color.secondary};
  color: ${color.navTextColor};
  font-size: 1.25rem;
`;

const MenuList = styled.div`
  .MuiTypography-body1 {
    font-family: Roboto, -apple-system, system-ui, BlinkMacSystemFont,
      "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    letter-spacing: 0.0075em;
    font-size: 0.812rem;
    transition: all 0.3s ease;
    font-weight: 700;
    color: ${color.navSideMenuText};
  }
`;
