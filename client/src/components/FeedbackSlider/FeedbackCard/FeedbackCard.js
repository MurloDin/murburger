import React from "react";
import "./FeedbackCard.scss";
import RatingStars from "../../RatingStars";


const FeedbackCard = ({author, rating, comment}) => {
    return (
        <section className="feedback-card">
            <div className="feedback-card__author-wrapper">
                <div className="feedback-card__img-wrapper">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
                        alt="user image"
                        className="feedback-card__img"
                    />
                </div>
                <div className="feedback-card__title-wrapper">
                    <div className="feedback-card__title">{author}</div>
                    <div className="feedback-card__rating">
                        <RatingStars count={rating} />
                    </div>
                </div>
            </div>

            <div className="feedback-card__feedback">{comment}</div>
        </section>
    );
}

export default FeedbackCard;
