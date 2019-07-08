const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const controller = require('./controller');
const {
    server_PORT,
    DB_CONNECTION_STRING
} = process.env;

massive(DB_CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch((err) => console.log(err));

const app = express ();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/products', controller.getAll);
app.post('/api/products', controller.create);
app.delete('/api/products:id', controller.delete);

app.listen(server_PORT, () => console.log(`Server is listening on ${server_PORT}`));