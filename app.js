// Challenge 1
// Write the one line of code that would cause the server to listen to HTTP 'GET' requests sent to "/algorithms" and respond with "derived from a mathematician's name".

// Challenge 2
// Starting with the existing code, show how you would modify the "/zagster" request handler, such that the response would contain all of the data in the database.

// Challenge 3
// Create an entirely new request handler that:

// listens to requests for "/rides/count"
// responds with some data containing the total number of rides in the database

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next();
});
app.use('/', require('./routes/examples'));
app.use('/rides', require('./routes/rides'));
app.listen(PORT);


app.get('/algorithms', (request, response) => {
    response.send('derived from a mathematicians name')
})
app.get('/zagster', (request, response) => {
    const pool = new Pool({
        connectionString: DATABASE_URL,
    })
    pool.query('SELECT (*) FROM rides', (err,results) => {
        response.send(results)
        pool.end
    })
})
app.get('/rides/count', (request, response) => {
    const pool = new Pool({
        connectionString: DATABASE_URL,
    })
    pool.query('SELECT COUNT (*) FROM rides', (err,results) => {
        response.send(results)
        pool.end
    })
})