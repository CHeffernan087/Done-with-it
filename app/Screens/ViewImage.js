import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImage() {
	return (
		<View style={styles.mainWrapper}>
			<View style={styles.topBar}>
				<View style={[styles.button, styles.closeButton]}>
					<MaterialCommunityIcons name="close" size={35} color="white" />
				</View>
				<View style={[styles.button, styles.deleteButton]}>
					<MaterialCommunityIcons
						name="trash-can-outline"
						size={35}
						color="white"
					/>
				</View>
			</View>
			<View style={styles.imageWrapper}>
				<Image
					style={styles.mainImage}
					source={require("../assets/chair.jpg")}
				/>
			</View>
			<View style={styles.bottomPadding}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainWrapper: {
		flex: 1,
		backgroundColor: "#000",
	},
	topBar: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	bottomPadding: {
		flex: 1,
	},
	imageWrapper: {
		flex: 5,
		backgroundColor: "dodgerblue",
	},
	button: {
		height: 40,
		width: 40,

		marginLeft: 8,
		marginRight: 8,
		top: 30,
		alignItems: "center",
		justifyContent: "center",
	},

	mainImage: {
		height: "100%",
		width: "100%",
	},
});
