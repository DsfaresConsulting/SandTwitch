const express = require('express');
const app = express();
var server = require('http').createServer(app);
var path = require('path');
const port = process.env.PORT || 5656;

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.use(express.static(path.join(__dirname, 'public')), function(req, res) {
});








server.listen(port, () => {
    console.log('listening on %d', port);
});