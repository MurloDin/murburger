import React from "react";
import Slider,{ Range } from 'rc-slider';
import "./MenuFilter.scss";
import CategoryDropdown from "../CategoryDropdown";


const marks = {
    0: "0$",
    25: "10$",
    50: "20$",
    75: "30$",
    100: "40$",
}

const marks2 = {
    0: "1",
    25: "2",
    50: "3",
    75: "4",
    100: "5",
}


const MenuFilter = () => {
    return (
        <section className="menu-filter">
            <div className="row">
                <div className="col-md-2">
                    <CategoryDropdown/>
                </div>
                <div className="col-md-4">
                    <div className="menu-filter__range-wrapper">
                        <div style={{color:"#F4A61B", marginBottom: "10px"}}>Ценовой диапазон</div>
                        <Range
                            allowCross={false}
                            marks={marks}
                            step={25}
                            handleStyle={{backgroundColor: "#F4A61B", color: "orange"}}
                            dotStyle={{borderColor: "#F4A61B", color: "orange"}}
                            activeDotStyle={{borderColor: "#F4A61B", color: "orange"}}
                            trackStyle={[{backgroundColor: "#F4A61B"}]}
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="menu-filter__range-wrapper">
                        <div style={{color:"#F4A61B", marginBottom: "10px"}}>Острота</div>
                        <Range
                            allowCross={false}
                            marks={marks2}
                            step={25}
                            handleStyle={{backgroundColor: "#F4A61B", color: "orange"}}
                            dotStyle={{borderColor: "#F4A61B", color: "orange"}}
                            activeDotStyle={{borderColor: "#F4A61B", color: "orange"}}
                            trackStyle={[{backgroundColor: "#F4A61B"}]}
                        />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="menu-filter__discount-wrapper">
                        <div>
                            На акции
                        </div>
                        <input
                            type="checkbox"
                            style={{float:"right"}}
                            className="menu-filter__discount-check"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default MenuFilter;
