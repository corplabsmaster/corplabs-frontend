import "@lottiefiles/lottie-player";
import "@styles/global.styles.css";
import React from "react";

interface LayoutProps {
  children: React.ReactNode; // This line is important for handling children
  location: string;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  // Your Layout component logic here
  return (
    <div>
      {/* Your Layout component JSX */}
      {children}
    </div>
  );
};

export default Layout;
