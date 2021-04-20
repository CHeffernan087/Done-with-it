import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

export default function UIImagePickerContent({ imageUri }) {
	return (
		<View style={styles.contentWrapper}>
			{imageUri ? (
				<Image
					source={{ uri: imageUri }}
					style={styles.imageStyle}
					resizeMode="cover"
				/>
			) : (
				<MaterialCommunityIcons name="camera" size={30} color={colors.grey} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	contentWrapper: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		height: 80,
		width: 80,
		padding: 0,
	},
	imageStyle: {
		height: "110%",
		width: "110%",
	},
});
