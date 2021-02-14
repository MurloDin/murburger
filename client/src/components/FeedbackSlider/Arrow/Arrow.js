import React from "react";
import "./Arrow.scss";


const NextArrow = ({onClick }) => {
    return (
        <div className="slider-arrow slider-arrow_next"
             onClick={onClick}
        />
    );
};


const PrevArrow = ({onClick }) => {
    return (
        <div className="slider-arrow slider-arrow_prev"
             onClick={onClick}
        />
    );
};


export {NextArrow, PrevArrow};
