import axios from "axios";
import {API_URL} from "../config";
import {getAccessToken, removeAccessToken, setAccessToken} from "./localStorage.service";
import store from "../redux/store";
import {logout} from "../redux/actions/user";
import {ROLES} from "../utils/constants";

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

api.interceptors.request.use(
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

api.interceptors.response.use(
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
            return Promise.reject(error.previousRequest);
        }
        if (
            (error.response.status === 400 || error.response.status === 411) &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            return api.get(`token/refresh`).then((res) => {
                if (res.status === 201) {
                    setAccessToken(res.headers.authorization);
                    api.defaults.headers.common["Authorization"] = getAccessToken();
                    return api(originalRequest);
                }
            }).catch(() => {
                originalRequest.headers.Authorization = "";
                return api(originalRequest);
            });
        }
        return Promise.reject(error);
    }
);

export default api;
