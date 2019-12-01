const db_config = require('./config/db_config')
const server_config = require('./config/server_config')
const hostname = server_config.host
const port = server_config.port
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({msg: 'Hello 5 koło'})
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});