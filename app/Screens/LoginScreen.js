import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import UIButton from "../components/UIButton";

export default function LoginScreen() {
	return (
		<View style={styles.wrapper}>
			<ImageBackground
				blurRadius={2}
				style={styles.backgroundImageStyles}
				source={require("../assets/background.jpg")}
			>
				<View style={styles.imageWrapper}>
					<View style={styles.logoWrapper}>
						<Image
							style={styles.logoStyle}
							source={require("../assets/logo-red.png")}
						/>
						<Text style={styles.sloganStyle}>Sell what you don't need</Text>
					</View>
				</View>
				<View style={styles.buttonWrapper}>
					<UIButton
						use="primary"
						onPress={() => {
							alert("Hey there");
						}}
					>
						LOGIN
					</UIButton>
					<UIButton use="secondary" styles={{ marginTop: 15 }}>
						REGISTER
					</UIButton>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	imageWrapper: {
		flex: 7,
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonWrapper: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center",
	},

	logoWrapper: {
		height: 100,
		top: 100,
		position: "absolute",
		alignItems: "center",
	},
	backgroundImageStyles: {
		flex: 1,
		resizeMode: "stretch",
	},
	logoStyle: {
		width: 80,
		height: 80,
		aspectRatio: 1,
	},
	sloganStyle: {
		marginTop: 20,
		fontSize: 20,
	},
	registerButton: {
		marginTop: 50,
	},
});
