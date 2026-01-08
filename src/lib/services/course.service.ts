import publicClient from '../api/public-client';
import apiClient from '../api/client';


export const course = async () => {
    const response = await publicClient.get(`/cours/`);
    return response.data;
};

export const feature = async () => {
    const response = await publicClient.get(`/features/`);
    return response.data;
}

export const module = async () => {
    const response = await apiClient.get(`/modules/`);
    return response.data;
}

