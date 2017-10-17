module.exports = router => {
    router.get('/', (req, res) => {
        console.log('Entering');
        res.set('Set-Cookie', 'hello=world');
        res.end('done');
    });
};