import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardAdd from "../MoviesCardAdd/MoviesCardAdd";

function MoviesCardList({ handleClickAdd, arrayIndexesCardsOnTable, arrayOfCards, handleMovieStatusUpdate }) {
    const [flagAddMovies, setFlagAddMovies] = useState(false);

    useEffect(() => {
        setFlagAddMovies((arrayOfCards !== null) &&
            (arrayOfCards.length > 0) &&
            (arrayOfCards.length > arrayIndexesCardsOnTable[arrayIndexesCardsOnTable.length - 1] + 1));
    }, [arrayIndexesCardsOnTable, arrayOfCards])

    const getFilms = () => {
        let content = [];
        for (let i = 0; i < arrayIndexesCardsOnTable.length; i++) {
            console.log(`Hi это${i} обход цикла вот вам arrayIndexesCardsOnTable:`);
            console.log(arrayIndexesCardsOnTable);
            console.log(`Hi это${i} обход цикла вот вам arrayOfCards:`);
            console.log(arrayOfCards);
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
            <ul className="card-list">{getFilms()}</ul>
            {flagAddMovies && (<MoviesCardAdd
                onClick={handleClickAdd}
                flagAddMovies={flagAddMovies}
            />)}
        </section>
    );
}

export default MoviesCardList


