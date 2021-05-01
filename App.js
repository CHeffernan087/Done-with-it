import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthedRouter from "./app/routers/AuthedRouter";

/*
CMD + M => open developer tools
*/

export default function App() {
	return (
		<NavigationContainer>
			<AuthedRouter />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
