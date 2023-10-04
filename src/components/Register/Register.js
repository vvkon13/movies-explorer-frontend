import SignInUp from "../SignInUp/SignInUp";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import "./Register.css";

export function Register({ handleRegistration }) {
    const { isLoading, loggedIn } = useContext(AppContext);
    return loggedIn ?
        <Navigate to="/" replace /> :
        (
        <main className="register">
            <SignInUp
                formName={'register'}
                title={'Добро пожаловать!'}
                buttonSubmitText={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                onSignInUp={handleRegistration}
            />
            <div className="register__footer">
                <p className="register__link-text">Уже зарегистрированы?</p>
                <Link to={'/signin'} className='register__link app__link'>Войти</Link>
            </div>
        </main>
    )
}

export default Register;
