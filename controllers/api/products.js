const passport = require('passport');
const Product = require('../../models/product');

module.exports = (router) => {
    router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
        try {
            const orgAddress = req.query.orgAddress
            const products = await Product.find({ orgAddress }).exec();
            res.json({ products });
            return;
        } catch(err) {
            res.sendStatus(500);
        }
    });

    router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
        const { name, price, address, orgAddress } = req.body;

        const { _id } = req.user;
        console.log(req.body);
        const product = new Product({ _user: _id, name, price, address, orgAddress });
        product.save((err, product) => {
            if (!err) {
                res.json({ product });
                return;
            }
            res.sendStatus(500);
        });
    });
}