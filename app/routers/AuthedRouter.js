import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

/* Screen Components */
import ListingEditScreen from "../Screens/ListingEditScreen";
import ListingScreen from "../Screens/ListingsScreen";
import MyAccountScreen from "../Screens/MyAccountScreen";

const Tab = createBottomTabNavigator();

export default function AuthedRouter() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: colors.primary,
				inactiveBackgroundColor: "white",
				inactiveTintColor: "black",
				style: { height: 60 },
				tabStyle: { paddingBottom: 10 },
			}}
		>
			<Tab.Screen
				name="Feed"
				component={ListingScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="ListingEditScreen"
				component={ListingEditScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<View
							style={{
								height: 70,
								width: 70,
								backgroundColor: colors.primary,
								borderRadius: 50,
								top: -15,
								borderWidth: 5,
								borderColor: "white",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<View
								style={{
									height: 35,
									width: 35,
									backgroundColor: "white",
									borderRadius: 35,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<MaterialCommunityIcons
									name="plus"
									size={size}
									color={colors.primary}
								/>
							</View>
						</View>
					),
					tabBarLabel: () => {},
				}}
				showLabel={false}
				labeled={false}
				labelStyle={{ fontSize: 50 }}
			/>
			<Tab.Screen
				name="Account"
				component={MyAccountScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="account" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({});
