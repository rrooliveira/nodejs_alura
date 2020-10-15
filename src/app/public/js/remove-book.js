let tableBooks = document.querySelector('#books');

tableBooks.addEventListener('click', (evento) => {
    let elementClicked = evento.target;

    if (elementClicked.dataset.type == 'remocao') {
        let bookId = elementClicked.dataset.ref;
        fetch(`http://localhost:3000/books/${bookId}`, { method: 'DELETE' })
            .then(response => {
                let tr = elementClicked.closest(`#book_${bookId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }

});