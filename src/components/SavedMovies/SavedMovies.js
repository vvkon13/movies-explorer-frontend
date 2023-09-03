import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
    return (
        <div className="saved-movies app__movies">
            <SearchForm />
            <MoviesCardList />
            <div className="saved-movies__footer"></div>
        </div>
    );
}

export default SavedMovies;

