import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UIFormPicker from "./app/components/forms/UIFormPicker";
import UIButton from "./app/components/UIButton";
import UIPicker from "./app/components/UIPicker";
import UIScreen from "./app/components/UIScreen";
import colors from "./app/config/colors";
import LoginScreen from "./app/Screens/LoginScreen";
import RegisterScreen from "./app/Screens/RegisterScreen";
/*
CMD + M => open developer tools
*/

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];
export default function App() {
	const [category, setCategory] = useState(null);

	return <UIFormPicker />;
}

const styles = StyleSheet.create({});
