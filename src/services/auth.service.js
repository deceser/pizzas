import api from "./api";
import { removeAccessToken, setAccessToken } from "./localStorage.service";

export const signUpQery = async (phoneNumber, password) => {
	return api.post("auth/signup", { phoneNumber, password }).then((response) => {
		setAccessToken(response.headers.authorization);
		return response.data;
	});
};

export const signInQuery = async (phoneNumber, password) => {
	return api.post("auth/signin", { phoneNumber, password }).then((response) => {
		setAccessToken(response.headers.authorization);
		return response.data;
	});
};

export const logoutQuery = async () => {
	return api.get("auth/logout").then((response) => {
		removeAccessToken();
		return response.data;
	});
};
