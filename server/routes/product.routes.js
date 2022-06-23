const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
    app.get('/api', ProductController.index); // this is the route that is called when the client makes a GET request to the server
    app.post('/api/products', ProductController.createProduct); // this is the route that is called when the client makes a POST request to the server
    app.get('/api/products', ProductController.getAllProducts); // this is the route that is called when the client makes a GET request to the server
    app.get('/api/products/:id', ProductController.getProduct); // this is the route that is called when the client makes a GET request to the server
}