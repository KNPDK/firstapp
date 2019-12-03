const mongoDBConnect = require('./config/db_config');
const server_config = require('./config/server_config');
const hostname = server_config.host;
const port = server_config.port;
const express = require('express');
const app = express()
// todo: const errorsController = require('./controller/errors');
const productsController = require('./controller/products');

app.get('/', (req, res) => {
    res.send({msg: 'Hello 5 koło'})
});

mongoDBConnect(client => {
    console.log(client);
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});