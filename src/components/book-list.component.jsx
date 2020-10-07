import React, { useContext } from 'react';

import { BookContext } from '../contexts/book.context';

import BookDetails from './book-details.component';

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {
                    books.map((book) => {
                        return (
                            <BookDetails key={book.id} book={book} />
                        )
                    })
                }
            </ul>
        </div>
    ) : (
        <div className="empty">
            No books to read.
        </div>
    )
}

export default BookList;