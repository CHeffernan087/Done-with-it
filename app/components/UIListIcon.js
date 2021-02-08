import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function UIListIcon({ name, backgroundColor }) {
	return (
		<View style={styles(backgroundColor).borderCircle}>
			<MaterialCommunityIcons name={name} size={20} color={colors.white} />
		</View>
	);
}

const styles = (backgroundColor) =>
	StyleSheet.create({
		borderCircle: {
			height: 40,
			width: 40,
			borderRadius: 40,
			backgroundColor,
			alignItems: "center",
			justifyContent: "center",
		},
	});
