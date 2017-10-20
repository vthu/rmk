import { ORGS_AVAILABLE, ORG_ADDED } from '../actions/types';

const INITIAL_STATE = []

const orgs = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ORGS_AVAILABLE:
            return [ ...action.payload.orgs ];
        case ORG_ADDED:
            return [ action.payload.org, ...state ];
        default:
            return state;
    }
}

export default orgs;