import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import UIScreen from "../UIScreen";
import colors from "../../config/colors";
import UIImagePicker from "../imagePicker/UIImagePicker";
import UIImagePickerList from "../imagePicker/UIImagePickerList";
import ListingEditScreen from "../../Screens/ListingEditScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

const Stack = createStackNavigator();
const FeedNavigator = () => (
	<Stack.Navigator
		initialRouteName="Tweets"
		screenOptions={{
			headerStyle: { backgroundColor: "dodgerblue" },
			headerTintColor: "white",
		}}
	>
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen
			options={({ route }) => ({
				title: route.params.id,
			})}
			name="TweetDetails"
			component={TweetDetails}
		/>
	</Stack.Navigator>
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
			activeBackgroundColor: "tomato",
			activeTintColor: "white",
			inactiveBackgroundColor: "#eee",
			inactiveTintColor: "black",
		}}
	>
		<Tab.Screen
			name="Feed"
			component={FeedNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons name="home" size={size} color={color} />
				),
			}}
		/>
		<Tab.Screen name="Account" component={Account} />
	</Tab.Navigator>
);

export default function NavigatorExample() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
