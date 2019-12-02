const mongodbClient = require('mongodb').MongoClient

var host = process.env.MONGO_URL || 'localhost'
var port = 27017
var db_name = 'firstapp_db'


mongodbClient.connect(`mongodb://root:root@${host}:${port}/${db_name}?useUnifiedTopology=true`).then(
    () => { 
        process.stdout.write('Database connection: ')
        console.log("\x1b[32m", 'OK', "\x1b[37m")
    }
).catch(
    (err) => {
         process.stdout.write('Database connection: ')
         console.log("\x1b[31m", 'Fail', "\x1b[37m")
         console.log(err)
    }
)