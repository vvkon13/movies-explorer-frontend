import React, { useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies({
    handleClickAdd,
    handleSearchFilms,
    handleChangeCneckboxMovies,
    isCheckedShortFilmMovies,
    arrayIndexesCardsOnTableMovies,
    arrayOfCardsMovies,
    handleRequestDataRecovery
}) {
    const initialRequestText = localStorage.getItem('requestText') ?? '';
    useEffect(() => {
        if ((initialRequestText) && (arrayOfCardsMovies === null)) {
            handleRequestDataRecovery();
        }
    }, []);

    return (
        <main className="movies app__movies">
            <SearchForm
                onSubmitForm={handleSearchFilms}
                onChangeCheckbox={handleChangeCneckboxMovies}
                isCheckedShortFilmMovies={isCheckedShortFilmMovies}
                initialRequestText={initialRequestText}
            />
            <MoviesCardList
                handleClickAdd={handleClickAdd}
                arrayIndexesCardsOnTable={arrayIndexesCardsOnTableMovies}
                arrayOfCards={arrayOfCardsMovies}
            />
        </main>
    );
}

export default Movies;