import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, navigate } from "gatsby";
import { Anchor, Layout as AntLayout, Spin, Menu, Row, Col } from "antd";
import styled from "styled-components";
import "@lottiefiles/lottie-player";
import { Player } from "@lottiefiles/lottie-player";
import loader from "./loader.json";
import Header from "./header";
import Footer from "./footer";
import { sideMenu } from "@helpers/const";
import "@styles/global.styles.css";




const Layout: React.FC= () => {
  const [isLoading, setLoading] = useState(true);
  const [menuExpand, setMenuExpand] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
      <>
   
      <Header />
      <Footer />

    
      </>
  );
};


export default Layout;


