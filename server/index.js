const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');
const {
    server_PORT,
    DB_CONNECTION_STRING
} = process.env;

massive(DB_CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(() => console.log(err));

const app = express ();

app.use(bodyParser(JSON));

app.get('/api/products', controller.getAll);
app.post('/api/products', controller.create);

app.listen(server_PORT, () => console.log(`Server is listening on ${server_PORT}`));