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
      <div className="wrap-doc-layout">
        <div className="doc-sidebar">
          <Sidebar />
        </div>
        <div className="doc-content">
            <Header />
          <div className="container-sm py-lg">{children}</div>
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
