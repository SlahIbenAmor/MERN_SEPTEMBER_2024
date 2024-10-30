const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/authors', AuthorController.getAll);
    app.get('/authors/:id', AuthorController.getOne);
    app.post('/authors/new', AuthorController.create);
    app.put('/authors/:id/edit', AuthorController.update);
    app.delete('/authors/:id', AuthorController.delete);
}