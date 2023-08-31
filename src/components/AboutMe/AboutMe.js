import React from "react";
import "./AboutMe.css";
import photo from "../../image/photo_vitaliy.png";

function AboutMe() {
    return (
        <section className="aboutme">
            <h2 className="aboutme__title">
                Студент
            </h2>
            <div className="aboutme-table">
                <div className="aboutme-table__column-info">
                    <h3 className="aboutme-table__title">
                        Виталий
                    </h3>
                    <h4 className="aboutme-table__subtitle">
                        Фронтенд-разработчик, 30 лет
                    </h4>
                    <p className="aboutme-table__text">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                </div>
                <img src={photo} alt="Фото Профиль" className="aboutme-table__column-photo" />
            </div>
        </section>
    );
}

export default AboutMe;