import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function UIActivityLoader({ visible = false }) {
	if (!visible) {
		return null;
	}
	return (
		<View style={styles.overlay}>
			<LottieView
				style={{ height: 80, alignSelf: "center" }}
				autoPlay
				loop
				source={require("../assets/animations/loader.json")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		backgroundColor: colors.white,
		opacity: 0.8,
		height: "100%",
		width: "100%",
		position: "absolute",
		top: 0,
		alignItems: "center",
		justifyContent: "center",
		left: 0,
		flex: 1,
		flexDirection: "column",
		zIndex: 1,
	},
});
