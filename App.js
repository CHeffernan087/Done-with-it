import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
} from "react-native";
import {
	useDimensions,
	useDeviceOrientation,
} from "@react-native-community/hooks";
import LoginScreen from "./app/Screens/LoginScreen";
import ViewImage from "./app/Screens/ViewImage";
import UIButton from "./app/components/UIButton";
import UICard from "./app/components/UICard";
import SampleComponent from "./app/components/SampleComponent";
import DetailsScreen from "./app/Screens/DetailsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import MyAccountScreen from "./app/Screens/MyAccountScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";
import UIInput from "./app/components/UIInput";
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F8FA",
		alignItems: "center",
		justifyContent: "center",
	},
	logoStyle: {
		height: 50,
		width: 50,
	},
});
