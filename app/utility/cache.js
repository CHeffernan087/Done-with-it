import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const EXPIRY_IN_MINUTES = 5;

const store = async (key, value) => {
	const item = {
		value,
		timeStamp: Date.now(),
	};
	try {
		await AsyncStorage.setItem(key, JSON.stringify(item));
	} catch (error) {
		console.log(error);
	}
};

const itemExpired = (item) => {
	const now = dayjs();
	const storedTime = dayjs(item.timeStamp);
	const diff = now.diff(storedTime, "minute");
	const isExpired = diff > EXPIRY_IN_MINUTES;
	return isExpired;
};

const get = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		const item = JSON.parse(value);

		if (!item) {
			return null;
		}

		if (itemExpired(item)) {
			AsyncStorage.removeItem(key);
			return null;
		}

		return item.value;
	} catch (error) {
		console.log(error);
	}
};

export default {
	store,
	get,
};
