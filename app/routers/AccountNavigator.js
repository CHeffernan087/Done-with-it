import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../Screens/ListingsScreen";
import MyAccountScreen from "../Screens/MyAccountScreen";
import MessagesScreen from "../Screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

export default function AccountNavigator() {
	return (
		<Stack.Navigator
			initialRouteName={routes.MY_ACCOUNT}
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
			<Stack.Screen name={routes.MY_ACCOUNT} component={MyAccountScreen} />
			<Stack.Screen name={routes.FEED} component={ListingScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
