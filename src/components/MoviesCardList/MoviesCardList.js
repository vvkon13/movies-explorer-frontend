import React, { useContext } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { AppContext } from "../../contexts/AppContext";
import MoviesCardAdd from "../MoviesCardAdd/MoviesCardAdd";
import { useLocation } from "react-router-dom";

function MoviesCardList({handleClickAdd}) {
    const card = { nameRU: "33 слова о дизайне", duration: 77 };
    const getFilms = (quantity, flag) => {
        let content = [];
        for (let i = 0; i < quantity; i++) {
            content.push(<li key={i}><MoviesCard card={card} cardLikedStatus={!flag} /></li>);
        }
        return content;
    };
    const { isScreenSm, isScreenLg } = useContext(AppContext);
    let location = useLocation();
    let flagMovies = false;
    let quantityFilms = 3
    if (location.pathname === "/movies") {
        flagMovies = true;
        quantityFilms = 5 + (isScreenSm && 3) + (isScreenLg && 4);
    }
    return (
        <section className="movies-card-list">
            <ul className="card-list">{getFilms(quantityFilms, flagMovies)}</ul>
            {flagMovies && (<MoviesCardAdd onClick={handleClickAdd}/>)}
        </section>
    );
}

export default MoviesCardList


