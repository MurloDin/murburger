import React from "react";
import "./RatingStars.scss";




const RatingStars = ({count}) => {

    const stars = [1,2,3,4,5];

    return (
        <div className="rating-stars">
            {
                stars.map((item, idx) => {
                    if(idx+1 <= count) {
                        return (
                            <span className="orange-star star" key={idx}>★</span>
                        )
                    }
                    return (
                        <span className="gray-star star" key={idx}>★</span>
                    )
                })
            }
        </div>
    )
};


export default RatingStars;
