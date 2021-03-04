import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListingEditScreen from "./app/Screens/ListingEditScreen";

import MessagesScreen from "./app/Screens/MessagesScreen";

/*
CMD + M => open developer tools
*/

export default function App() {
	const [category, setCategory] = useState(null);

	const handleDelete = () => {};

	return <ListingEditScreen />;
}

const styles = StyleSheet.create({});
