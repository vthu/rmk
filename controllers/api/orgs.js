const jwt = require('jsonwebtoken');
const passport = require('passport');
const Org = require('../../models/org');

module.exports = (router) => {
    router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
        Org.findAll({ _user: req.user._id }, (err, orgs) => {
            res.json({ orgs });
        })
    });

    router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
        console.log(req.body);
        const { name, address } = req.body;
        const { _id } = req.user;
        const org = new Org({ _user: _id, name, address });
        org.save((err, org) => {
            console.log(err);
            res.json({ org });
        });
    });
}