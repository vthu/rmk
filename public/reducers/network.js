import { REQUEST_STARTED, REQUEST_ENDED } from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    message: null
}

const network = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REQUEST_STARTED:
            return {
                ...action.payload.network, isLoading: true
            }
        case REQUEST_ENDED:
            return {
                isLoading: false,
                message: null
            }
        default:
            return state;
    }
}

export default network;