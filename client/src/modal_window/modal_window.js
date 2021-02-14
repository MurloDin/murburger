import React, {useEffect} from "react";
import Modal from 'react-modal';

import "./modal_window.css";


const ModalWindow = ({
                         modalIsOpen, onCLose, onAddedToBasket, basket = false,
                         food: {
                             title, photoLocation, ingredients,
                             price, discount, desc
                         }
                     }) => {

    useEffect(() => Modal.setAppElement('body'), [])

    return (
        <Modal isOpen={modalIsOpen}
               onRequestClose={onCLose}
               contentLabel="Food description"
               className="Modal"
               overlayClassName="Overlay">
            <button onClick={onCLose}
                    className="main-btn modal-window__btn"/>
            <div className="row">
                <div className="col-lg-6">
                    <div className="image-boundary_center">
                        <img src={`http://localhost:8000${photoLocation}`}
                             alt="photo"
                             className="modal-window__img"/>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="food-name">{title}</div>
                    <div className="food-desc">
                        {desc}
                    </div>
                    <div className="food-desc">
                        Ингредиенты : {ingredients}
                    </div>
                    {
                        basket ? (
                            <div className="food-card__wrapper food-card__wrapper_pos">
                                <div className="food-name">
                                    {discount ? price - ((price * discount) / 100) : price} руб.
                                </div>
                                <div className="subtitle food-card__discount" style={{fontSize: "24px"}}>{discount ? `${price} руб.` : ""}</div>
                            </div>
                        ) : (
                            <div className="food-card__wrapper food-card__wrapper_pos">
                                <button
                                    onClick={onAddedToBasket}
                                    className="food-card__btn"
                                >
                                    {discount ? price - ((price * discount) / 100) : price} руб.
                                </button>
                                <div className="subtitle food-card__discount">{discount ? `${price} руб.` : ""}</div>
                            </div>
                        )
                    }

                </div>
            </div>
        </Modal>
    );
};

export default ModalWindow;
