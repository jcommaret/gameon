import { Outlet } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import "../../style/main.scss";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
