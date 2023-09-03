import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
    return (
        <form name="search-form" className="search-form">
            <div className="search-form__flexbox">
                <input
                    type="text"
                    placeholder="Фильм"
                    className="search-form__input"
                    name="search-form-input"
                    id="search-form-input"
                    minLength="2"
                    maxLength="100"
                    required />
                <button className="search-form__button-submit app__button" type="submit" />
            </div>
            <FilterCheckbox />
            <div className="search-form__border-bottom"></div>
        </form>
    );
}

export default SearchForm;