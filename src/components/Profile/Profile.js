import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";
import "./Profile.css";

function Profile({ handleChangeProfile, handleExitProfile }) {
    const { isLoading } = useContext(AppContext);
    const { currentUser } = useContext(CurrentUserContext);
    const { values, setValues, handleChange } = useForm();

    useEffect(() => {
        setValues({
            ...values,
            userName: currentUser.name,
            userEmail: currentUser.email,
        })
    }, [currentUser]);

    function handleSubmit(evt) {
        evt.preventDefault();
        handleChangeProfile({
            name: values.userName,
            email: values.userEmail
        })
    }

    return (
        <section className="profile">
            <h2 className="profile__title">{`Привет, ${(currentUser.name==='')?'бро':currentUser.name}!`}</h2>
            <form name="profile" onSubmit={handleSubmit} className="profile__form">
                <div className="profile__inputs">
                    <label className="profile__label profile__label_underlined">Имя
                        <input type="name" placeholder="Имя" className="profile__input"
                            name="userName" minLength="2" maxLength="30"
                            value={values.userName ?? ''} onChange={handleChange} required />
                    </label>
                    <label className="profile__label">E-mail
                        <input type="email" placeholder="Email" className="profile__input" name="userEmail"
                            minLength="7" maxLength="40" onChange={handleChange}
                            value={values.userEmail ?? ''} required />
                    </label>
                </div>
                <button className="profile__button-submit app__button" type="submit" >
                    {isLoading ? 'Запись...' : 'Редактировать'}
                </button>
            </form>
            <button className="profile__button-logoff app__button" type="button" onClick={handleExitProfile} >
                {isLoading ? 'Выход...' : 'Выйти из аккаунта'}
            </button>
        </section>
    )
}


export default Profile;