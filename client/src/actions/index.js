const foodLoaded = (newFood) => {
  return {
    type: 'FOOD_LOADED',
    payload: newFood
  };
};

const foodRequested = () => {
  return {
    type: 'FOOD_REQUESTED'
  };
};

const foodError = (error) => {
  return {
    type: 'FOOD_ERROR',
    payload: error
  };
};

const addedToBasket = (foodId) => {
    return {
        type: 'FOOD_ADDED_TO_BASKET',
        payload: foodId
    }
}

const fetchFood = (foodService, dispatch) => () => {
    dispatch(foodRequested());
    foodService.getFood()
        .then((data) => {
            dispatch(foodLoaded(data));
        })
        .catch((err) => {
            dispatch(foodError(err));
        });
};

const onDecrease = (id) => {
    return {
        type: 'FOOD_REMOVED_FROM_BASKET',
        payload: id
    }
}

const onDelete = (id) => {
    return {
        type: 'DELETE_ALL_FOOD_FROM_BASKET',
        payload: id
    }
}

export {
    fetchFood,
    addedToBasket,
    onDecrease,
    onDelete
};
