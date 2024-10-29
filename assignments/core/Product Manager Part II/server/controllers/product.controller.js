const Product = require('../models/product.model');


module.exports.create = (req , res) => {
    Product.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
}

module.exports.getAll = (req , res) => {
    Product.find()
    .then(data => res.json(data))
    .catch(err => res.json(err));
}

module.exports.getOne = (req , res) => {
    Product.findOne({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json(err));
}
