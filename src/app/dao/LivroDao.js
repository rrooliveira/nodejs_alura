class LivroDao {
    constructor(db) {
        this._db = db;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this._db.all('SELECT * FROM books', (error, results) => {
                if (error) {
                    return reject('Não foi possível listar os livros.');
                }

                return resolve(results);
            })
        })
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            this._db.get('SELECT * FROM books WHERE id = ?', [id], (error, results) => {
                if (error) {
                    return reject('Não foi possível obter o livro pelo código informado');
                }

                return resolve(results);
            })
        })
    }

    create(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`INSERT INTO books (title, price, description) VALUES (?, ?, ?)`,
            [
                book.title,
                book.price,
                book.description
            ],
            function(error) {
                if (error) {
                    return reject('Não foi possível cadastrar o livro.');
                }
                return resolve();
            }
            );
        });
    }

    update(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`UPDATE books SET title = ?, price = ?, description = ? WHERE id = ?`,
            [
                book.title,
                book.price,
                book.description,
                book.id
            ],
            function(error) {
                if (error) {
                    return reject('Não foi possível atualizar o livro.');
                }
                return resolve();
            }
            );
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`DELETE FROM books WHERE id = ?`,
            [
                id
            ],
            function(error) {
                if (error) {
                    return reject('Não foi possível remover o livro.');
                }
                return resolve();
            }
            );
        });
    }


}

module.exports = LivroDao;