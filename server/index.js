require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller.js');

const { SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

app.get('/api/inventory', ctrl.getInventory)

app.post('/api/product', ctrl.createProduct)




app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));