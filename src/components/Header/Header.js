import React, { useContext } from 'react';
import './Header.css';
import { AppContext } from '../../contexts/AppContext';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoPreloader from '../LogoPreloader/LogoPreloader';

function Header({sayHi}) {
    let isHeaderExists = false;
    let location = useLocation();
    if ((location.pathname === "/") ||
        (location.pathname === "/movies") ||
        (location.pathname === "/saved-movies") ||
        (location.pathname === "/profile")) {
        isHeaderExists = true;
    }
    const { isScreenLg, loggedIn } = useContext(AppContext);
    return isHeaderExists && (
        <header className='header app__header'>
            <LogoPreloader />
            {loggedIn && isScreenLg && (
                <nav>
                    <ul className='header__navbar-films'>
                        <li>
                            <NavLink className='header__link app__link'
                                to='/movies'
                            >
                                Фильмы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header__link app__link'
                                to='/saved-movies'
                            >
                                Сохранённые фильмы
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
            {loggedIn && isScreenLg && (
                <nav>
                    <Link to='/profile' className="header__button-profile app__button">
                            Аккаунт
                    </Link>
                </nav>
            )
            }
            {loggedIn && !isScreenLg && (
                <nav>
                    <button className="header__button-burger app__button" type="button" onClick={sayHi} />
                </nav>
            )
            }
            {!loggedIn && (
                <nav>
                    <ul className='header__navbar-signinup'>
                        <li>
                            <NavLink 
                            to='/signup' 
                            className='header__link app__link'>
                                Регистрация
                            </NavLink>
                        </li>
                        <li>
                            <Link to='/signin' className="header__button-signin app__button">
                                    Войти
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header >
    );
}

export default Header;