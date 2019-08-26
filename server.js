const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './')));

app.get('/', function(req, res) {
    console.log(__dirname, '__dirname');
    res.sendFile(path.join(__dirname + '/index.html'));
});

// console.log that your server is up and running
app.listen(80, () => console.log(`Listening on port 80`));
