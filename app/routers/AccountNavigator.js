import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../Screens/ListingsScreen";
import MyAccountScreen from "../Screens/MyAccountScreen";
import MessagesScreen from "../Screens/MessagesScreen";

const Stack = createStackNavigator();

export default function AccountNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="MyAccountScreen"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="MessagesScreen" component={MessagesScreen} />
			<Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
			<Stack.Screen name="ListingScreen" component={ListingScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
