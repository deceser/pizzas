import axios from "axios";
import {API_URL} from "../config";
import {logout, setUserData} from "../redux/actions/user";
import store from "../redux/store";
import {
    getAccessToken,
    removeAccessToken,
    setAccessToken,
} from "./localStorage.service";
import {fetchUserData} from "./user.service";

const protectedApi = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

protectedApi.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();
        if (accessToken) {
            config.headers["Authorization"] = accessToken;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

protectedApi.interceptors.response.use(
    (response) => response,
    function (error) {
        const originalRequest = error.config;

        if (error.response.status === 403) {
            removeAccessToken();
            store.dispatch(logout());
            return Promise.reject(error);
        }

        if (
            error.response.status === 401 &&
            originalRequest.url === `token/refresh`
        ) {
            removeAccessToken();
            store.dispatch(logout());
            return Promise.reject(error);
        }
        if (
            (error.response.status === 400 || error.response.status === 411 || error.response.status === 409) &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            return protectedApi.get(`token/refresh`).then((res) => {
                if (res.status === 201) {
                    setAccessToken(res.headers.authorization);
                    protectedApi.defaults.headers.common["Authorization"] =
                        getAccessToken();
                    return protectedApi(originalRequest);
                }
            });
        }
        return Promise.reject(error);
    }
);

export default protectedApi;
