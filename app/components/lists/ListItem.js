import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/colors";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({
	Icon,
	image,
	subText,
	onPress,
	renderRightActions,
	size,
	showChevrons,
	parentStyle,
	title,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
				<View style={dynamicStyles({ parentStyle }).sellerDetails}>
					<View style={[dynamicStyles({ size }).profilePic]}>
						{image ? (
							<Image source={image} style={styles.profilePicImage} />
						) : (
							<Icon />
						)}
					</View>
					<View style={[styles.profileDescription]}>
						<AppText
							textProps={{ numberOfLines: 1 }}
							fontWeight="bold"
							size="sm"
						>
							{title}
						</AppText>
						{subText && (
							<AppText
								textProps={{ numberOfLines: 2 }}
								size="sm"
								color="medium"
								marginTop={4}
							>
								{subText}
							</AppText>
						)}
					</View>
					{showChevrons && (
						<View style={styles.chevronWrapper}>
							<MaterialCommunityIcons
								name="chevron-right"
								color={colors.medium}
								size={25}
							/>
						</View>
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	chevronWrapper: {
		width: 60,
		alignItems: "center",
		justifyContent: "center",
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
			paddingVertical: 10,
			paddingLeft: 20,
		},

		profilePic: {
			width: 60,
			height: 60,
			borderRadius: 60,
			overflow: "hidden",
		},
	});
