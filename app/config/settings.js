import Constants from "expo-constants";

const settings = {
	dev: {
		apiUrl: "https://done-with-it-backend-087.herokuapp.com/api",
		// apiUrl: "http://192.168.8.159:9000/api",
	},
	qa: {
		apiUrl: "http://192.168.8.159:9000/api",
	},
	prod: {
		apiUrl: "http://192.168.8.159:9000/api",
	},
};

const getCurrentSettings = () => {
	if (__DEV__) {
		return settings["dev"];
	} else if (Constants.manifest.releaseChannel === "qa") {
		return settings["qa"];
	} else {
		return settings["prod"];
	}
};

export default getCurrentSettings();
