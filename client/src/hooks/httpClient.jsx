import axios from 'axios';

export const httpClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',

    },
});
// httpClient.interceptors.response.use(
//     function (response) {
//         if (response.headers['content-type'] && response.headers['content-type'].includes('application/json')) {
//             response.data = JSON.parse(response.data);
//         }
//         return response.data;
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

