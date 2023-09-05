import SignInUp from "../SignInUp/SignInUp";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import "./Register.css";

export function Register({ handleRegistration }) {
    const { isLoading } = useContext(AppContext);
    return (
    /*     loggedIn ?
            <Navigate to='/main' replace /> : */
    
        <>
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
        </>
    )
}

export default Register;
