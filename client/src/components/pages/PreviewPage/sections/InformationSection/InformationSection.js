import React from "react";
import "./InformationSection.scss";


const InformationSection = () => {

    return (
        <section className="information-section section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <img
                            src="/images/about.png"
                            alt="about as"
                            className="information-section__img"
                        />
                    </div>
                    <div className="col-xl-3  col-lg-3 col-12">
                        <div className="information-section__section-name">О нас</div>
                        <div className="information-section__title_position title">Находимя в уютном месте</div>
                        <div className="information-section__subtitle_position subtitle">Готовим из свежих и высококачественных
                            ингредиентов
                        </div>
                        <div className="information-section__text subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam
                        </div>
                    </div>
                    <div className="col-xl-3  col-lg-3 col-12">
                        <div className="information-section__square">
                            <span className="information-section__num">25</span><br/>
                            ЛЕТ ОПЫТА
                        </div>
                        <div className="subtitle information-section__text_position">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default InformationSection;
