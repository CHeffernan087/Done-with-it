import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../Screens/LandingScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import LoginScreen from "../Screens/LoginScreen";
import ListingScreen from "../Screens/ListingsScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

export default function FeedNavigator() {
	return (
		<Stack.Navigator initialRouteName="ListingScreen" mode="modal">
			<Stack.Screen
				name="ListingScreen"
				component={ListingScreen}
				options={{ title: "Listings" }}
			/>
			<Stack.Screen
				name="DetailsScreen"
				component={DetailsScreen}
				options={{
					title: "Listing Details",
					headerTintColor: colors.primary,
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
