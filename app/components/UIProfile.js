import React from "react";
import { StyleSheet, Image, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function UIProfile({ image, title, subText }) {
	return (
		<View style={styles.sellerDetails}>
			<View style={[styles.profileDimensions, styles.profilePic]}>
				<Image source={image} style={styles.profilePicImage} />
			</View>
			<View style={[styles.profileDimensions, styles.profileDescription]}>
				<AppText fontWeight="bold" size="sm">
					{title}
				</AppText>
				<AppText size="sm" color="medium" marginTop={7.5}>
					{subText}
				</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsWrapper: {
		flex: 6,
	},
	profileDescription: {
		flex: 1,
		paddingLeft: 10,
		alignItems: "flex-start",
	},
	profileDimensions: {
		height: 60,
	},
	profilePic: {
		width: 60,
		height: 60,
		borderRadius: 60,
		overflow: "hidden",
	},
	profilePicImage: {
		height: "100%",
		width: "100%",
	},

	sellerDetails: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 20,
		height: 90,
	},
});
