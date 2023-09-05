import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio app__portfolio">
            <h1 className="portfolio__title">
                Github
            </h1>
            <h2 className="portfolio__subtitle">
                Портфолио
            </h2>
            <nav>
                <ul className="portfolio__table">
                    <li className="portfolio__string-link portfolio__string-link_underlined">
                        <a href="https://github.com/" target="_blank" className="portfolio__link app__link" rel="noopener noreferrer">
                            Статичный сайт
                        </a>
                        <a href="https://github.com/" target="_blank" className="portfolio__link-icon app__link" rel="noopener noreferrer">
                            ↗
                        </a>
                    </li>
                    <li className="portfolio__string-link portfolio__string-link_underlined">
                        <a href="https://github.com/" target="_blank" className="portfolio__link app__link" rel="noopener noreferrer">
                            Адаптивный сайт
                        </a>
                        <a href="https://github.com/" target="_blank" className="portfolio__link-icon app__link" rel="noopener noreferrer">
                            ↗
                        </a>
                    </li>
                    <li className="portfolio__string-link">
                        <a href="https://github.com/" target="_blank" className="portfolio__link app__link" rel="noopener noreferrer">
                            Одностраничное приложение
                        </a>
                        <a href="https://github.com/" target="_blank" className="portfolio__link-icon app__link" rel="noopener noreferrer">
                            ↗
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Portfolio;