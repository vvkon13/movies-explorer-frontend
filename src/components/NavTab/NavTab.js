import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './NavTab.css';

function NavTab() {
    return (
        <nav>
            <ul className="navtab promo__navtab">
                <li>
                    <AnchorLink href="#AboutProject">
                        <button className="navtab__button app__button">
                            О проекте
                        </button>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#AboutProject">
                        <button className="navtab__button app__button">
                            Технологии
                        </button>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#AboutProject">
                        <button className="navtab__button app__button">
                            Студент
                        </button>
                    </AnchorLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;