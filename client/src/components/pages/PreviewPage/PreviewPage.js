import React, {useEffect} from "react";
import $ from 'jquery';

import PreviewSection from "./sections/PreviewSection";
import InformationSection from "./sections/InformationSection";
import FeatureSection from "./sections/FeaturesSection";
import PopularSection from "./sections/PopularSection";
import FeedbacksSection from "./sections/FeedbacksSection";
import VideoSection from "./sections/VideoSection";
import ContactsSection from "./sections/ContactsSection";

import './jquery.pagepiling';
import './jquery.pagepiling.css';
import "./PreviewPage.scss";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../Spinner";
import {addedToBasket, fetchFood} from "../../../actions";
import {withFoodService} from "../../hoc";
import {connect} from "react-redux";


const PreviewPage = ({food, onAddedToBasket}) => {

    const width = window.innerWidth;

    useEffect(() => {
        if(width > 1023) {
            document.body.style.overflow = "hidden";
            $(document).ready(function () {
                $('#pagepiling').pagepiling({
                    afterLoad: function (anchorLink, index) {
                        //using index
                        if (anchorLink === 'firstPage') {
                            console.log("Section 1 ended loading");
                        }

                        //using anchorLink
                        if (anchorLink === 'secondPage') {
                            console.log("Section 2 ended loading");
                        }
                    },
                    navigation: {
                        'bulletsColor': '#000',
                        'position': 'right'
                    },
                })
            });
        }
    }, []);


    if (width < 1024) {
        return (
            <>
                <InformationSection/>
                <PreviewSection/>
                <FeatureSection/>
                <PopularSection food={food} onAddedToBasket={onAddedToBasket}/>
                <FeedbacksSection/>
                <ContactsSection/>
            < />
        )
    } else {
        return (
            <div id="pagepiling">
                <InformationSection/>
                <PreviewSection/>
                <FeatureSection/>
                <PopularSection food={food} onAddedToBasket={onAddedToBasket}/>
                <FeedbacksSection/>
                <VideoSection/>
                <ContactsSection/>
            </div>)
    }
}


const PreviewPageContainer = (props) => {
    const {food, onAddedToBasket, fetchFood} = props;
    useEffect(() => {
        fetchFood();

    }, [])


    return <PreviewPage food={food} onAddedToBasket={onAddedToBasket}/>
}


const mapStateToProps = ({food}) => {
    return {food};
};

const mapDispatchToProps = (dispatch, {foodService}) => {
    return {
        fetchFood: fetchFood(foodService, dispatch),
        onAddedToBasket: (id) => dispatch(addedToBasket(id))
    };
};

export default withFoodService()(connect(mapStateToProps, mapDispatchToProps)(PreviewPageContainer));
