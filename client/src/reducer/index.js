const initialState = {
    food: [],
    loading: true,
    error: null,
    basketItems: JSON.parse(localStorage.getItem("basket")),
    orderTotal: 0
};

const updateBasketItems = (basketItems, item, idx) => {
    if (item.count === 0) {
        const data = [
            ...basketItems.slice(0, idx),
            ...basketItems.slice(idx + 1)
        ];
        localStorage.setItem("basket", JSON.stringify(data));
        return data;
    }
    //add item
    if (idx === -1) {
        const data = [
            ...basketItems, item
        ];
        localStorage.setItem("basket", JSON.stringify(data));
        return data;
    }
    //
    const data = [
        ...basketItems.slice(0, idx),
        item,
        ...basketItems.slice(idx + 1)
    ];
    localStorage.setItem("basket", JSON.stringify(data));
    return data;
};

const updateBasketItem = (food, item = {}, quantity) => {
    console.log(food)
    const {
        _id = food._id,
        photoLocation = food.photoLocation,
        ingredients = food.ingredients,
        count = 0,
        price = food.price,
        title = food.title,
        desc = food.desc,
        total = 0
    } = item;

    return {
        _id,
        desc,
        title,
        photoLocation,
        ingredients,
        price,
        discount: food.discount,
        count: count + quantity,
        total: total + quantity * (food.discount > 0 ? price - (price * food.discount) / 100 : price)
    };
};

const updateOrder = (state, foodId, quantity) => {
    const food = state.food.find((food) => foodId === food._id);
    const itemIndex = state.basketItems.findIndex(({_id}) => _id === foodId);
    const item = state.basketItems[itemIndex];//refactor |

    const newItem = updateBasketItem(food, item, quantity);
    console.log(newItem)
    return {
        ...state,
        orderTotal: state.orderTotal + quantity * (newItem.discount > 0 ? newItem.price - (newItem.price * newItem.discount) / 100 : newItem.price),
        basketItems: updateBasketItems(state.basketItems, newItem, itemIndex),
    };
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FOOD_LOADED':
            return {
                ...state,
                food: action.payload,
                loading: false,
                error: null
            };
        case 'FOOD_REQUESTED':
            return {
                ...state,
                food: [],
                loading: true,
                error: null
            };
        case 'FOOD_ERROR':
            return {
                ...state,
                food: [],
                loading: false,
                error: action.payload
            };
        case 'FOOD_ADDED_TO_BASKET':
            return updateOrder(state, action.payload, 1);
        case 'FOOD_REMOVED_FROM_BASKET':
            return updateOrder(state, action.payload, -1);
        case 'DELETE_ALL_FOOD_FROM_BASKET':
            const item = state.basketItems.find(({_id}) => _id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        default:
            return state;
    }
};

export default reducer;
