import { combineReducers } from 'redux';

import user from './user';
import orgs from './orgs';
import network from './network';
import products from './products';

const rootReducer = combineReducers({
    user,
    orgs,
    network,
    products
});

export default rootReducer;