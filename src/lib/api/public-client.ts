import axios from 'axios';

export default axios.create({
    baseURL: 'https://monalina-yz1q.onrender.com/api/v1',
    timeout: 15000,
});
