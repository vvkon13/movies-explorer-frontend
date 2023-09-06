import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio app__portfolio">
            <a href="https://github.com/" target="_blank" className="portfolio__title app__link" rel="noopener noreferrer">
                Github
            </a>
            <h2 className="portfolio__subtitle">
                Портфолио
            </h2>
            <nav>
                <ul className="portfolio__table">
                    <li>
                        <a
                            href="https://github.com/vvkon13/how-to-learn.git"
                            target="_blank"
                            className="portfolio__link portfolio__link_underlined app__link"
                            rel="noopener noreferrer">
                            <p className="portfolio__link-text">
                                Статичный сайт
                            </p>
                            <p className="portfolio__link-icon">
                                ↗
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/vvkon13/russian-travel.git/"
                            target="_blank"
                            className="portfolio__link portfolio__link_underlined app__link"
                            rel="noopener noreferrer">
                            <p className="portfolio__link-text">
                                Адаптивный сайт
                            </p>
                            <p className="portfolio__link-icon">
                                ↗
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/vvkon13/react-mesto-api-full-gha.git"
                            target="_blank"
                            className="portfolio__link app__link"
                            rel="noopener noreferrer">
                            <p className="portfolio__link-text">
                                Одностраничное приложение
                            </p>
                            <p className="portfolio__link-icon">
                                ↗
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Portfolio;