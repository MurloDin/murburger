import React from "react";
import "./BurgerDescription.scss";
import SpicyRating from "../SpicyRating";


const BurgerDescription = ({title, spicy, desc, price}) => {
    return (
        <section className="burger-description">
            <div className="burger-description__title">{title}</div>
            <SpicyRating count={spicy} />
            <div className="burger-description__desc subtitle">{desc}</div>
            <div className="burger-description__btn-wrapper">
                <button className="burger-description__btn">Заказать</button>
                <div className="burger-description__price">{price}$</div>
            </div>
        </section>
    )
}


export default BurgerDescription;
