import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import UIScreen from "../components/UIScreen";
import {
	ListItem,
	UIListItemSeparator,
	UIListItemDeleteAction,
} from "../components/lists";

export default function MessagesScreen() {
	const [refreshing, setRefreshing] = useState(false);
	const [messages, updateMessages] = useState([
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
	]);
	const handleDelete = (message) => {
		const newMessages = messages.filter((m) => m.id != message.id);

		updateMessages(newMessages);
	};
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
						onPress={() => {}}
						renderRightActions={() => (
							<UIListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				refreshing={refreshing}
				onRefresh={() => {
					updateMessages([
						{
							id: 2,
							title: "T3",
							description: "D3",
							image: require("../assets/mosh.jpg"),
						},
					]);
				}}
				ItemSeparatorComponent={UIListItemSeparator}
			/>
		</UIScreen>
	);
}

const styles = StyleSheet.create({});
