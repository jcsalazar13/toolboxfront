import axios from "axios";

const baseUrl = 'http://localhost:3001/api/';

export const apiCall = (url, data, headers, method) => axios ({
    method,
    url: baseUrl + url,
    data,
    headers
});
