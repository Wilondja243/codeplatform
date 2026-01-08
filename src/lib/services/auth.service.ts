import apiClient from '../api/client';
import publicClient from '../api/public-client';

export interface LoginRequest {
    email: string;
    password: string;
}

export const login = async (data: LoginRequest) => {
    const response = await publicClient.post<LoginRequest>(
        '/account/login/',
        data,
    );
    return response.data;
};

export const register = async (userData: any) => {
    const response = await publicClient.post(`/account/register/`, userData);
    return response.data;
};

export const getUsers = async () => {
    const response = await apiClient.get(`/users/`);
    return response.data;
};

export const getUser = async () => {
    const response = await apiClient.get(`/user/me/`);
    return response.data;
};
