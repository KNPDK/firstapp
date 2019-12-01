const mongoose = require('mongoose')

const db_url = 'localhost'
const db_port = 27017
const db_name = 'my_db'

mongoose.connect(`mongodb://${db_url}:${db_port}/${db_name}`, {useNewUrlParser: true}).then(
    () => console.log('Database connection success'),
    (err) => console.log(err)
)