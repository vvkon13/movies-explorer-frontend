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
            <a
                href={card.trailerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card__link-trailer"
            >
                <img src={card.image} alt={`Фото ${card.nameRU}`} className="card__photo" />
            </a>
            <div className="card__description">
                <h2 className="card__name">{card.nameRU}</h2>
                <div className="card__duration-wrapper">
                    <p className="card__duration">
                        {`${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`}
                    </p>
                </div>
            </div>
            {!flagMovies && (
                <div className="card__deleted app__button" onClick={handleClick}></div>
            )}
            {!card.liked && flagMovies && (
                <div className="card__disliked-wrapper app__button" onClick={handleClick}>
                    <p className="card__disliked app__button">
                        Сохранить
                    </p>
                </div>
            )}
            {card.liked && flagMovies && (
                <div className="card__liked app__button" onClick={handleClick}></div>
            )}
        </div >
    );
};

export default MoviesCard;