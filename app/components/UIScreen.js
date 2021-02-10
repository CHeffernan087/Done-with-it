import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";

export default function UIScreen({ children, ...rest }) {
	return <SafeAreaView style={styles(rest).screen}>{children}</SafeAreaView>;
}

const styles = (props) => {
	return StyleSheet.create({
		screen: {
			flex: 1,
			paddingTop: Constants.statusBarHeight,
			backgroundColor: "yellow",
			...props,
		},
	});
};
