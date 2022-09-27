<img src"./images/2nd.jpg" >

## Rest API with express server

This is our first rest api for react js apps


##  First clone this repo and then install its packages

```console
$ npm install
```
## Server stracture

```JS
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

```

## Packages

* Express JS
* Nodemon
* Colors
* dotenv
* multer
* nodemailer

##  Site Link
[My site](http://soriotullah.com)