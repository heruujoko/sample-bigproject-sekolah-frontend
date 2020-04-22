import axios from './axios';

const getAllBooks = () => {
    return axios.get('/api/v1/books');
}

const getBookDetail = (bookId) => {
    return axios.get(`/api/books/${bookId}`);
}

const buyBook = (bookId, amount) => {
    return axios.post(`/api/books/${bookId}/buy`, { amount });
}

export default {
    getAllBooks,
    getBookDetail,
    buyBook
}