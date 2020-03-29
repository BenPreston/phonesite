// Phones json filesystem
var fs = require('fs');
var data = fs.readFileSync('phones.json');
var phones = JSON.parse(data);

// Start the server
console.log('server is starting');
var express = require('express');
var app = express();
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

// Get all of the phones
app.get('/phones', sendAll);

function sendAll(request, response) {
    response.send(phones)
}
