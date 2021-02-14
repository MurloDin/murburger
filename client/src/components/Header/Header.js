import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "./Header.scss";
import Hamburger from "../Hamburger";


const Header = () => {

    const width = window.innerWidth;

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h2 className="header__logo">
                            <span className="header__logo_light">MUR</span>BURGER
                        </h2>
                    </div>
                    {
                        width > 1025 &&
                        (
                            <div className="col-6 offset-3">
                                <nav>
                                    <ul className="header__nav-list">
                                        <li className="header__nav-list__item">
                                            <Link to="/" className="header__nav-list__link">
                                                Главная
                                            </Link>
                                        </li>
                                        <li className="header__nav-list__item">
                                            <Link to="/menu" className="header__nav-list__link">
                                                Меню
                                            </Link>
                                        </li>
                                        <li className="header__nav-list__item">
                                            <Link to="/delivery" className="header__nav-list__link">
                                                Доставка
                                            </Link>
                                        </li>
                                        <li className="header__nav-list__item">
                                            <Link to="/basket" className="header__nav-list__link">
                                                <div className="header__nav-list__basket"></div>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                width < 1025 && (
                    <Hamburger />
                )
            }
        </header>
    );
};

export default Header;
