import React from "react";
import "./MoviesCardAdd.css";

function MoviesCardAdd({onClick}) {
    return (
        <div className="movies-card-add">
            <button 
            className="movies-card-add__button app__button" 
            type="button"
            onClick={onClick} >Ещё</button>
        </div>
    );
}

export default MoviesCardAdd;