import axios from 'axios'
import queryString from 'query-string'
import apiConfig from './apiConfig'

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({ ...params, api_key: apiConfig.apiKey })
});

// Add a request interceptor
axios.interceptors.request.use(async (config) => config);
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response && response.data) {
        return response.data
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClient;