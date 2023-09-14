import React from "react";
import { useContext } from "react";
import LogoPreloader from "../LogoPreloader/LogoPreloader";
import "./SignInUp.css";
import { useFormik } from 'formik';
import { AppContext } from "../../contexts/AppContext";
import * as Yup from 'yup';
import {
    REG_EX_NAME,
    ERROR_MESSAGE_NAME_MIN,
    ERROR_MESSAGE_NAME_MAX,
    ERROR_MESSAGE_REQUIRED,
    ERROR_MESSAGE_EMAIL,
    ERROR_MESSAGE_PASSWORD_MIN,
    ERROR_MESSAGE_PASSWORD_MAX,
    ERROR_MESSAGE_NAME_REG_EX,
} from "../../utils/constants";

function SignInUp({ formName, title, buttonSubmitText, onSignInUp }) {
    const { isLoading } = useContext(AppContext);

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
                .min(2, ERROR_MESSAGE_NAME_MIN)
                .max(30, ERROR_MESSAGE_NAME_MAX)
                .matches(REG_EX_NAME, ERROR_MESSAGE_NAME_REG_EX)
                .required(ERROR_MESSAGE_REQUIRED),
            userEmail: Yup.string()
                .email(ERROR_MESSAGE_EMAIL)
                .required(ERROR_MESSAGE_REQUIRED),
            userPassword: Yup.string()
                .min(5, ERROR_MESSAGE_PASSWORD_MIN)
                .max(20, ERROR_MESSAGE_PASSWORD_MAX)
                .required(ERROR_MESSAGE_REQUIRED),

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
                                disabled={isLoading}
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
                            disabled={isLoading}
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
                            className="sign-in-up__input sign-in-up__input_password app__input"
                            id="userPassword"
                            name="userPassword"
                            minLength="5"
                            maxLength="20"
                            value={formik.values.userPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={isLoading}
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
                    disabled={!formik.isValid || isLoading}
                    type="submit" >{buttonSubmitText}</button>
            </form>
        </section >
    )
}

export default SignInUp;
