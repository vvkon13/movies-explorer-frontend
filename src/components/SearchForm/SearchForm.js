import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
    return (
        <section className="search-form">
            <form name="search-form" className="search-form__form">
                <div className="search-form__flexbox">
                    <input
                        type="text"
                        placeholder="Фильм"
                        className="search-form__input app__input"
                        name="search-form-input"
                        id="search-form-input"
                        minLength="2"
                        maxLength="100"
                        required />
                    <button className="search-form__button-submit app__button" type="submit" />
                </div>
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;