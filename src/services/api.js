import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.8:8080',
});

// api.addResponseTransform(response => {
//     if (!response.ok) throw response;
// });

export default api;
