import React from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import UIButton from "../components/UIButton";

export default function LoginScreen({ navigation }) {
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
						styles={{ height: 50, borderRadius: 30 }}
						use="primary"
						onPress={() => {
							navigation.navigate("LoginScreen");
						}}
					>
						LOGIN
					</UIButton>
					<UIButton
						use="secondary"
						styles={{ marginTop: 15, height: 50, borderRadius: 30 }}
						onPress={() => {
							navigation.navigate("RegisterScreen");
						}}
					>
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
		paddingHorizontal: 30,
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
		fontSize: 23.5,
		fontWeight: "bold",
	},
	registerButton: {
		marginTop: 50,
	},
});
