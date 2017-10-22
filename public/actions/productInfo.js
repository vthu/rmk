import axios from 'axios';
import { INFO_AVAILABLE } from './types';


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
    
    const info = res.data.info;
    console.log(info);
    dispatch({
        type: INFO_AVAILABLE,
        payload: {
            info
        }
    });
}