const { Product } = require('../models/product.model');
module.exports.index = function (request, response) {
    response.json({
        message: "Something is working now, ya bish"
    });
}

module.exports.createProduct = (request, response) => { // request is the object that is sent to the server, response is the object that is sent back to the client
    const { title, price, description } = request.body; // destructuring assignment
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}