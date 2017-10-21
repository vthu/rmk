import axios from 'axios';
import { REQUEST_STARTED, REQUEST_ENDED, PRODUCT_ADDED, PRODUCTS_AVAILABLE, RESET_STATE } from './types';

const OrganisationCompiled = require('../contracts/Organisation.json');
const ProductCompiled = require('../contracts/Product.json');


export const addStory = (description, imageURL, prodAddress, orgAddress) => async (dispatch, getState) => {
    const web3 = window.web3;
    if (!web3) {
        alert('Install Metamask Chrome Plugin or Open this in Mist');
    }

    const { network, user } = getState();
    if (!user.token || network.isLoading) {
        return;
    }
    try {
        if (!orgAddress || !prodAddress || !description || !imageURL) {
            alert('All fields are required');
            return;
        }
        dispatch({
            type: REQUEST_STARTED,
            payload: {
                network : {
                    message: 'Please wait while the block is getting added to blockchain'
                }
            }
        })
        const orgDeployed = new web3.eth.Contract(OrganisationCompiled.abi, orgAddress, { from: window.defaultAccount });
        const prodDeployed = new web3.eth.Contract(ProductCompiled.abi, prodAddress, { from: window.defaultAccount });
        const date = new Date();
        const story = description + '####' + imageURL + '####' + date.toISOString();
        await orgDeployed.methods.addStory(prodAddress, story).send({ from:  window.defaultAccount });
    } catch(err) {
        alert('Something went wrong. Please see console for more info')
        console.log(err);
    } finally {
        dispatch({
            type: REQUEST_ENDED
        });
    }
}