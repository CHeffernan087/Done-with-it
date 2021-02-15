import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function UIInput({ icon, ...rest }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					color={colors.medium}
					size={20}
					style={styles.icon}
				/>
			)}
			<TextInput style={[styles.inputStyle, defaultStyles.text]} {...rest} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGrey,
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		width: "100%",

		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
		padding: 15,
		paddingRight: 5,
	},
	inputStyle: {
		width: "100%",
		height: "100%",
		padding: 15,
		paddingLeft: 0,
	},
});
