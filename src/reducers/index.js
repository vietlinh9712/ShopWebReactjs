import CartReducer from "./Cart";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    Cart: CartReducer
});

export default rootReducer;