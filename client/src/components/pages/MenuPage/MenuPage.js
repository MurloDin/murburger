import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';

import Spinner from "../../Spinner";
import FoodCard from "../../FoodCard";
import MenuFilter from "../../MenuFilter";
import {withFoodService} from "../../hoc"
import {fetchFood, addedToBasket} from '../../../actions';
import ErrorIndicator from "../../error-indicator";

import 'rc-slider/assets/index.css';
import './MenuPage.scss';
import ModalWindow from "../../../modal_window";



const MenuPage = ({ food, onAddedToBasket, handleOpenModal, handleCloseModal, showModal, foodWindow}) => {
    console.log(food)
    const [count, setCount] = useState(2)

    useEffect(() => {
        document.body.style.overflow = "visible"
    }, [])

    return (
        <section className="menu-page">
            <div className="container">
                <ModalWindow modalIsOpen={showModal}
                             onCLose={handleCloseModal}
                             food={foodWindow}
                             onAddedToBasket={() => onAddedToBasket(foodWindow._id)}
                />
                <div className="menu-page__title">меню</div>
                <MenuFilter/>
                <div className="row">
                    {
                        food.map((item, idx) => {
                            if (idx < count) {
                                return (
                                    <div className="col-md-6" key={idx}>
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
                {count < food.length && (
                    <button
                        className="menu-page__button"
                        onClick={() => setCount((count) => count + 2)}
                    >
                        Показать ещё
                    </button>
                )}

            </div>

        </section>
    );
};

const MenuPageContainer = (props) => {
    const { food, loading, error, onAddedToBasket, fetchFood } = props;
    useEffect(() => {
        fetchFood();
    }, [])

    const [showModal, setShowModal] = useState(false)
    const [foodWindow, setFoodWindow] = useState({})

    const handleOpenModal = (food) => {
        setFoodWindow(food);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    if (error) {
        return <ErrorIndicator/>
    }

    if (loading) {
        return (
                <div style={{width: "100vw", height: "100vh", backgroundColor: "#111111", paddingTop: "18%"}}>
                    <Spinner />
                </div>
        )
    }

    return <MenuPage
        food={food}
        onAddedToBasket={onAddedToBasket}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        showModal={showModal}
        foodWindow={foodWindow}
    />
}


const mapStateToProps = ({food, loading, error}) => {
    return {food, loading, error};
};

const mapDispatchToProps = (dispatch, {foodService}) => {
    return {
        fetchFood: fetchFood(foodService, dispatch),
        onAddedToBasket: (id) => dispatch(addedToBasket(id))
    };
};

export default withFoodService()(connect(mapStateToProps, mapDispatchToProps)(MenuPageContainer));
