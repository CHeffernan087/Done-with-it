import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LandingScreen from "../Screens/LandingScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import LoginScreen from "../Screens/LoginScreen";

const Stack = createStackNavigator();

export default function UnauthedRouter() {
	return (
		<Stack.Navigator
			initialRouteName="LandingScreen"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="LandingScreen" component={LandingScreen} />
			<Stack.Screen
				name="RegisterScreen"
				component={RegisterScreen}
				options={{
					headerShown: true,
					title: "Register",
				}}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					title: "Login",
				}}
				name="LoginScreen"
				component={LoginScreen}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
