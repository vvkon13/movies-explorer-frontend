import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies({handleClickAdd}) {
    
    return (
        <main className="movies app__movies">
            <SearchForm />
            <MoviesCardList handleClickAdd={handleClickAdd}/>
        </main>
    );
}

export default Movies;