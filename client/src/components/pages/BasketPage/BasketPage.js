import React, {useState} from "react";
import {connect} from 'react-redux';

import {addedToBasket, onDecrease, onDelete} from "../../../actions";
import FoodCard from "../../FoodCard";

import "./BasketPage.scss";
import BasketCard from "../../BasketCard";
import DeliveryForm from "../../DeliveryForm";
import ModalWindow from "../../../modal_window";


const BasketPage = ({items, total, onIncrease, onDecrease, onDelete}) => {
    console.log(items)

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
        <section className="basket-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="basket-page__title">Ваш заказ</div>
                        {
                            items.map((item, idx) => {
                                console.log("idx = ", idx)
                                return <BasketCard
                                    item={item}
                                    idx={idx}
                                    onIncrease={() => onIncrease(item._id)}
                                    onDecrease={() => onDecrease(item._id)}
                                    onDelete={() => onDelete(item._id)}
                                    onShow={() => handleOpenModal(item)}
                                    onClose={handleCloseModal}
                                />
                            })
                        }
                    </div>
                    <div className="col-xl-6">
                        <div className="basket-page__title long-line">Оформление заказа</div>
                        <DeliveryForm total={total} items={items}/>
                    </div>
                </div>
            </div>
            <ModalWindow modalIsOpen={showModal}
                         onCLose={handleCloseModal}
                         food={foodWindow}
                         basket={true}
            />
        </section>
    );
};

const mapStateToProps = ({basketItems, orderTotal}) => {
    return {
        items: basketItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: addedToBasket,
    onDelete: onDelete,
    onDecrease: onDecrease
}


export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
