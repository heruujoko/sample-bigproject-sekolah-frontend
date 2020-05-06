import React, { useEffect, useState } from 'react';
import bookService from '../services/book.service';
import Appendix from '../components/Appendix';
import LoginModal from '../components/LoginModal';


const Dashboard = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const resp = await bookService.getAllBooks();
        console.log(resp);
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <div>
            <Appendix />
            <LoginModal />
        </div>
    )
}

export default Dashboard;