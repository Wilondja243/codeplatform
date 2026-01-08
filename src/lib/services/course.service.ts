import publicClient from '../api/public-client';


export const course = async () => {
    const response = await publicClient.get(`/cours/`);
    return response.data;
};

export const feature = async () => {
    const response = await publicClient.get(`/features/`);
    return response.data;
}

