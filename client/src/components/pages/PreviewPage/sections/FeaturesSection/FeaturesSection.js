import React from "react";
import "./FeaturesSection.scss";
import FeatureCard from "../../../../FeatureCard";


const FeatureSection = () => {
    return (
        <section className="feature-section section">
            <div className="container">
                <div className="feature-section__subtitle">функции</div>
                <div className="title feature-section__title_position">Наши<br/>приемущетсва</div>
                <img
                    src="/images/line.png"
                    alt="line"
                    className="feature-section__line"
                />
                <div className="row">
                    <div className="col-md-4">
                        <FeatureCard
                            imagePath="/images/s-icon01.png"
                            title="Еда высшего качества"
                            btnText="Меню"
                        />
                    </div>
                    <div className="col-md-4">
                        <FeatureCard
                            imagePath="/images/s-icon02.png"
                            title="Доставка 24/7"
                            btnText="Условия доставки"
                        />
                    </div>
                    <div className="col-md-4">
                        <FeatureCard
                            imagePath="/images/s-icon03.png"
                            title="Легко заказать"
                            btnText="Заказать"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default FeatureSection;
