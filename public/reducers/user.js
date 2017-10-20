import { USER_AVAILABLE } from '../actions/types';

const INITIAL_STATE = {
    email: null,
    token: null
};

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_AVAILABLE:
            return {
                 ...state, ...action.payload.user
            }
        default:
            return state;
    }
}

export default user;