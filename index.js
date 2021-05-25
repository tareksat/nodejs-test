const app = require('express')();

console.log('Version 1.0');

app.use('/', (req, res) => {
    res.send('Version 1.0')
});

app.listen(5000, () => {
    console.log('Server is running on port 5000...')
})