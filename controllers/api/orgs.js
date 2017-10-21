const passport = require('passport');
const Org = require('../../models/org');

module.exports = (router) => {
    router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
        try {
            const orgs = await Org.find({ _user: req.user._id }).exec();
            res.json({ orgs });
            return;
        } catch(err) {
            res.sendStatus(500);
        }
        
    });

    router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
        console.log(req.body);
        const { name, address } = req.body;
        const { _id } = req.user;
        const org = new Org({ _user: _id, name, address });
        org.save((err, org) => {
            if (!err) {
                res.json({ org });
                return;
            }
            res.sendStatus(500);
        });
    });
}