const passport = require('passport');
module.exports = router => {
    router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
        const token = req.get('Authorization').split('Bearer ')[1].trim();
        const user = req.user;
        res.json({ user: { email: user.email, token} });
    })
}