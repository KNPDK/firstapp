const mongoose = require('mongoose')

var host = 'localhost'
var port = 27017
var db_name = ''
var url
var options = {
    useNewUrlParser: true
}

mongoose.connect(`mongodb://${host}:${port}/${db_name}`).then(
    () => { console.log('Database connection success.') }
).catch(
    (err) => { console.log(err) }
)