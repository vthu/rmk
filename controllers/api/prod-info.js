const Web3 = require('web3');
const path = require('path');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const ProductCompiled = require(path.join(__dirname, '../../public/contracts/Product.json'));

module.exports = (router) => {
    router.get('/', (req, res) => {
        const { address } = req.query;
        if (!address) return;
        const deployedProduct = new web3.eth.Contract(ProductCompiled.abi, address);
        const product = deployedProduct.methods.product().call((err, result) => {
            console.log('Errr ', err)
            console.log('Result', result);
        });
        // const name = product[0];
        // const price = product[1].toString(10);
        // console.log(name, price);
        // const stories = [];
        // let i = 0;
        // while(i > -1) {
        //     try {
        //         const story = deployedProduct.stories(i);
        //         stories.push(story);
        //         ++i;
        //     } catch(err) {
        //         break;
        //     }
        // }
        res.json({ address });
    })
}