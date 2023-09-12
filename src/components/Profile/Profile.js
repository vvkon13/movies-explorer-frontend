import React from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';


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
                .min(2, 'Еще чуть чуть, Имя должно быть не меньше двух символов')
                .max(30, 'У Вас Имя больше 30 символов придумайте НИК поменьше')
                .matches(/^[а-яёА-ЯЁa-zA-Z\s-]+$/, 'Имя должно содержать только латиницу, кириллицу, пробел или дефис')
                .required('Забыли заполнить!'),
            userEmail: Yup.string()
                .email('Нужна электронная почта, а не почта России!!!')
                .required('Забыли заполнить!'),
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
                                (currentUser.email === formik.values.userEmail))}
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