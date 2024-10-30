const Author = require('../models/author.model')



module.exports.getAll = (req, res) => {
    Author.find() 
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
}

module.exports.getOne = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch((err) => {
            res.status(400).json({
                success: false,
                message: "Author not found"
            })
        });
}

module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(data => res.json({ author: data }))
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.update = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(data => {
            res.json({ author: data })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.delete = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(data => {
            res.json({ result: data })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}