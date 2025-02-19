import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

import "./index.scss";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topnav">
      <div className="topnav-header-logo">
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
      </div>
      <div className={`topnav-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="active">
          <span>Détails de l'évènement</span>
        </Link>
        <Link to="/about">
          <span>À propos</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
        <Link to="/events">
          <span>Évènements passés</span>
        </Link>
      </div>
      <button className="icon" onClick={toggleNav}>
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
};
