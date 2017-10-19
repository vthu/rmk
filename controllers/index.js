const path = require('path');
module.exports = router => {
    router.get('/', (req, res) => {
       res.sendFile(path.resolve(__dirname, '../public/index.html'))
    });
};