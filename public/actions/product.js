import axios from 'axios';
import { REQUEST_STARTED, REQUEST_ENDED, PRODUCT_ADDED, PRODUCTS_AVAILABLE, RESET_STATE, CURRENT_PRODUCT_AVAILABLE } from './types';

const OrganisationCompiled = require('../contracts/Organisation.json');
const ProductCompiled = require('../contracts/Product.json');

export const createProduct = (name, price, orgAddress) => async (dispatch, getState) => {
    const web3 = window.web3;
    
    if (!web3) {
        alert('Install Metamask Chrome Plugin or Open this in Mist');
    }
    
    const { network, user } = getState();
    if (!user.token || network.isLoading) {
        return;
    }
    if (!orgAddress || !name || !price) {
        alert('All fields are compulsory')
        return;
    }
    try {
        dispatch({
            type: REQUEST_STARTED,
            payload: {
                network : {
                    message: 'Please wait while the block is getting added to blockchain'
                }
            }
        })
        const orgDeployed = new web3.eth.Contract(OrganisationCompiled.abi, orgAddress, { from: window.defaultAccount });
        const result = await orgDeployed.methods.addProduct(name.trim(), price.trim()).send({
            from: window.defaultAccount
        });
        orgDeployed.methods.lastAddedProduct().call(async (err, result) => {
            if (err) {
                throw new Error('Something went wrong while calling lastAddedProduct');
            }
            const payload = {
                name,
                price,
                address: result
            };
            const response = await axios({
                method: 'post',
                url: '/api/products',
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
                data: {
                    orgAddress,
                    ...payload
                }
            });
            dispatch({
                type: PRODUCT_ADDED,
                payload: {
                    product: response.data.product
                }
            });
        });
    } catch(err) {
        alert('Something went wrong. Please see console for more info')        
        console.log(err);
    } finally {
        dispatch({
            type: REQUEST_ENDED
        });
    }
}

export const fetchProducts = (orgAddress) => async (dispatch, getState) => {
    const web3 = window.web3;
    
    if (!web3) {
        alert('Install Metamask Chrome Plugin or Open this in Mist');
    }
    
    const { network, user } = getState();
    if (!user.token || network.isLoading) {
        return;
    }
    if (!orgAddress) {
        alert('All fields are compulsory')
        return;
    }

    dispatch({
        type: RESET_STATE
    });

    dispatch({
        type: REQUEST_STARTED,
        payload: {
            network : {
                message: 'Please wait while we are fetching products'
            }
        }
    });


    try {
        const response = await axios.get('/api/products', {
            headers: {
                Authorization: `Bearer ${user.token}`
            },
            params: {
                orgAddress
            }
        });
        dispatch({
            type: PRODUCTS_AVAILABLE,
            payload: {
                products: response.data.products
            }
        });
    } catch(err) {
        alert('Something went wrong. Please see console for more info')        
        console.log(err);
    } finally {
        dispatch({
            type: REQUEST_ENDED
        });
    }
}

export const setCurrentProduct = (address) => ({
    type: CURRENT_PRODUCT_AVAILABLE,
    payload: {
        address
    }
})