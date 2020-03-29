import axios from 'axios';

const api = axios.create({
  baseURL: 'http://187.112.177.157:3333',
});

export default api;