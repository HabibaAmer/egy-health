import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});


// axiosInstance.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
//     return Promise.resolve(error);
//   });

export default axiosInstance;