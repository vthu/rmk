import axios from 'axios';

export const fetchProductInfo = (address) => async (dispatch, getState) => {
    if (!address) {
        return;
    }

    const res = await axios({
        method: 'get',
        url: '/api/prod-info',
        params: {
            address
        }
    });
    
    console.log(res.data);
}