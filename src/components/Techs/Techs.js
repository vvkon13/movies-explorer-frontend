import React from "react";
import "./Techs.css";

function Techs() {
    return (
        <section className="techs"  id='Techs'>
            <h2 className="techs__title">
                Технологии
            </h2>
            <h3 className="techs__subtitle">
                7 технологий
            </h3>
            <p className="techs__text">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="techs__cards">
                <li className="techs__card">
                    <h4 className="techs__card-title">
                        HTML
                    </h4>
                </li>
                <li className="techs__card">
                    <h4 className="techs__card-title">
                        CSS
                    </h4>
                </li>
                <li className="techs__card">
                    <h4 className="techs__card-title">
                        JS
                    </h4>
                </li>
                <li className="techs__card">
                    <h4 className="techs__card-title">
                        React
                    </h4>
                </li>
                <li className="techs__card">
                    <h4 className="techs__card-title">
                        Git
                    </h4>
                </li>
                <li className="techs__card">
                    <h4 className="techs__card-title">
                        Express.js
                    </h4>
                </li>
                <li className="techs__card">
                    <h4 className="techs__card-title">
                        mongoDB
                    </h4>
                </li>
            </ul>
        </section>

    );
}

export default Techs;