const Product = require('../models/product.model');


module.exports.create = (req , res) => {
    Product.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
}