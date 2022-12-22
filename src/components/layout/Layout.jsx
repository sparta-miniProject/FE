import React from "react";
import Header from "../header/Header";
// import "./style.css";

const FooterStyles = {
  width: "100%",
  height: "100px",
  display: "flex",
  background: "burlywood",
  color: "#0a0327",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  textAlign: "center",
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "170vh",
  backgroundColor: "#0a0327",
  color: "burlywood",
};

const Footer = () => {
  return (
    <div style={{ ...FooterStyles }}>
      <span>copyright ©️ 10기 C반 7조 | BE || FE |</span>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
