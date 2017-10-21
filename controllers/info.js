const path = require('path');
module.exports = router => {
    router.get('/:address', (req, res) => {
       res.sendFile(path.resolve(__dirname, '../public/index.html'))
    });
};