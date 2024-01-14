import axios from 'axios';
import {useAuth} from "../providers/Auth/AuthProvider";

export const httpClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
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
        console.log(kc);
        if (error.response && error.response.status === 401) {
            try {
                const refreshed = await kc.current.updateToken();
                if (refreshed) {
                    const originalRequest = error.config;
                    originalRequest.headers.common[
                        "Authorization"
                        ] = `Bearer ${kc.current.token}`
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