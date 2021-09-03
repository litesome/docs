import React, { ReactNode } from "react";

import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import "./Main.css";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="wrap-main-layout">
        <div className="container">
          <Header />
        </div>
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
