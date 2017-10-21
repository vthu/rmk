import axios from 'axios';
import { USER_AVAILABLE } from './types';

import { storeToken, getToken } from './utils';

export const login = (email, password) => async (dispatch, getState) => {
    try {
        const res = await axios.post('/api/users/login', { 
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
        storeToken(user.token);
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
        storeToken(user.token);
    } catch(err) {
        console.log(err);
    }
}


export const validateToken = (token) => async (dispatch, getState) => {
    try {
        const token = getToken();
        console.log('Token is ', token);
        if (token) {
            try {
                const res = await axios({
                    method: 'get',
                    url: '/api/token',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const user = res.data.user;
                dispatch({
                    type: USER_AVAILABLE,
                    payload: {
                        user: {
                            ...user,
                            isInit: true
                        }
                    }
                });
            } catch(err) {
                console.log(err);
                dispatch({
                    type: USER_AVAILABLE,
                    payload: {
                        user: {
                            isInit: true
                        }
                    }
                });
            }
        } else {
            dispatch({
                type: USER_AVAILABLE,
                payload: {
                    user: {
                        isInit: true
                    }
                }
            });
        }
    } catch(err) {

    }
}