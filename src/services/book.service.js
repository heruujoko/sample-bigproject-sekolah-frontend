import axios from './axios';

const getAllBooks = () => {
    return axios.get('/api/rest/book-category/findAll');
}

export default {
    getAllBooks,
}