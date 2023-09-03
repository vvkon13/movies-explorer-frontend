import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about"  id='AboutProject'>
            <h2 className="about__title">
                О проекте
            </h2>
            <ul className="table">
                <li className="table__column">
                    <h3 className="table__title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="table__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li className="table__column">
                    <h3 className="table__title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="table__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <ul className="scheme">
                <li className="scheme__column-back">
                    <h4 className="scheme__title-back">
                        1 неделя
                    </h4>
                    <p className="scheme__text">
                        Back-end
                    </p>
                </li>
                <li className="scheme__column-front">
                    <h4 className="scheme__title-front">
                        4 недели
                    </h4>
                    <p className="scheme__text">
                        Front-end
                    </p>
                </li>
            </ul>
        </section>

    );
}

export default AboutProject;