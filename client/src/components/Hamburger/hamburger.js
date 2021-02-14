import React, {useState} from "react";

import "./hamburger.css";



const Hamburger = () => {

    const [hamburgerState, setHamburgerState] = useState("")

    const isActive = () => {
        if(hamburgerState !== "is-active") {
            setHamburgerState("is-active");
            console.log(hamburgerState);
        } else {
            setHamburgerState("");
        }
    }

    return (
            <nav className="mobile-nav">
                <ul className={`hamburger-list ${hamburgerState}`}>
                    <li>
                        <a href="#second-section" className="hamburger-list__link">About the shelter</a>
                    </li>
                    <li>
                        <a href="#third-section" className="hamburger-list__link">Our pets</a>
                    </li>
                    <li>
                        <a href="#fourth-section" className="hamburger-list__link">To help the shelter</a>
                    </li>
                    <li>
                        <a href="#my-footer" className="hamburger-list__link">Contacts</a>
                    </li>
                </ul>
                <button className={`hamburger hamburger--collapse hamburger_position ${hamburgerState}`}
                        type="button"
                        onClick={isActive}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </nav>
    );
};

export default Hamburger;
