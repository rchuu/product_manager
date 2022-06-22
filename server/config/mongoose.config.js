const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/productsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("we have established a connection to db, bishes"))
    .catch(err => console.log("fk u, we couldn't connect to db, bishes", err));