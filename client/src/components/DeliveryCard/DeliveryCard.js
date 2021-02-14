import React from "react";
import "./DeliveryCard.scss";


const DeliveryCard = () => {
    return (
        <section className="delivery-card">
            <div className="delivery-card__title">Условия доставки</div>
            <div className="delivery-card__first-subtitle">При заказе от 20р, доставка бесплатная</div>
            <div className="delivery-card__first-subtitle">Если мы не успеем доставить любые продукты, кроме сувенирной
                продукции и соусов, в течение 60 минут, курьер подарит вам сертификат на фирменный бургер   .
            </div>
            <button className="delivery-card__btn">Перейзи в корзину</button>
        </section>
    );
};


export default DeliveryCard;
