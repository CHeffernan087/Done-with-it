import React from "react";
import LottieView from "lottie-react-native";

export default function UIActivityLoader({ visible = false }) {
	if (!visible) {
		return null;
	}
	return (
		<LottieView
			style={{ height: 80, alignSelf: "center" }}
			autoPlay
			loop
			source={require("../assets/animations/loader.json")}
		/>
	);
}
