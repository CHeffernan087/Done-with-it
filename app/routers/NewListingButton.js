import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				height: 80,
				width: 80,
				backgroundColor: colors.primary,
				borderRadius: 40,
				bottom: 20,
				borderWidth: 10,
				borderColor: "white",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<View
				style={{
					height: 35,
					width: 35,
					backgroundColor: "white",
					borderRadius: 35,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<MaterialCommunityIcons name="plus" size={30} color={colors.primary} />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
