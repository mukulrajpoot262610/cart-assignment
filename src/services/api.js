import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export const getProducts = () => api.get('/products');
export const getProduct = (id) => api.get(`/products/${id}`);

export default api;
