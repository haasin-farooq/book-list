import React, { createContext, createElement, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Name of the Wind', author: 'Patrick Rothfuss', id: 1},
        {title: 'The Final Empire', author: 'Brandon Sanderson', id: 2}
    ]);

    const addBook = (title, author) => {
        setBooks([
            ...books,
            {title, author, id: uuidv4()}
        ])
    }

    const removeBook = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks([
            ...updatedBooks
        ])
    }

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;