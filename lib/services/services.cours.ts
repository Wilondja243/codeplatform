import { apiClient } from '../client/api-client';

export const getCourses = async () => {
    const { data } = await apiClient.get(`/cours`);
    return data;
};
