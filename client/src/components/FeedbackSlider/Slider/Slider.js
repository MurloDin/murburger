import React from "react";
import Slider from "react-slick";
import "./Slider.scss";
import {NextArrow, PrevArrow} from "../Arrow";
import FeedbackCard from "../FeedbackCard";

let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const CustomSlider = ({comments}) => {

    const width = window.innerWidth;
    let arrows = true;
    let quantity = 3;

    if (width < 577){
        arrows = false;
        quantity = 1;
    }
    else if (width <= 993) {
        arrows = false;
        quantity = 2;
    }

    settings = {
        ...settings, slidesToShow: quantity, arrows: arrows,
    };

    return (
        <div className="custom-slider">
            <Slider {...settings}>
                {
                    comments.map((item, idx) => {
                        return (
                            <FeedbackCard
                                key={idx}
                                author={item.author}
                                rating={item.rating}
                                comment={item.comment}
                            />
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default CustomSlider;

