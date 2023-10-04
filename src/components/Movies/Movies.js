import React, { useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { AppContext } from "../../contexts/AppContext";

function Movies({
    handleClickAdd,
    handleSearchFilms,
    handleChangeCneckboxMovies,
    isCheckedShortFilmMovies,
    arrayIndexesCardsOnTableMovies,
    arrayOfCardsMovies,
    handleRequestDataRecovery,
    handleMovieStatusUpdate,
    handleResizeWindowFromMiddleToLarge,
    handleResizeWindowFromLargeToMiddle
}) {
    const { isScreenXl } = useContext(AppContext);
    const initialRequestText = localStorage.getItem('requestText') ?? '';
    useEffect(() => {
        if ((initialRequestText) && (arrayOfCardsMovies === null)) {
            handleRequestDataRecovery();
        }
    }, []);

    useEffect(()=>{
        if (isScreenXl) {
            handleResizeWindowFromMiddleToLarge()}
            
        if (!isScreenXl) {
            handleResizeWindowFromLargeToMiddle()
        }   

    },[isScreenXl])



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
                handleMovieStatusUpdate={handleMovieStatusUpdate}
            />
        </main>
    );
}

export default Movies;