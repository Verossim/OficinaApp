import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/codificar/oficina'
});

export default api;
