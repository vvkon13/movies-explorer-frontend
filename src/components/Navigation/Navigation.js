import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { AppContext } from "../../contexts/AppContext";

function Naigation({ onClose }) {
    const { isVisibleNavigation } = useContext(AppContext);
    return isVisibleNavigation && (
        <section className={`navigation ${isVisibleNavigation && 'navigation_opened'}`}>
            <nav className="navigation__visible">
                <ul className="navigation__links">
                    <div className="navigation__header">
                        <li>
                            <NavLink className='navigation__link app__link' to='/'>
                                Главная
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className='navigation__link app__link' to='/movies'>
                                Фильмы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='navigation__link app__link' to='/saved-movies'>
                                Сохранённые фильмы
                            </NavLink>
                        </li>

                    </div>
                    <div className="navigation__footer">
                        <li>
                            <NavLink className='navigation__buttopn-link app__link' to='/profile'>
                                <button className="navigation__button-profile app__button" type="button" >Аккаунт</button>
                            </NavLink>
                        </li>
                    </div>
                </ul>
                <button className="navigation__button-close app__button" type="button" onClick={onClose} />
            </nav>
        </section >
    );
}

export default Naigation