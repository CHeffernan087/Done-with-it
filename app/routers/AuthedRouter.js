import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import routes from "./routes";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

/* Screen Components */
import ListingEditScreen from "../Screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

export default function AuthedRouter() {
	const registerForNotifications = async () => {
		try {
			const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			if (!permission.granted) {
				return;
			}

			const notificationToken = await Notifications.getExpoPushTokenAsync();
			console.log(notificationToken);
		} catch (error) {
			console.log("Error getting a push notification token", error);
		}
	};

	useEffect(() => {
		registerForNotifications();
	}, []);

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
				name={routes.FEED}
				component={FeedNavigator}
				options={{
					title: "Feed",
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={routes.LISTING_EDIT}
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: ({ size, color }) => (
						<NewListingButton
							onPress={() => {
								navigation.navigate(routes.LISTING_EDIT);
							}}
						/>
					),
				})}
				showLabel={false}
				labeled={false}
				labelStyle={{ fontSize: 50 }}
			/>
			<Tab.Screen
				name={routes.MY_ACCOUNT}
				component={AccountNavigator}
				options={{
					title: "Account",
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="account" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({});
