import React from "react";
import "./ContactsSection.scss";


const ContactsSection = () => {
    return (
        <section className="contacts-section section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="contacts-section__wrapper">
                            <img
                                src="https://www.possiblegroup.ru/wp-content/uploads/2018/06/logo-02.png"
                                alt="logo"
                                className="contacts-section__logo"
                            />
                            <div className="subtitle contacts-section__subtitle">
                                Sed ut perspiciatis unde om is nerror sit voluptatem accustium dolorem tium totam rem aperam
                                eaque ipsa quae ab illose inntore veritatis
                            </div>
                            <div className="contacts-section__buttons-wrapper">
                                <a href="vk.com" className="icon-wrapper" target="_blank">
                                    <i className="icon-facebook icon"/>
                                </a>
                                <a href="vk.com" className="icon-wrapper" target="_blank" style={{paddingRight: "4px"}}>
                                    <i className="icon-twitter-bird icon"/>
                                </a>
                                <a href="vk.com" className="icon-wrapper" target="_blank">
                                    <i className="icon-instagram icon"/>
                                </a>
                                <a href="vk.com" className="icon-wrapper" target="_blank">
                                    <i className="icon-odnoklassniki icon"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img
                            src="/images/time-bg.png"
                            alt="time-bg"
                            className="contacts-section__time-bg"
                        />
                        <div className="contacts-section__time-wrapper">
                            <div className="contacts-section__time-subtitle" style={{color: "#FFBB1C"}}>Расписание</div>
                            <div className="contacts-section__contacts-title">Время работы</div>
                            <div className="contacts-section__time-subtitle">ПОНЕДЕЛЬНИК 9.00 - 22.00</div>
                            <div className="contacts-section__time-subtitle">Вторник 9.00 - 22.00</div>
                            <div className="contacts-section__time-subtitle">Суббота 9.00 - 22.00</div>
                            <div className="contacts-section__time-subtitle">Воскресение 9.00 - 22.00</div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contacts-section__wrapper" style={{marginTop: "120px"}}>
                            <img
                                src="/images/f-contact-icon.png"
                                alt="location-img"
                                className="contacts-section__location-img"
                            />
                            <div className="contacts-section__time-subtitle" style={{color: "#FFBB1C"}}>Контакты</div>
                            <div className="contacts-section__contacts-title">Связаться</div>
                            <div className="subtitle" style={{textAlign:"center"}}>
                                12/7Aabot, Poor Street, New York <br />United States
                            </div>
                            <div className="subtitle" style={{textAlign:"center"}}>
                                +375(29) 38 10 742
                            </div>
                            <div className="subtitle" style={{textAlign:"center"}}>
                                kkhagrid@mail.ru
                            </div>
                            <button className="contacts-section__btn">
                                открыть карту
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ContactsSection;
