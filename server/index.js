const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');
const {
    PORT,
    DB_CONNECTION_STRING
} = process.env;

massive(process.env.DB_CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(() => console.log(err));

const app = express ();

app.use(bodyParser(JSON));

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));