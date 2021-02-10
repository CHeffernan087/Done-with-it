import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import UIPicker from "./app/components/UIPicker";
import UIScreen from "./app/components/UIScreen";
import colors from "./app/config/colors";
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

	return (
		<UIScreen backgroundColor={colors.white}>
			<UIPicker
				items={categories}
				icon="apps"
				onSelectItem={setCategory}
				placeholder="Category"
				selectedItem={category}
			/>
		</UIScreen>
	);
}

const styles = StyleSheet.create({});
