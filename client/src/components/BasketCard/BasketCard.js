import React from "react";
import "./BasketCard.scss";


const BasketCard = ({item, onIncrease, onDecrease, onDelete, onShow}) => {
    console.log(item)
    const {title, photoLocation, ingredients, price, total, count, id} = item;

    return (
        <section className="basket-card" key={id}>
            <img
                src={`http://localhost:8000${item.photoLocation}`}
                alt="food"
                className="basket-card__img"
                onClick={onShow}
            />
            <div className="basket-card__desc-wrapper">
                <div className="basket-card__title">
                    {title}
                </div>
                <div className="subtitle basket-card__ingredients">
                    {ingredients}
                </div>
                    <div className="basket-card__price">
                        {total} руб.
                        {total < price * count && (
                            <div className="subtitle basket-card__discount">
                                {`${price*count} руб.`}
                            </div>
                    )}
                        <div className="basket-card__btn-wrapper">
                            <button
                                className="basket-card__right-btn"
                                onClick={onIncrease}
                            >
                                +
                            </button>
                            <div className="basket-card__count">{count}</div>
                            <button
                                className="basket-card__left-btn"
                                onClick={onDecrease}
                            >
                                -
                            </button>
                        </div>
                    </div>

            </div>
            <div
                className="basket-card__cross"
                onClick={onDelete}
            >
                x
            </div>
        </section>
    );
};


export default BasketCard;
