import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UIPicker from "../UIPicker";
import UIErrorMessage from "./UIErrorMessage";

export default function UIFormPicker() {
	return (
		<>
			<UIPicker />
			<UIErrorMessage />
		</>
	);
}

const styles = StyleSheet.create({});
