import axios from 'axios';

export const API_BASE_URL = 'https://monalina.onrender.com';
const apiClient = axios.create({
    baseURL: `${API_BASE_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(async (config) => {
    const stored = await localStorage.getItem('user-token');
    const parsed = JSON.parse(stored as any);
    const token = parsed?.state?.userToken;

    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});

export default apiClient;
