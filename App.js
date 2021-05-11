import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AuthedRouter from "./app/routers/AuthedRouter";
import UnauthedRouter from "./app/routers/UnauthedRouter";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UIScreen from "./app/components/UIScreen";
import OfflineNotice from "./app/components/UIOfflineNotice";
import AuthContext from "./app/auth/context";
import AppLoading from "expo-app-loading";
import authStorage from "./app/auth/storage";

/*
CMD + M => open developer tools
*/

export default function App() {
	const [user, setUser] = useState(null);
	const [isReady, updateIsReady] = useState(false);

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (!user) {
			return;
		}
		setUser(user);
		return true;
	};

	if (!isReady) {
		return (
			<AppLoading
				autoHideSplash
				startAsync={restoreUser}
				onFinish={() => {
					updateIsReady(true);
				}}
				onError={(error) => console.log(error)}
			/>
		);
	}

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<NavigationContainer>
				{user ? <AuthedRouter /> : <UnauthedRouter />}
			</NavigationContainer>
			<OfflineNotice />
		</AuthContext.Provider>
	);
}

const styles = StyleSheet.create({});
