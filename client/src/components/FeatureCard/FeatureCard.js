import React from "react";
import "./FeatureCard.scss";


const FeatureCard = ({imagePath, title, btnText}) => {
    return (
        <section className="feature-card">
            <img
                src={imagePath}
                alt="icon"
                className="feature-card__img"
            />
            <div className="feature-card__title">
                {title}
            </div>
            <img src="/images/s-line.png" alt="" />
            <button className="feature-card__btn">
                {btnText}
            </button>
            <img src="/images/s-line.png" alt=""/>
        </section>
    );
};


export default FeatureCard;
