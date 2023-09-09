import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
    return (
        <main className="saved-movies app__movies">
            <SearchForm />
            <MoviesCardList />
            <div className="saved-movies__footer"></div>
        </main>
    );
}

export default SavedMovies;

