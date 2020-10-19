const initialState = JSON.parse(sessionStorage.getItem('Cart')) || {listProduct: [],total : 0};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newState = {...state};
            const hasProduct = newState.listProduct.findIndex((e) => e.id === action.payload.id);
            const listProduct = newState.listProduct;
            if (hasProduct !== -1){
                newState.listProduct = [
                    ...listProduct.slice(0,hasProduct),
                    {...action.payload,amount: newState.listProduct[hasProduct].amount + 1},
                    ...listProduct.slice(hasProduct+1)
                ]
            }else {
                newState.listProduct = [...listProduct,{...action.payload,amount: 1}]
            }
            newState.total = (action.payload.isSale)
                ? newState.total + action.payload.newPrice
                : newState.total + action.payload.price;
            sessionStorage.setItem('Cart',JSON.stringify(newState));
            return newState;
        }

        case 'REMOVE_TO_CART' : {
            let newState = {...state};
            let productSelect = newState.listProduct.findIndex((e) => e.id === action.payload);
            newState.listProduct = [
                ...state.listProduct.slice(0,productSelect),
                ...state.listProduct.slice(productSelect+1)
            ];
            sessionStorage.setItem('Cart',JSON.stringify(newState));
            return newState;
        }

        case 'INCREASE_AMOUNT': {
            let newState = {...state};
            let productSelect = newState.listProduct.findIndex((e) => e.id === action.payload);
            let price = (state.listProduct[productSelect].isSale) ? state.listProduct[productSelect].newPrice : state.listProduct[productSelect].price;
            newState.listProduct = [
                ...state.listProduct.slice(0,productSelect),
                {...state.listProduct[productSelect],amount: state.listProduct[productSelect].amount + 1},
                ...state.listProduct.slice(productSelect+1)
            ];
            newState.total = state.total + price;
            sessionStorage.setItem('Cart',JSON.stringify(newState));
            return newState;
        }

        case 'REDUCTION_AMOUNT': {
            let newState = {...state};
            let productSelect = newState.listProduct.findIndex((e) => e.id === action.payload);
            let price = (state.listProduct[productSelect].isSale) ? state.listProduct[productSelect].newPrice : state.listProduct[productSelect].price;
            if (newState.listProduct[productSelect].amount > 1){
                newState.listProduct = [
                    ...state.listProduct.slice(0,productSelect),
                    {...state.listProduct[productSelect],amount: state.listProduct[productSelect].amount -1},
                    ...state.listProduct.slice(productSelect+1)
                ]
            }
            newState.total = state.total - price;
            sessionStorage.setItem('Cart',JSON.stringify(newState));
            return newState;
        }

        default:
            return state;
    }
}

export default CartReducer;