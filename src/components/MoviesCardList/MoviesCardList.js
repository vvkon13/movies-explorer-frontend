import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardAdd from "../MoviesCardAdd/MoviesCardAdd";

function MoviesCardList({ handleClickAdd, arrayIndexesCardsOnTable, arrayOfCards, handleMovieStatusUpdate }) {
    const [flagAddMovies, setFlagAddMovies] = useState(false);
    const [flagNothingFound, setflagNothingFound] = useState(false);

    useEffect(() => {
        if (arrayOfCards !== null) {
        setflagNothingFound(arrayIndexesCardsOnTable.length===0);
        setFlagAddMovies(!arrayIndexesCardsOnTable.completed);
        }    
    }, [arrayIndexesCardsOnTable, arrayOfCards])

    const getFilms = () => {
        let content = [];
        for (let i = 0; i < arrayIndexesCardsOnTable.length; i++) {
            let card = arrayOfCards[arrayIndexesCardsOnTable[i]];
            content.push(
                <li
                    key={card._id}>
                    <MoviesCard
                        card={card}
                        handleMovieStatusUpdate={handleMovieStatusUpdate}
                    />
                </li>);
        }
        return content;
    };

    return (
        <section className="movies-card-list">
            {!flagNothingFound &&(<ul className="card-list">{getFilms()}</ul>)}
            {flagNothingFound &&(<p className="page-not-found__text">Ничего не найдено</p>)}
            {flagAddMovies && (<MoviesCardAdd
                onClick={handleClickAdd}
                flagAddMovies={flagAddMovies}
            />)}
        </section>
    );
}

export default MoviesCardList


