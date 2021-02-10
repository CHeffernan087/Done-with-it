import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function UIListIcon({ name, backgroundColor, size = 40 }) {
	return (
		<View style={styles({ backgroundColor, size }).borderCircle}>
			<MaterialCommunityIcons
				name={name}
				size={size / 2}
				color={colors.white}
			/>
		</View>
	);
}

const styles = ({ backgroundColor, size }) =>
	StyleSheet.create({
		borderCircle: {
			height: size,
			width: size,
			borderRadius: size / 2,
			backgroundColor,
			alignItems: "center",
			justifyContent: "center",
		},
	});
