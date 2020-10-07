import React, { useContext } from 'react';

import { BookContext } from '../contexts/book.context';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Haasin's Reading List</h1>
            <p>Currently you have {books.length} books</p>
        </div>
    )
}

export default Navbar;