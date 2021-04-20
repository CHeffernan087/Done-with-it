import React from "react";
import { Alert } from "react-native";

export default function UIAlert({ onConfirm, onCancel, title, description }) {
	return (
		<>
			{Alert.alert(title, description, [
				{
					text: "Cancel",
					onPress: onCancel,
					style: "cancel",
				},
				{ text: "OK", onPress: onConfirm },
			])}
		</>
	);
}
