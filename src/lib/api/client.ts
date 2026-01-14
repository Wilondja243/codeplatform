import axios from 'axios';

export const API_BASE_URL = 'https://monalina-yz1q.onrender.com';
const apiClient = axios.create({
    baseURL: `${API_BASE_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    let token;
    try {
        const stored = localStorage.getItem('user-token');
        if (stored) {
            const parsed = JSON.parse(stored);
            token = parsed?.state?.userToken;
        }
    } catch (err) {
        console.warn('Erreur récupération token:', err);
    }

    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }

    return config;
});

export default apiClient;
