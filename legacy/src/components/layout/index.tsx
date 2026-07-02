// import "@lottiefiles/lottie-player";
import "@styles/global.styles.css";
import React, { useEffect } from "react";
import ReactGA from "react-ga";

interface LayoutProps {
  children: React.ReactNode;
  location: string;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  useEffect(() => {
    ReactGA.initialize("G-PZQP9RS8ZB"); // Initialize GA with your GA tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search); // Track pageview
  }, [location]);

  return <div>{children}</div>;
};

export default Layout;
