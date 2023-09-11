import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ card, handleMovieStatusUpdate }) {
    function handleClick() {
        handleMovieStatusUpdate(card);
    };

    let flagMovies = false;
    let location = useLocation();
    if (location.pathname === "/movies") { flagMovies = true; }

    return (
        <div className="card">
            <img src={card.image} alt={`Фото ${card.nameRU}`} className="card__photo" onClick={handleClick} />
            <div className="card__description">
                <h2 className="card__name">{card.nameRU}</h2>
                <div className="card__duration-wrapper">
                    <p className="card__duration">
                        {`${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`}
                    </p>
                </div>
            </div>
            {!flagMovies && card.liked && (
                <div className="card__deleted"></div>
            )}
            {!card.liked && flagMovies && (
                <div className="card__disliked-wrapper">
                    <p className="card__disliked">
                        Сохранить
                    </p>
                </div>
            )}
            {card.liked && flagMovies && (
                <div className="card__liked"></div>
            )}
        </div >
    );
};

export default MoviesCard;