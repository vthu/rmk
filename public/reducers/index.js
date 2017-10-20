import { combineReducers } from 'redux';

import user from './user';
import orgs from './orgs';
import network from './network';

const rootReducer = combineReducers({
    user,
    orgs,
    network
});

export default rootReducer;