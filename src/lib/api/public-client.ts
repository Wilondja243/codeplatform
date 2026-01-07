import axios from 'axios';

export default axios.create({
    baseURL: 'https://monalina.onrender.com/api/v1',
    timeout: 15000,
});
