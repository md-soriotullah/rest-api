const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');


// init environment veriable
const PORT = process.env.PORT || 8080;

// express init
const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));

// listen port
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});

