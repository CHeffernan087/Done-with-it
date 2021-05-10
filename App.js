import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthedRouter from "./app/routers/AuthedRouter";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UIScreen from "./app/components/UIScreen";
import OfflineNotice from "./app/components/UIOfflineNotice";

/*
CMD + M => open developer tools
*/

export default function App() {
	return (
		<>
			<NavigationContainer>
				<AuthedRouter />
			</NavigationContainer>
			<OfflineNotice />
		</>
	);
}

const styles = StyleSheet.create({});
