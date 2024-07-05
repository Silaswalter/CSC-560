var express = require('express');
var app = express();
var fs = require("fs");

var user = {
    "user4": {
        "name": "Bob",
        "password" : "password4",
        "profession" : "teacher",
        "id" : 4
    }
}

app.post('/addUser', function (req, res) {
    // Frist read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

app.get('/:id', function (req, res) {
    //First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var user = users["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

app.get('/users', function (req, res) {
    //First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var data = JSON.parse( data );
        //var users = JSON.parse( data );
        //var user = users["user" + req.params.id]
        console.log( data );
        res.end( JSON.stringify(data));
    });
})

app.delete('/deleteUser', function (req, res) {
    //First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 2];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

/*
// Example using Express.js
const express = require('express');
const app = express();

// Example defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// Example specifying the port and starting the server
const port = process.env.PORT || 3000; // You can use environment variables for port configuration
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
*/

/*
// fileName : server.js
// Example using the http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/html'});

    // Write the response content
    res.write('<h1>Hello, Node.js HTTP Server!</h1>');
    res.end();
});

// Specify the port to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
    console.log('Node.js HTTP server is running on port '+ port);
});
*/