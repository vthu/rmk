const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = router => {
    router.get('/', (req, res) => {
        const { email, password } = req.body;
        //Regex for email & password
        if (!password || !email) {
            res.sendStatus(400);
        }
        const secret = req.app.kraken.get('jwtOptions:secret');
        User.findOne({ email }, (err, user) => {
            if (err) {
                res.sendStatus(500);
                return;
            }

            if (!user) {
                res.sendStatus(404);
                return;
            }

            const token = jwt.sign({ id: user._id }, secret);
            delete user.password;
            res.json({ token, user });
        });

    });

    router.post('/', (req, res) => {
        const { email, password } = req.body;
        //Regex for email & password
        if (!password || !email) {
            res.sendStatus(400);
            return;
        }
        const user = new User({ email, password });
        const secret = req.app.kraken.get('jwtOptions:secret');
        user.save((err, user) => {
            if (err || !user) {
                res.sendStatus(500);
                return;
            }
            const token = jwt.sign({ id: user._id }, secret);
            delete user.password;
            res.json({ token, user });
        });
    });
}