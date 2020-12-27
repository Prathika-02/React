import {combineReducers} from 'redux';
import customersReducer from './customersReducer';
import errorReducer from './errorReducer';
import productsReducer from './productsReducer';
import paymentsReducer from './paymentsReducer';
import orderReducer from './orderReducer';
export default combineReducers({
    errors:errorReducer,
    customers:customersReducer,
    products:productsReducer,
    payments:paymentsReducer,
    order:orderReducer
});