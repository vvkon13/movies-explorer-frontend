import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './NavTab.css';

function NavTab() {
    return (
        <nav>
            <ul className="navtab promo__navtab">
                <li>
                    <AnchorLink href="#AboutProject" className="navtab__button app__button">
                            О проекте
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#Techs" className="navtab__button app__button">
                            Технологии
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#AboutMe" className="navtab__button app__button">
                            Студент
                    </AnchorLink>
                </li>
            </ul>
        </nav>
    );
}


export default NavTab;