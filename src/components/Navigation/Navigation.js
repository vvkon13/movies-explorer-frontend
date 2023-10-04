import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { AppContext } from "../../contexts/AppContext";

function Naigation({ onClose }) {
    const { isVisibleNavigation } = useContext(AppContext);
    return isVisibleNavigation && (
        <section className={`navigation ${isVisibleNavigation && 'navigation_opened'}`}>
            <nav className="navigation__visible">
                <div className="navigation__links">
                    <ul className="navigation__header">
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
                    </ul>
                    <div className="navigation__footer">
                        <NavLink className='navigation__button-profile app__button' to='/profile'>
                            Аккаунт
                        </NavLink>
                    </div>
                </div>
                <button className="navigation__button-close app__button" type="button" onClick={onClose} />
            </nav>
        </section >
    );
}

export default Naigation
