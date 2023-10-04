import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({
    handleSearchSavedFilms,
    handleChangeCneckboxSavedMovies,
    isCheckedShortFilmSavedMovies,
    handleClickAddSavedMovies,
    arrayIndexesCardsOnTableSavedMovies,
    arrayOfCardsSavedMovies,
    handleSavedMoviesStatusUpdate,
    handleGetAllSavedMovies,
}) {
    useEffect(() => {
        handleGetAllSavedMovies();
    }, []);
    return (
        <main className="saved-movies app__movies">
            <SearchForm
                onSubmitForm={handleSearchSavedFilms}
                onChangeCheckbox={handleChangeCneckboxSavedMovies}
                isCheckedShortFilmMovies={isCheckedShortFilmSavedMovies}
                initialRequestText=''
            />
            <MoviesCardList
                handleClickAdd={handleClickAddSavedMovies}
                arrayIndexesCardsOnTable={arrayIndexesCardsOnTableSavedMovies}
                arrayOfCards={arrayOfCardsSavedMovies}
                handleMovieStatusUpdate={handleSavedMoviesStatusUpdate}
            />
            <div className="saved-movies__footer"></div>
        </main>
    );
}

export default SavedMovies;

