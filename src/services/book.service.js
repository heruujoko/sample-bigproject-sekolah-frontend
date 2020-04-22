import axios from './axios';

const getAllBooks = () => {
    return axios.get('v1/books');
}

const getBookDetail = (bookId) => {
    return axios.get(`books/${bookId}`);
}

const buyBook = (bookId, amount) => {
    return axios.post(`books/${bookId}/buy`, { amount });
}

export default {
    getAllBooks,
    getBookDetail,
    buyBook
}