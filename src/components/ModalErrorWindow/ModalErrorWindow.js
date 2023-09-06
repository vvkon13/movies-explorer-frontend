import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { AppContext } from "../../contexts/AppContext";
import "./ModalErrorWindow.css";

function ModalErrorWindow({ err, onClose }) {
    const { currentUser } = useContext(CurrentUserContext);
    const { isVisibleModalWindow } = useContext(AppContext);
    return  (
        <section
            className=
            {
                `invisible-hat ${isVisibleModalWindow && 'invisible-hat_removed'}`
            }>
            <div className="modal-window">
                <h2 className="modal-window__title">
                    {`Привет, ${(currentUser.name === '') ? 'бро' : currentUser.name}!`}
                </h2>
                <p className="modal-window__error">{err}</p>
                <button
                    className="modal-window__button app__button"
                    onClick={onClose} >Закрыть</button>
            </div>
        </section>
    )
}

export default ModalErrorWindow;