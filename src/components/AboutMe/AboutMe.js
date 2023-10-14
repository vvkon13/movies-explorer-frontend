import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo_Vasiliy.png";

function AboutMe() {
    return (
        <section className="aboutme"  id='AboutMe'>
            <h2 className="aboutme__title">
                Студент
            </h2>
            <div className="aboutme-table">
                <div className="aboutme-table__column-info">
                    <h3 className="aboutme-table__title">
                        Василий
                    </h3>
                    <h4 className="aboutme-table__subtitle">
                        Фронтенд-разработчик, 41 год
                    </h4>
                    <p className="aboutme-table__text">
                        Я родился в Саратове, недавно переехал в Москву, закончил факультет Компьютерных Наук и Информационных Технологий СГУ. У меня есть дочь и 
                        сын. Я люблю математику с детства. Программирование с Basic на ДВК и БК. Некоторое время потратил на развитие софт-скиллов в пивной компании, заодно достаточно подробно разобрался в продукте. Очень хочу остаток жизни заниматься любимым делом - программированием, расти, развиваться и приносить пользу команде. Планирую развиваться в направлении fullstack разработчика, но на первоначальном этапе акцентировать свое внимание на frontend. Играю в шахматы, футбол.
                    </p>
                </div>
                <img src={photo} alt="Фото Профиль" className="aboutme-table__column-photo" />
            </div>
        </section>
    );
}

export default AboutMe;