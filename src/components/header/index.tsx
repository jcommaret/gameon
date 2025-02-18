import { useState } from "react";
import logo from "../../assets/img/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topnav">
      <div className="topnav-header-logo">
        <img alt="logo" src={logo} />
      </div>
      <div className={`topnav-menu ${isMenuOpen ? "open" : ""}`}>
        <a href="#" className="active">
          <span>Détails de l'évènement</span>
        </a>
        <a href="#">
          <span>À propos</span>
        </a>
        <a href="#">
          <span>Contact</span>
        </a>
        <a href="#">
          <span>Évènements passés</span>
        </a>
      </div>
      <a href="#" className="icon" onClick={toggleNav}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};
