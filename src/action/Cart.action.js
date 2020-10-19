export const addToCart = (product) => {
    return{
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const removeToCart = (product) => {
    return{
        type: 'REMOVE_TO_CART',
        payload: product
    }
}

export const increaseAmount = (productID) => {
    return{
        type: 'INCREASE_AMOUNT',
        payload: productID
    }
}

export const reductionAmount = (productID) => {
    return{
        type: 'REDUCTION_AMOUNT',
        payload: productID
    }
}