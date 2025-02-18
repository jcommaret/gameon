import { useStore } from "../../store/useStore";
import { Form } from "../form";

export const Modal = () => {
  const { isModalOpen, isSubmitted, closeModal } = useStore();

  if (!isModalOpen) return null;

  return (
    <div className={`modal ${isModalOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="btn-close" onClick={closeModal}></span>
        <div className="modal-body">
          {!isSubmitted ? (
            <Form />
          ) : (
            <div id="thanks" className="center-flex">
              <div className="thanks-modal">
                <p>Merci pour votre inscription</p>
                <button className="btn btn-submit" onClick={closeModal}>
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
