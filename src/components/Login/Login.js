import SignInUp from "../SignInUp/SignInUp";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import "./Login.css";

export function Login({ handleAuthorization }) {
    const { isLoading, loggedIn } = useContext(AppContext);
    return loggedIn ?
        <Navigate to="/" replace /> :
        (
            <main className="login">
                <SignInUp
                    formName={'login'}
                    title={'Рады видеть!'}
                    buttonSubmitText={isLoading ? 'Вход...' : 'Войти'}
                    onSignInUp={handleAuthorization}
                />
                <div className="login__footer">
                    <p className="login__link-text">Ещё не зарегистрированы?</p>
                    <Link to={'/signup'} className='login__link app__link'>Регистрация</Link>
                </div>
            </main>
        )
}

export default Login;