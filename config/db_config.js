const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;

var host = process.env.MONGO_URL || 'localhost'
var port = 27017
var db_name = 'firstapp_db'

const mongoDBConnect = callback => {
    mongodbClient.connect(
        `mongodb://root:root@${host}:${port}/${db_name}?authMechanism=SCRAM-SHA-1&authSource=admin`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(client => {
            console.log('Połączono!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoDBConnect;