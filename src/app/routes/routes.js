const db = require('../../config/database');
const LivroDao = require('../dao/LivroDao');

module.exports = (app) => {
    app.get('/', (req, resp) => {
        resp.end('Página Inicial');
    });

    app.get('/books', (req, resp) => {
        const livroDao = new LivroDao(db);
        livroDao.getAll()
            .then(books =>
                resp.marko(
                    require('../views/books/list.marko'),
                    {
                        books: books
                    }
                )
            )
            .catch(error => console.log(error));
    });

    app.get('/books/form', (req, resp) => {
        resp.marko(require('../views/books/form.marko'), { book:{}});
    });

    app.post('/books', (req, resp) => {
        const livroDao = new LivroDao(db);
        livroDao.create(req.body)
            .then(resp.redirect('/books'))
            .catch(error => console.log(error));
    });

    app.get('/books/:id', (req, resp) => {
        const livroDao = new LivroDao(db);
        livroDao.getById(req.params.id)
            .then(book =>
                resp.marko(
                    require('../views/books/form.marko'),
                    {
                        book: book
                    }
                )
            )
            .catch(error => console.log(error));
    })

    app.put('/books', (req, resp) => {
        const livroDao = new LivroDao(db);
        livroDao.update(req.body)
            .then(resp.redirect('/books'))
            .catch(error => console.log(error));
    });

    app.delete('/books/:id', (req, resp) => {
        const livroDao = new LivroDao(db);
        livroDao.delete(req.params.id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));

    })
};