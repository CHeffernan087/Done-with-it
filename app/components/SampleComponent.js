/*
rnsf <3
*/
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import UICard from "./UICard";
import colors from "../config/colors";

export default function SampleComponent() {
	const [isNew, setIsNew] = useState(false);
	return (
		<View>
			<Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
		</View>
	);
}

const styles = StyleSheet.create({
	textInputStyle: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
	},
});
