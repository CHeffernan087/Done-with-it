import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
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
/*
CMD + M => open developer tools
*/
export default function App() {
	useEffect(() => {
		console.log(Dimensions.get("screen"));
	});

	return <SampleComponent />;
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
