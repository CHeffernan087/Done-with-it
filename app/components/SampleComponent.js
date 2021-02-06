/*
rnsf <3
*/
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UICard from "./UICard";
import colors from "../config/colors";

export default function SampleComponent() {
	return (
		<View style={{ backgroundColor: colors.beige }}>
			<UICard image={require("../assets/jacket.jpg")} />
			<UICard image={require("../assets/couch.jpg")} />
		</View>
	);
}

const styles = StyleSheet.create({});
