import React from "react";

import "./FeedbackSlider.scss";
import CustomSlider from "./Slider";


const FeedbackSlider = ({comments}) => {
    console.log('1', comments)
    return (
        <CustomSlider comments={comments}/>
    )
}


export default FeedbackSlider;
