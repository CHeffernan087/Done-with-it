import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

export default function UIPickerItem({ label, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<AppText padding={20}>{label}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: { padding: 20 },
});
