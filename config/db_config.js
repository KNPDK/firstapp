const mongoose = require('mongoose')

console.log('Connection url => ', process.env.MONGO_URL);
var host = process.env.MONGO_URL || 'localhost'
var port = 27017
var db_name = 'firstapp_db'
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

console.log(`mongodb://root:root@${host}:${port}/${db_name}`)

mongoose.connect(`mongodb://root:root@${host}:${port}/${db_name}`, options).then(
    () => { console.log('Database connection success.') }
).catch(
    (err) => { console.log(err) }
)