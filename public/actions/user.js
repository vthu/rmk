import axios from 'axios';
import { USER_AVAILABLE } from './types';

export const login = (email, password) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/api/users/signup', { 
            email,
            password
        });
        const user = res.data.user;
        dispatch({
            type: USER_AVAILABLE,
            payload: {
                user
            }
        });
    } catch(err) {
        console.log(err);
    }
}


export const signup = (email, password) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/api/users/signup', { 
            email,
            password
        });
        const user = res.data.user;
        dispatch({
            type: USER_AVAILABLE,
            payload: {
                user
            }
        });
    } catch(err) {
        console.log(err);
    }
}