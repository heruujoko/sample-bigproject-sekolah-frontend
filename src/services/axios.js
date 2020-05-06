import axios from 'axios';
import localStorage from 'localStorage';

const instance = axios.create({
    baseURL: 'https://obstore.herokuapp.com',
    timeout: 2000,
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default instance;