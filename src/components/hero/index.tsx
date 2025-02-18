import { useStore } from "../../store/useStore";
import backgroundImage from "../../assets/img/background.jpg";

export const Hero = () => {
  const openModal = useStore((state) => state.openModal);

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
        <button className="btn btn-signup" onClick={openModal}>
          je m'inscris
        </button>
      </div>
      <div className="hero-img">
        <img src={backgroundImage} alt="Gaming event" />
      </div>
      <button className="btn btn-signup mobile-signup" onClick={openModal}>
        je m'inscris
      </button>
    </div>
  );
};
