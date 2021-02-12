import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

export default function UIButton({ children, onPress = () => {}, ...rest }) {
	return (
		<TouchableOpacity style={styles(rest).buttonStyle} onPress={onPress}>
			<AppText color="white" fontWeight="bold" size="sm">
				{children}
			</AppText>
		</TouchableOpacity>
	);
}

const styles = ({ use, styles }) =>
	StyleSheet.create({
		buttonStyle: {
			backgroundColor: colors[use],
			borderRadius: 20,
			height: 40,
			width: "100%",
			alignItems: "center",
			justifyContent: "center",
			alignSelf: "center",
			color: "white",

			...styles,
		},
	});
