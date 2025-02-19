import { Outlet } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import "./index.scss";
import "../../style/components/buttons.scss";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
