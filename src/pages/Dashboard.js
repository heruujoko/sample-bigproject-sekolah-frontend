import React, { useEffect } from 'react';
import bookService from '../services/book.service';

const Dashboard = () => {

    const getBooks = async () => {
        const books = await bookService.getAllBooks(); 
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>

        </div>
    )
}

export default Dashboard;