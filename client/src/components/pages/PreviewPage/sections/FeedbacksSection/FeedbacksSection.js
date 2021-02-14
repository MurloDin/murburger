import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./FeedbacksSection.scss";
import FeedbackSlider from "../../../../FeedbackSlider";
import FoodService from "../../../../../services/food-service";


const foodService = new FoodService();


const FeedbacksSection = () => {
    const [comments, setComments] = useState([{author: 'qwe', rating: 3, comment: "asd"}]);
    useEffect(async () => {
        console.log("cc", comments)
        const data = await foodService.getComments()
        setComments(data)
    }, [])


    return (
        <section className="section feedbacks-section">
            <div className="container">
                <div className="feedbacks-section__wrapper">
                    <div className="feedbacks-section__section-name">Отзывы</div>
                    <button className="feedbacks-section__btn">
                        <Link to="/comment-form" style={{textDecoration: "none", color: "white"}}>
                            Оставить отзыв
                        </Link>
                    </button>
                </div>

                <div className="feedbacks-section__title_pos title">Обратная связь</div>
                <FeedbackSlider comments={comments}/>
            </div>
        </section>
    );
};


export default FeedbacksSection
