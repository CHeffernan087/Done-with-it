import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import UIListIcon from "./UIListIcon";

export default function CategoryPickerItem({ item, onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<UIListIcon
				backgroundColor={item.backgroundColor}
				name={item.icon}
				size={80}
			/>

			<AppText textAlign="center" marginTop={5}>
				{item.label}
			</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 30,
	},
});
