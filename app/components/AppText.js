import React from "react";
import { Platform, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const textSizes = {
	small: 14,
	medium: 20,
	large: 26,
	xs: 11,
	sm: 14,
	md: 20,
	l: 26,
};

const AppText = ({ children, ...rest }) => {
	return <Text style={[styles(rest).textStyle]}>{children}</Text>;
};

const styles = ({ use, size, color, ...parentProps }) =>
	StyleSheet.create({
		textStyle: {
			...Platform.select({
				android: {
					fontFamily: "roboto",
				},
				ios: {
					fontFamily: "avenir",
				},
			}),
			color:
				color && colors[color]
					? colors[color]
					: use
					? use === "primary"
						? colors.primary
						: colors.secondary
					: colors.black,
			fontSize: textSizes[size] ? textSizes[size] : textSizes["medium"],
			...parentProps,
		},
	});

export default AppText;
