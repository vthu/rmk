import { USER_AVAILABLE } from '../actions/types';

const INITIAL_STATE = {
    email: null,
    _id: null
};

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_AVAILABLE:
            return {
                 ...sate, ...action.payload
            }
        default:
            return state;
    }
}

export default user;