import React from "react";
import Header from "../../components/common/header";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <div className="hide-sm l-md-2 l-lg-2">
              <Sidebar />
            </div>
            <div className="l-sm-12 l-md-8 l-lg-8">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Layout;
