import { PRODUCT_ADDED, PRODUCTS_AVAILABLE, RESET_STATE } from '../actions/types';


const INITAL_STATE = [];
const products = (state=INITAL_STATE, action) => {
    switch (action.type) {
        case PRODUCTS_AVAILABLE:
            return [ ...action.payload.products ];
        case PRODUCT_ADDED:
            return [ ...state, action.payload.product ];
        case RESET_STATE:
            return INITAL_STATE;
        default:
            return state;
    }
}

export default products;