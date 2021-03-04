import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

export default function UIPickerItem({ item, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<AppText padding={20}>{item.label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: { padding: 20 },
});
