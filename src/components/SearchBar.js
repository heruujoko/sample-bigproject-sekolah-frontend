import React from 'react';
import bookService from '../services/book.service';

const SearchBar = () => {

    const getBooks = async () => {
        const books = await bookService.getAllBooks(); 
    }

    return (
        <input onChange={e => getBooks(e.target.value)} />
    )
}

export default SearchBar;