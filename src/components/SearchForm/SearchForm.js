import React, { useEffect }  from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import useForm from "../../hooks/useForm";

function SearchForm({ onSubmitForm, onChangeCheckbox, isCheckedShortFilmMovies, initialRequestText }) {
    const { values, setValues, handleChange } = useForm();

    useEffect(() => {
        setValues({
            ...values,
            requestText: initialRequestText
        })
    },[])
    
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmitForm({
            requestText: values.requestText
        })
    }

    return (
        <section className="search-form">
            <form name="search-form" className="search-form__form" onSubmit={handleSubmit}>
                <div className="search-form__flexbox">
                    <input
                        type="text"
                        placeholder="Фильм"
                        className="search-form__input app__input"
                        name="requestText"
                        minLength="2"
                        maxLength="100"
                        value={values.requestText}
                        onChange={handleChange}
                        required />
                    <button
                        className="search-form__button-submit app__button"
                        type="submit"
                    />
                </div>
                <FilterCheckbox
                    handleChange={onChangeCheckbox}
                    isChecked={isCheckedShortFilmMovies} />
            </form>
        </section>
    );
}

export default SearchForm;