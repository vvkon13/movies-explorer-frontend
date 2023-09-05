import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies({handleClickAdd}) {
    return (
        <div className="movies app__movies">
            <SearchForm />
            <MoviesCardList handleClickAdd={handleClickAdd}/>
        </div>
    );
}

export default Movies;