import { INFO_AVAILABLE } from '../actions/types';


const INITAL_STATE = {
    name: null,
    price: null,
    stories: [],
    isInit: false
};
const prodInfo = (state=INITAL_STATE, action) => {
    switch (action.type) {
        case INFO_AVAILABLE:
         return {
            isInit: true,
            ...action.payload.info
         };
        default:
            return state;
    }
}

export default prodInfo;