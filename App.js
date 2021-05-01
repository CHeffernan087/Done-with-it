import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import UIScreen from "./app/components/UIScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import UnauthedRouter from "./app/routers/UnauthedRouter";
import colors from "./app/config/colors";
import ListingEditScreen from "./app/Screens/ListingEditScreen";
import ListingScreen from "./app/Screens/ListingsScreen";
import MyAccountScreen from "./app/Screens/MyAccountScreen";

/*
CMD + M => open developer tools
*/

const Tweets = ({ navigation }) => (
	<UIScreen>
		<Text>Tweets</Text>
		<Button
			title="View Tweet"
			onPress={() => {
				navigation.navigate("TweetDetails", { id: 1 });
			}}
		/>
	</UIScreen>
);

const TweetDetails = ({ route }) => (
	<UIScreen>
		<Text>Tweet Details {route.params.id}</Text>
	</UIScreen>
);

const Account = () => {
	return (
		<UIScreen>
			<Text>Accounts Screen</Text>
		</UIScreen>
	);
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
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

export default function App() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
