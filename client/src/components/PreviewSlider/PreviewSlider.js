import React, {useState} from "react";
import "./PreviewSlider.scss";
import {NextPreviewArrow, PrevPreviewArrow} from "./PreviewArrow";
import BurgerDescription from "../BurgerDescription";

const sliderData = [
    {
        imageUrl: "/images/burger1.png",
        title: "MURBURGER",
        desc: "Icons, illustrations, photos, music, and design tools Icons, illustrations, photos, music, and design tools ",
        price: 12.99,
        spicy: 4
    },
    {
        imageUrl: "http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4114.png",
        title: "MEEPO BURGER",
        desc: "Icons, illustrations, photos, music, and design tools Icons, illustrations, photos, music, and design tools",
        price: 12.99,
        spicy: 1
    }
]

const PreviewSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = sliderData.length;
    const width = window.innerWidth;


    const prevSlide = () => setCurrent((cur) => cur === 0 ? length - 1 : cur - 1);
    const nextSlide = () => setCurrent((cur) => cur === length - 1 ? 0 : cur + 1);


    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <section className="preview-slider">
            <div className="container">

                {
                    sliderData.map((item, idx) => {
                        return (
                            <div className={idx === current ? 'row preview-pos active' : 'row preview-pos'} key={idx}>
                                {idx === current && (
                                    <>
                                        {width > 768 && (
                                            <div className="col-3">
                                                <div className="preview-slider__title-wrapper">
                                                    <img src="/images/row.png" alt="row"
                                                         className="preview-slider__row"/>
                                                    <div className="preview-slider__title">ФИРМЕННЫЕ БУРГЕРЫ</div>
                                                    <button className="preview-slider__btn">Открыть меню</button>
                                                </div>
                                            </div>
                                        )}
                                        <div className="col-md-5">
                                            <div className="preview-slider__img-wrapper">
                                                <img
                                                    src={item.imageUrl}
                                                    alt="burger"
                                                    className="preview-slider__img"
                                                />
                                                <img
                                                    src="/images/bg.png"
                                                    alt="circle"
                                                    className="preview-slider__bg"
                                                />
                                                <PrevPreviewArrow onClick={prevSlide}/>
                                                <NextPreviewArrow onClick={nextSlide}/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <BurgerDescription
                                                title={item.title}
                                                spicy={item.spicy}
                                                desc={item.desc}
                                                price={item.price}
                                            />
                                            <img src="/images/row.png" alt="row"
                                                 className="preview-slider__row preview-slider__row_pos"/>
                                        </div>
                                    </>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}


export default PreviewSlider;



