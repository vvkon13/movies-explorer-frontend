import React, { useState } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ card, cardLikedStatus }) {
    const [isLiked, setIsLiked] = useState(cardLikedStatus);
    function handleClick() {
        setIsLiked(!isLiked);
    };
    let flagMovies = false;
    let location = useLocation();
    if (location.pathname === "/movies") { flagMovies = true; }

    return (
        <div className="card">
            <img src={` https://api.nomoreparties.co${card.image.url}`} alt={`Фото ${card.nameRU}`} className="card__photo" onClick={handleClick} />
            <div className="card__description">
                <h2 className="card__name">{card.nameRU}</h2>
                <div className="card__duration-wrapper">
                    <p className="card__duration">
                        {`${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`}
                    </p>
                </div>
            </div>
            {!flagMovies && isLiked && (
                <div className="card__deleted"></div>
            )}
            {!isLiked && flagMovies && (
                <div className="card__disliked-wrapper">
                    <p className="card__disliked">
                        Сохранить
                    </p>
                </div>
            )}
            {isLiked && flagMovies && (
                <div className="card__liked"></div>
            )}
        </div >
    );
};

export default MoviesCard;