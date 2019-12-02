const mongodbClient = require('mongodb').MongoClient

console.log('Connection url => ', process.env.MONGO_URL);
var host = process.env.MONGO_URL || 'localhost'
var port = 27017
var db_name = 'firstapp_db'


mongodbClient.connect(`mongodb://root:root@${host}:${port}/${db_name}?useUnifiedTopology=true`).then(
    () => { console.log('Database connection success.')}
).catch(
    (err) => {console.log(err)}
)