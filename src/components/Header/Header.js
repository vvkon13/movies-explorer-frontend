import React, { useContext } from 'react';
import './Header.css';
import { AppContext } from '../../contexts/AppContext';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoPreloader from '../LogoPreloader/LogoPreloader';

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
        <header className='header app__header'>
            <LogoPreloader />
            {!handleLogOff && isScreenLg && (
                <nav>
                    <ul className='header__navbar-films'>
                        <li>
                            <NavLink className='header__link'
                                to='/movies'
                            >
                                Фильмы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='header__link'
                                to='/saved-movies'
                            >
                                Сохранённые фильмы
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
            {!handleLogOff && isScreenLg && (
                <nav>
                    <Link to='/profile'>
                        <button className="header__button-profile app__button" type="button" >Аккаунт</button>
                    </Link>
                </nav>
            )
            }
            {!handleLogOff && !isScreenLg && (
                <nav>
                    <button className="header__button-burger app__button" type="button" onClick={sayHi} />
                </nav>
            )
            }
            {handleLogOff && (
                <nav>
                    <ul className='header__navbar-signinup'>
                        <li>
                            <NavLink to='/signup' className='header__link'>
                                Регистрация
                            </NavLink>
                        </li>
                        <li>
                            <Link to='/signin'>
                                <button className="header__button-signin app__button" type="button" >
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