import React from "react";
import LogoPreloader from "../LogoPreloader/LogoPreloader";
import "./SignInUp.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignInUp({ formName, title, buttonSubmitText, onSignInUp }) {
    let isRegistration = false;
    if (formName === 'register') { isRegistration = true };

    const formik = useFormik({
        validateOnMount: true,
        validateOnChange: true,
        initialValues: {
            userName: '',
            userPassword: '',
            userEmail: '',
        },
        validationSchema: Yup.object({
            userName: isRegistration && Yup.string()
                .min(2, 'Еще чуть чуть, Имя должно быть не меньше двух символов')
                .max(30, 'У Вас Имя больше 30 символов придумайте НИК поменьше')
                .matches(/^[а-яёА-ЯЁa-zA-Z\s-]+$/, 'Имя должно содержать только латиницу, кириллицу, пробел или дефис')
                .required('Забыли заполнить!'),
            userEmail: Yup.string()
                .email('Нужна электронная почта, а не почта России!!!')
                .required('Забыли заполнить!'),
            userPassword: Yup.string()
                .min(5, 'Пароль не менее 5 символов')
                .max(20, 'Уже достаточно!!! Не более 20 символов')
                .required('Забыли заполнить!'),

        }),
        onSubmit: values => {
            onSignInUp({
                password: values.userPassword,
                email: values.userEmail,
                name: values.userName,
            });
        }
    });

    return (
        <section className="sign-in-up" >
            <div className="sign-in-up__header-logo">
                <LogoPreloader />
            </div>
            <h1 className="sign-in-up__header-title">{title}</h1>
            <form name={formName} onSubmit={formik.handleSubmit} className="sign-in-up__form">
                <div className="sign-in-up__inputs">
                    {isRegistration && (
                        <label className="sign-in-up__label">Имя
                            <input
                                type="text"
                                placeholder="Имя"
                                className="sign-in-up__input app__input"
                                id="userName"
                                name="userName"
                                minLength="2"
                                maxLength="30"
                                value={formik.values.userName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            {formik.touched.userName && formik.errors.userName ? (
                                <div className="sign-in-up__input-error">
                                    {formik.errors.userName}
                                </div>
                            ) : null}
                        </label>
                    )}

                    <label className="sign-in-up__label">E-mail
                        <input
                            type="email"
                            placeholder="Email"
                            className="sign-in-up__input app__input"
                            id="userEmail"
                            name="userEmail"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.userEmail}
                            required
                        />
                        {formik.touched.userEmail && formik.errors.userEmail ? (
                            <div className="sign-in-up__input-error">
                                {formik.errors.userEmail}
                            </div>
                        ) : null}
                    </label>
                    <label className="sign-in-up__label">Пароль
                        <input
                            type="password"
                            placeholder="Пароль"
                            className="sign-in-up__input sign-in-up__input_password"
                            id="userPassword"
                            name="userPassword"
                            minLength="5"
                            maxLength="20"
                            value={formik.values.userPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.userPassword && formik.errors.userPassword ? (
                            <div className="sign-in-up__input-error">
                                {formik.errors.userPassword}
                            </div>
                        ) : null}
                    </label>
                </div>
                <button
                    className="sign-in-up__button-submit app__button"
                    disabled={!formik.isValid}
                    type="submit" >{buttonSubmitText}</button>
            </form>
        </section >
    )
}

export default SignInUp;
