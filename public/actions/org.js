import axios from 'axios';
import { ORGS_AVAILABLE, REQUEST_STARTED, REQUEST_ENDED, ORG_ADDED } from './types';
import { fetchProducts } from './product';

const OrganisationCompiled = require('../contracts/Organisation.json');


export const createOrg = (orgName) => async (dispatch, getState) => {
    const web3 = window.web3;

    if (!web3) {
        alert('Install Metamask Chrome Plugin or Open this in Mist');
    }

    const { network, user } = getState();
    if (!user.token || network.isLoading) {
        return;
    }
    const Organisation = new web3.eth.Contract(OrganisationCompiled.abi);
    try {
        dispatch({
            type: REQUEST_STARTED,
            payload: {
                network : {
                    message: 'Please wait while the block is getting added to blockchain'
                }
            }
        })
        const result = await Organisation.deploy({
            data: OrganisationCompiled.unlinked_binary,
            arguments: [orgName]
        }).send({ from:  window.defaultAccount });
        const payload = {
            name: orgName,
            address: result.options.address
        };
        const response = await axios({
            method: 'post',
            url: '/api/orgs',
            headers: {
                Authorization: `Bearer ${user.token}`
            },
            data: payload
        });
        dispatch({
            type: ORG_ADDED,
            payload: {
                org: response.data.org
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
};

export const fetchOrgs = () => async (dispatch, getState) => {
    const { user } = getState();
    if (user.token) {
        const res = await axios({
            method: 'get',
            url: '/api/orgs',
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        const orgs = res.data.orgs;
        dispatch({
            type: ORGS_AVAILABLE,
            payload: {
                orgs
            }
        });
    }  
}