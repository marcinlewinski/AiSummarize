import axios from 'axios';
import {useAuth} from "../providers/Auth/AuthProvider";

export const httpClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',

    },
});


httpClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const {kc} = useAuth();

        if (error.response && error.response.status === 401) {
            try {
                const refreshed = await kc.current.updateToken(5);
                if (refreshed) {
                    const originalRequest = error.config;
                    originalRequest.headers['Authorization'] = `Bearer ${kc.current.token}`;
                    return httpClient(originalRequest);
                } else {
                    throw new Error("Unauthorized");
                }
            } catch (refreshError) {
                kc.current.logout();
                throw error;
            }
        }
        throw error;
    }
)