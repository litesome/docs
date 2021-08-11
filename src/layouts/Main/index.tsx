import React, { ReactNode } from "react";

import Header from "../../components/common/header";
import Sidebar from "../../components/common/sidebar";
import Footer from "../../components/common/footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <section>
        {/* <div className="container"> */}
        <div className="row">
          <div className="hide-sm l-md-2 l-lg-2">
            <Sidebar />
          </div>
          <div className="l-sm-12 l-md-8 l-lg-8">
            <div className="container-sm">{children}</div>
          </div>
        </div>
        {/* </div> */}
      </section>
      <Footer />
    </>
  );
};
export default Layout;
