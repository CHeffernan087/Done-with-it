import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import UIScreen from "../components/UIScreen";
import UIListItemSeparator from "../components/UIListItemSeparator";
import UIListItemDeleteAction from "../components/UIListItemDeleteAction";

const messages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/mosh.jpg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/mosh.jpg"),
	},
];

export default function MessagesScreen() {
	return (
		<UIScreen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subText={item.description}
						image={item.image}
						onPress={() => {
							console.log("Hello my good man");
						}}
						renderRightActions={UIListItemDeleteAction}
					/>
				)}
				ItemSeparatorComponent={UIListItemSeparator}
			/>
		</UIScreen>
	);
}

const styles = StyleSheet.create({});
