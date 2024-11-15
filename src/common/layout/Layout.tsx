import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./SideBar";
import "../../styles/layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="layout"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{ flexGrow: 1 }}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
