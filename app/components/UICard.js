import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import AppText from "./AppText";

export default function UICard({
	image,
	description = "Red jacket for sale",
	price = 200,
}) {
	return (
		<View style={styles.cardWrapper}>
			<View style={styles.imageWrapper}>
				<Image style={styles.mainImageStyle} source={image} />
			</View>
			<View style={styles.priceDetails}>
				<AppText size="small">{description}</AppText>
				<AppText use="secondary" size="small">
					${price}
				</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardWrapper: {
		height: 250,
		width: "90%",
		alignSelf: "center",
		borderRadius: 15,
		marginVertical: 30,
		overflow: "hidden",
	},
	imageWrapper: {
		flex: 4,
	},
	mainImageStyle: {
		width: "100%",
		height: "100%",
	},
	priceDetails: {
		flex: 1,
		backgroundColor: "white",
		paddingLeft: 17,
		justifyContent: "space-around",
		paddingVertical: 10,
	},
});
