import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import AppText from "./AppText";

export default function ListItem({
	image,
	title,
	subText,
	onPress,
	renderRightActions,
	size,
	Icon,
	parentStyle,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
				<View style={dynamicStyles({ parentStyle }).sellerDetails}>
					<View
						style={[
							dynamicStyles({ size }).profileDimensions,
							dynamicStyles({ size }).profilePic,
						]}
					>
						{image ? (
							<Image source={image} style={styles.profilePicImage} />
						) : (
							<Icon />
						)}
					</View>
					<View
						style={[
							dynamicStyles({ size }).profileDimensions,
							styles.profileDescription,
						]}
					>
						<AppText fontWeight="bold" size="sm">
							{title}
						</AppText>
						{subText && (
							<AppText size="sm" color="medium" marginTop={7.5}>
								{subText}
							</AppText>
						)}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	detailsWrapper: {
		flex: 6,
		backgroundColor: colors.white,
	},
	profileDescription: {
		flex: 1,
		paddingLeft: 10,
		alignItems: "flex-start",
		justifyContent: "center",
	},

	profilePicImage: {
		height: "100%",
		width: "100%",
	},
});

const dynamicStyles = ({ size, parentStyle }) =>
	StyleSheet.create({
		sellerDetails: {
			backgroundColor: colors.white,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			paddingLeft: 20,
			height: 90,
			...parentStyle,
		},
		profileDimensions: {
			height: size === "sm" ? 45 : 60,
		},
		profilePic: {
			width: size === "sm" ? 45 : 60,
			height: size === "sm" ? 45 : 60,
			borderRadius: size === "sm" ? 45 : 60,
			overflow: "hidden",
		},
	});
