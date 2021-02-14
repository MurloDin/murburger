import React from "react";
import "./SpicyRating.scss";


const SpicyRating = ({count}) => {

    const peppers = [1,2,3,4,5];

    return (
        <div className="spicy-rating">
            {
                peppers.map((item, idx) => {
                    if(idx+1 <= count) {
                        return (
                            <img
                                src="/icons/pepper.png"
                                alt="pepper"
                                className="pepper"
                                key={idx}
                            />
                        )
                    }
                    return (
                        <img
                            src="/icons/pepper.png"
                            alt="pepper"
                            className="pepper-opacity pepper"
                            key={idx}
                        />
                    )
                })
            }
            <div className="spicy-rating__text">SPICY</div>
        </div>
    );
};


export default SpicyRating;
