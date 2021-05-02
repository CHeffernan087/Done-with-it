import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "../Screens/LandingScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import LoginScreen from "../Screens/LoginScreen";
import ListingScreen from "../Screens/ListingsScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import colors from "../config/colors";
import routes from "./routes";

const Stack = createStackNavigator();

export default function FeedNavigator() {
	return (
		<Stack.Navigator initialRouteName={routes.FEED} mode="modal">
			<Stack.Screen
				name={routes.FEED}
				component={ListingScreen}
				options={{ title: "Listings" }}
			/>
			<Stack.Screen
				name={routes.LISTING_DETAILS}
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
