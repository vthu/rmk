import { CURRENT_PRODUCT_AVAILABLE, RESET_STATE } from '../actions/types';

const INITIAL_STATE = {
    address: null
}

const currentProduct = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CURRENT_PRODUCT_AVAILABLE:
            return {
                ...state, ...action.payload 
            }
        case RESET_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default currentProduct;