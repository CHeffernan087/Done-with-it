import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "AUTH_TOKEN";

const storeToken = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log(error);
	}
};

const getToken = async () => {
	try {
		const authToken = await SecureStore.getItemAsync(key);
		return authToken;
	} catch (error) {
		console.log(error);
		return null;
	}
};

const removeToken = () => {
	try {
		SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log("Error removing hte auth token ", error);
	}
};

const getUser = async () => {
	try {
		const token = await getToken();
		if (token) {
			const user = jwtDecode(token);
			return user;
		} else {
			return null;
		}
	} catch (error) {}
};

export default {
	getToken,
	getUser,
	removeToken,
	storeToken,
};
