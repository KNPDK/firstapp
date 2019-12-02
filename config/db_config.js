const mongoose = require('mongoose')

var host = process.env.MONGO_URL || 'localhost'
var port = 27017
var db_name = ''
var options = {
    useNewUrlParser: true
}

mongoose.connect(`mongodb://${host}:${port}/${db_name}`, options).then(
    () => { console.log('Database connection success.') }
).catch(
    (err) => { console.log(err) }
)