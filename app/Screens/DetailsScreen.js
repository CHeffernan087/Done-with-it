import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import UIProfile from "../components/UIProfile";
import UIScreen from "../components/UIScreen";
import { Image } from "react-native-expo-image-cache";

export default function DetailsScreen({ route }) {
	const listing = route.params.item;
	console.log(listing);
	return (
		<UIScreen>
			<View style={styles.imageWrapper}>
				<Image uri={listing.images[0].url} style={styles.mainImageStyle} />
			</View>
			<View style={styles.detailsWrapper}>
				<View style={styles.descriptionWrapper}>
					<AppText fontWeight="bold">{listing.title}</AppText>
					<AppText use="secondary" size="sm">
						${listing.price}
					</AppText>
				</View>
				<UIProfile
					title={"Mosh Hamedeni"}
					subText={"5 Listings"}
					image={require("../assets/mosh.jpg")}
				/>
			</View>
		</UIScreen>
	);
}

const styles = StyleSheet.create({
	descriptionWrapper: {
		height: 80,
		justifyContent: "space-evenly",
		paddingLeft: 20,
		paddingVertical: 13,
	},
	detailsWrapper: {
		flex: 6,
	},
	imageWrapper: {
		flex: 4,
		backgroundColor: "tomato",
	},
	mainImageStyle: {
		width: "100%",
		flex: 1,
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
	screenWrapper: {
		flex: 1,
	},
	sellerDetails: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 20,
		height: 90,
	},
});
