import { useStore } from "../../store/useStore";

import "./index.scss";

export const Button = () => {
  const openModal = useStore((state) => state.openModal);
  return (
    <button className="btn btn-signup mobile-signup" onClick={openModal}>
      je m'inscris
    </button>
  );
};
