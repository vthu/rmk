import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer, {} ,applyMiddleware(thunk));

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));

/* web3  */
const Web3 = require('web3');
window.addEventListener('load', function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
        window.web3.eth.getCoinbase((err, account) => window.defaultAccount = account);
    } else {
        alert('Install Metamask Chrome Plugin or Open this in Mist')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        //window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
});