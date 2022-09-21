import axios from 'axios';
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) =>
        queryString.stringify({
            ...params,
            language: "en-US",
        }),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default axiosClient;