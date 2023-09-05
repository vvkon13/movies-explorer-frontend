import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import LogoPreloader from "../LogoPreloader/LogoPreloader";
import "./SignInUp.css";

function SignInUp({ formName, title, buttonSubmitText, onSignInUp }) {
    const { values, setValues, handleChange } = useForm();

    let isRegistration = false;
    if (formName === 'register') { isRegistration = true };

    useEffect(() => {
        setValues({
            ...values,
            userEmail: '',
            userPassword: '',
            userName: ''
        })
    }, []);

    function handleSubmit(evt) {
        evt.preventDefault();
        onSignInUp({
            password: values.userPassword,
            email: values.userEmail,
            name: values.userName,
        })
    }

    return (
        <section className="sign-in-up">
            <div className="sign-in-up__header-logo">
            <LogoPreloader />
            </div>
            <h2 className="sign-in-up__header-title">{title}</h2>
            <form name={formName} onSubmit={handleSubmit} className="sign-in-up__form">
                <div className="sign-in-up__inputs">
                {isRegistration && (
                    <label className="sign-in-up__label">Имя
                        <input type="name" placeholder="Имя" className="sign-in-up__input"
                            name="userName" minLength="2" maxLength="30"
                            value={values.userName ?? ''} onChange={handleChange} required />
                    </label>
                )}
                <label className="sign-in-up__label">E-mail
                    <input type="email" placeholder="Email" className="sign-in-up__input" name="userEmail"
                        minLength="7" maxLength="40" onChange={handleChange}
                        value={values.userEmail ?? ''} required />
                </label>
                <label className="sign-in-up__label">Пароль
                    <input type="password" placeholder="Пароль" className="sign-in-up__input sign-in-up__input_password"
                        name="userPassword" minLength="5" maxLength="20"
                        value={values.userPassword ?? ''} onChange={handleChange} required />
                </label>
                </div>
                <button className="sign-in-up__button-submit app__button" type="submit" >{buttonSubmitText}</button>
            </form>
        </section>
    )
}

export default SignInUp;
