import React from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    REG_EX_NAME,
    REG_EX_EMAIL,
    ERROR_MESSAGE_NAME_MIN,
    ERROR_MESSAGE_NAME_MAX,
    ERROR_MESSAGE_REQUIRED,
    ERROR_MESSAGE_EMAIL,
    ERROR_MESSAGE_NAME_REG_EX,
    ERROR_MESSAGE_EMAIL_REG_EX,
} from "../../utils/constants";


function Profile({ handleChangeProfile, handleExitProfile }) {
    const { isLoading } = useContext(AppContext);
    const { currentUser } = useContext(CurrentUserContext);

    const formik = useFormik({
        validateOnMount: true,
        validateOnChange: true,
        initialValues: {
            userName: currentUser.name,
            userEmail: currentUser.email,
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .min(2, ERROR_MESSAGE_NAME_MIN)
                .max(30, ERROR_MESSAGE_NAME_MAX)
                .matches(REG_EX_NAME, ERROR_MESSAGE_NAME_REG_EX)
                .required(ERROR_MESSAGE_REQUIRED),
            userEmail: Yup.string()
                .email(ERROR_MESSAGE_EMAIL)
                .matches(REG_EX_EMAIL, ERROR_MESSAGE_EMAIL_REG_EX)
                .required(ERROR_MESSAGE_REQUIRED),
        }),
        onSubmit: values => {
            handleChangeProfile({
                email: values.userEmail,
                name: values.userName,
            });
        }
    });

    return (
        <main className="profile">
            <section>
                <h1 className="profile__title">{`Привет, ${(currentUser.name === '') ? 'бро' : currentUser.name}!`}</h1>
                <form name="profile" onSubmit={formik.handleSubmit} className="profile__form">
                    <div className="profile__inputs">
                    {
                            formik.errors.userName ? (
                                <div className="profile__input-error profile__input-error_up">
                                    {formik.errors.userName}
                                </div>
                            ) : null}
                        <label className="profile__label profile__label_underlined">Имя
                            <input
                                type="text"
                                placeholder="Имя"
                                className="profile__input app__input"
                                id="userName"
                                name="userName"
                                minLength="2"
                                maxLength="30"
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                disabled={isLoading}
                                required
                            />

                        </label>
                        <label className="profile__label">E-mail
                            <input
                                type="email"
                                placeholder="Email"
                                className="profile__input app__input"
                                id="userEmail"
                                name="userEmail"
                                onChange={formik.handleChange}
                                value={formik.values.userEmail}
                                disabled={isLoading}
                                required
                            />
                        </label>
                        {
                        formik.errors.userEmail ? (
                            <div className="profile__input-error profile__input-error_down">
                                {formik.errors.userEmail}
                            </div>
                        ) : null}
                    </div>
                    <button
                        className="profile__button-submit app__button"
                        disabled={!formik.isValid ||
                            ((currentUser.name === formik.values.userName) &&
                                (currentUser.email === formik.values.userEmail))||isLoading}
                        type="submit" >
                        {isLoading ? 'Запись...' : 'Редактировать'}
                    </button>
                </form>
                <button className="profile__button-logoff app__button" type="button" onClick={handleExitProfile} >
                    Выйти из аккаунта
                </button>
            </section>
        </main>
    )
}


export default Profile;