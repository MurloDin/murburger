import React from "react";
import "./FoodCard.scss";


const FoodCard = (
    {
        onAddedToBasket,
        title,
        ingredients,
        price,
        discount,
        imgUrl,
        onShow
    }) => {
    return (
        <section className="food-card">
            <img
                src={imgUrl}
                alt="food"
                className="food-card__img"
                onClick={onShow}
            />
            <div className="food-card__desc-wrapper">
                <div className="food-card__title">
                    {title}
                </div>
                <div className="subtitle food-card__ingredients">
                    {ingredients}
                </div>
            </div>
            <div className="food-card__wrapper">
                <button
                    onClick={onAddedToBasket}
                    className="food-card__btn">
                    {discount ? price - ((price * discount) / 100) : price} руб.
                </button>
                <div className="subtitle food-card__discount">{discount ? `${price} руб.`: ""}</div>
            </div>

        </section>
    );
};

export default FoodCard;
