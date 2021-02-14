import React from "react";
import "./PreviewArrow.scss";


const NextPreviewArrow = ({onClick }) => {
    return (
        <div className="preview__slider-arrow preview__slider-arrow_next"
             onClick={onClick}
        />
    );
};


const PrevPreviewArrow = ({onClick }) => {
    return (
        <div className="preview__slider-arrow preview__slider-arrow_prev"
             onClick={onClick}
        />
    );
};


export {NextPreviewArrow, PrevPreviewArrow};
