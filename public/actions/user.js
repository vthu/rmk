import axios from 'axios';

export const login = (email, password) => async (dispatch, getState) => {
    try {
        const user = await axios.get('/api/users');
        console.log(user);
    } catch(err) {
        console.log(err);
    }
}


export const signup = (email, password) => async (dispatch, getState) => {
    try {
        const user = await axios.post('/api/users', { 
            email,
            password
        });
        console.log(user);
    } catch(err) {
        console.log(err);
    }
}