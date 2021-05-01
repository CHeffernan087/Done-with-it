import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import UICard from "../components/UICard";
import UIScreen from "../components/UIScreen";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

const defaultItems = [
	{
		id: 1,
		description: "Red jacket for sale",
		price: 200,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		description: "Couch in great condition",
		price: 1000,
		image: require("../assets/couch.jpg"),
	},
];

export default function ListingsScreen() {
	const [items, setItems] = useState(defaultItems);
	const navigation = useNavigation();

	return (
		<UIScreen backgroundColor={colors.beige}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item, index }) => (
					<UICard
						price={item.price}
						description={item.description}
						image={item.image}
						onPress={() => {
							navigation.navigate("DetailsScreen", { item });
						}}
					/>
				)}
			/>
		</UIScreen>
	);
}

const styles = StyleSheet.create({});
