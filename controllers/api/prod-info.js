const Web3 = require('web3');
const path = require('path');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const ProductCompiled = require(path.join(__dirname, '../../public/contracts/Product.json'));

module.exports = (router) => {
    router.get('/', async (req, res) => {
        const { address } = req.query;
        console.log('Address is ', address);
        if (!address) return;
        try {
            const deployedProduct = new web3.eth.Contract(ProductCompiled.abi, address);
            const product = await deployedProduct.methods.product().call();
            console.log(product);
            const name  = product[0];
            const price = product[1];
            const stories = [];
            console.log(name, price);
            let i = 0;
            while(i > -1) {
                try {
                    const story = await deployedProduct.methods.stories(i).call();
                    stories.push(story);
                    ++i;
                } catch(err) {
                    console.log('Errr ', err);
                    break;
                }
            }
           const _stories =  processStories(stories);
           res.json({
                info: {
                    name,
                    price,
                    stories: _stories
                }
           })
        } catch(err) {
            console.log('Error is ', err);
            res.sendStatus(500);
        }
    })
}


const processStories = (stories) => {
    return stories.map(story => {
        const _story = story.split('####');
        return {
            description: _story[0],
            imageURL: _story[1],
            date: new Date(_story[2]).toDateString() + ' ' + new Date(_story[2]).toTimeString().split(' ')[0]
        };
    });
}