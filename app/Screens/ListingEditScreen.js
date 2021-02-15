import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UIErrorMessage } from "../components/forms";
import UIPicker from "../components/UIPicker";

export default function ListingEditScreen() {
	return (
		<>
			<UIPicker />
			<UIErrorMessage />
		</>
	);
}

const styles = StyleSheet.create({});
