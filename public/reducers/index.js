import { combineReducers } from 'redux';

import user from './user';
import orgs from './orgs';
import network from './network';
import products from './products';
import currentProduct from './currentProduct';
import prodInfo from './prodInfo';

const rootReducer = combineReducers({
    user,
    orgs,
    network,
    products,
    currentProduct,
    prodInfo
});

export default rootReducer;