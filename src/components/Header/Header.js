import React, { useContext } from 'react';
import logo from '../../image/logo.svg';
import './Header.css';
import { AppContext } from '../../contexts/AppContext';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    function sayHi() {
        console.log('Hi i am burger');
    }
    let isHeaderExists = false;
    let location = useLocation();
    if ((location.pathname === "/") ||
        (location.pathname === "/movies") ||
        (location.pathname === "/saved-movies") ||
        (location.pathname === "/profile")) {
        isHeaderExists = true;
    }

    const { isScreenLg, handleLogOff } = useContext(AppContext);
    return isHeaderExists && (
        <header className='header'>
            <img src={logo} alt='Логотип' сlassName='logo' />
            {!handleLogOff && isScreenLg && (
                <nav>
                    <ul className='header__navbar-films'>
                        <li>
                            <Link
                                to='/movies'
                                className={`header__link ${(location.pathname === '/movies') && 'header__link_active'}`}>
                                Фильмы
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/saved-movies'
                                className={`header__link ${(location.pathname === '/saved-movies') && 'header__link_active'}`}>
                                Сохранённые фильмы
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
            {!handleLogOff && isScreenLg && (
                <nav>
                    <Link to='/profile'>
                        <button className="header__button-profile" type="button" >Аккаунт</button>
                    </Link>
                </nav>

            )
            }
            {!handleLogOff && !isScreenLg && (
                <nav>
                    <button className="header__button-burger" type="button" onClick={sayHi} />
                </nav>
            )
            }
            {handleLogOff && (
                <nav>
                    <ul className='header__navbar-signinup'>
                        <li>
                            <Link to='/signup' className='header__link'>
                                Регистрация
                            </Link>
                        </li>
                        <li>
                            <Link to='/signin'>
                                <button className="header__button-signin" type="button" >
                                    Войти
                                </button>
                            </Link>
                        </li>
                    </ul>

                </nav>
            )}

        </header >
    );
}

export default Header;