const dbConn = require('../config/db_config');

module.exports = class Products
{
    constructor(prname, prprice, prdesc)
    {
        this.prname = prname;
        this.prprice = prprice;
        this.prdesc = prdesc;
    }

    findAll()
    {
        var collection = dbConn().collection('products');

        return collection.find().toArray()
            .then(products => {
                console.log(products);
                return products;
            })
            .catch(err => {
                console.log(err);
            });

    }

    add()
    {
        var collection = dbConn().collection('products');

        return collection.insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
}
