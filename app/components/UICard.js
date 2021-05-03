import React from "react";
import {
	ImageBackground,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
} from "react-native";
import AppText from "./AppText";

export default function UICard({
	imageUrl,
	description = "Red jacket for sale",
	price = 200,
	onPress,
}) {
	return (
		<TouchableOpacity style={styles.cardWrapper} onPress={onPress}>
			<View style={styles.imageWrapper}>
				<Image style={styles.mainImageStyle} source={{ uri: imageUrl }} />
			</View>
			<View style={styles.priceDetails}>
				<AppText size="small">{description}</AppText>
				<AppText use="secondary" size="small">
					${price}
				</AppText>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	cardWrapper: {
		height: 250,
		width: "90%",
		alignSelf: "center",
		borderRadius: 15,
		marginVertical: 5,
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
