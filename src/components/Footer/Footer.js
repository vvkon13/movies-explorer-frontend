import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
    let isFooterExists = false;
    let location = useLocation();
    if ((location.pathname === "/") ||
        (location.pathname === "/movies") ||
        (location.pathname === "/saved-movies")) {
        isFooterExists = true;
    }
    return isFooterExists && (
        <footer className='footer app__footer' id='AboutProject'>
            <h2 className='footer__title'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className='footer__footer'>
                <p className="footer__year">©2023</p>
                <nav>
                    <ul className='footer__links'>
                        <li>
                            <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link" rel="noopener noreferrer">
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/" target="_blank" className="footer__link" rel="noopener noreferrer">
                                Github
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;