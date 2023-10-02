import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, navigate } from "gatsby";
import { Anchor, Layout as AntLayout, Spin, Menu, Row, Col } from "antd";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import loader from "./loader.json";
import Header from "./header";
import Footer from "./footer";
import { sideMenu } from "@helpers/const";
import "@styles/global.styles.css";

const { Content } = AntLayout;

type LayoutProps = { children: any; showSideMenu: boolean; location: string };

const Layout: React.FC<LayoutProps> = ({
  children,
  showSideMenu = false,
  location,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [menuExpand, setMenuExpand] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <MainLoading
          spinning={isLoading}
          indicator={
            <Player
              autoplay
              loop
              src={loader}
              style={{ height: "300px", width: "300px" }}
            ></Player>
          }
        >
          <AntLayout className="overflow-hidden bg-jb-grey-1100">
            <Anchor className="p-0 bg-transparent">
              <Header
                siteTitle={data.site.siteMetadata.title}
                menuExpand={menuExpand}
                triggerMenu={(flag: boolean) => setMenuExpand(flag)}
                location={location}
              />
            </Anchor>
            <Content className="bg-jb-black-200 md:pb-20">
              {!showSideMenu ? (
                <main>{children}</main>
              ) : (
                <Row>
                  <Col xs={24} md={6} className="mt-[3.125rem]">
                    {showSideMenu && (
                      <AntMenu
                        onClick={({ item }) => {
                          navigate(item.props.url);
                        }}
                        className="m-auto mt-[16px]"
                        style={{ width: 180 }}
                        defaultSelectedKeys={[location]}
                        mode="inline"
                        items={sideMenu}
                      />
                    )}
                  </Col>
                  <Col xs={24} md={18} className="mt-[3.125rem]">
                    <main>{children}</main>
                  </Col>
                </Row>
              )}
            </Content>
            <Footer />
          </AntLayout>
        </MainLoading>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSideMenu: PropTypes.bool,
  location: PropTypes.string,
};

export default Layout;

const MainLoading = styled(Spin)`
  max-height: 98vh !important;

  .lf-player-container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -153px;
  }
`;

const AntMenu = styled(Menu)`
  color: red;
  .ant-menu-item {
    background: white !important;
    span {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .ant-menu-item-selected {
    background: #ffa200 !important;
    span {
      color: white;
    }
  }
`;
