import React, {useState} from "react";

import "./PopularSection.scss";
import FoodCard from "../../../../FoodCard";
import ModalWindow from "../../../../../modal_window";


const PopularSection = ({food, onAddedToBasket}) => {

    const [showModal, setShowModal] = useState(false)
    const [foodWindow, setFoodWindow] = useState({})

    const handleOpenModal = (food) => {
        setFoodWindow(food);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <section className="popular-section section">
            <div className="container">
                <div className="popular-section__subtitle">Популярное</div>
                <div className="title popular-section__title_position">Популрные блюда</div>
                <img
                    src="/images/line.png"
                    alt="line"
                    className="feature-section__line"
                />
                <div className="row">
                    {
                        food && food.map((item, idx) => {
                            if (idx < 6) {
                                return (
                                    <div className="col-lg-6">
                                        <FoodCard
                                            title={item.title}
                                            imgUrl={`http://localhost:8000${item.photoLocation}`}
                                            price={item.price}
                                            discount={item.discount}
                                            ingredients={item.ingredients}
                                            onAddedToBasket={() => onAddedToBasket(item._id)}
                                            onShow={() => handleOpenModal(item)}
                                            onClose={handleCloseModal}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <ModalWindow modalIsOpen={showModal}
                         onCLose={handleCloseModal}
                         food={foodWindow}
                         onAddedToBasket={() => onAddedToBasket(foodWindow._id)}
            />
        </section>
    );
};


export default PopularSection;
