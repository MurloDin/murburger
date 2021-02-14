import React from 'react';
import { FoodServiceConsumer } from "../food-service-context";

const withFoodService = () => (Wrapped) => {
    return (props) => {
        return (
            <FoodServiceConsumer>
                {
                    (foodService) => {
                        return (
                            <Wrapped {...props} foodService={foodService} />
                        );
                    }
                }
            </FoodServiceConsumer>
        );
    }
};

export default withFoodService;
