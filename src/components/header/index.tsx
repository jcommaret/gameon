import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
        <NavLink to="/">
          <img alt="logo" src={logo} />
        </NavLink>
      </div>
      <div className={`topnav-menu ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/">
          <span>Détails de l'évènement</span>
        </NavLink>
        <NavLink to="/about">
          <span>À propos</span>
        </NavLink>
        <NavLink to="/contact">
          <span>Contact</span>
        </NavLink>
        <NavLink to="/events">
          <span>Évènements passés</span>
        </NavLink>
      </div>
      <button className="icon" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};
