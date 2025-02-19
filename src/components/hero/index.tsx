import backgroundImage from "../../assets/img/background.jpg";
import { Button } from "../button";

import "./index.scss";

export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-headline">
          Marathon national
          <br />
          de jeux vidéos
        </h1>
        <p className="hero-text">
          Vous aimez jouer ? Notre prochain évènement gaming est ouvert aux
          réservations... Places limitées !
        </p>
        <Button />
      </div>
      <div className="hero-img">
        <img src={backgroundImage} alt="Gaming event" />
      </div>
      <Button />
    </div>
  );
};
