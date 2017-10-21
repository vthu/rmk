import {  } from '../actions/types';


const INITAL_STATE = {
    name: null,
    price: null,
    stories: [],
    isInit: false
};
const prodInfo = (state=INITAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default prodInfo;