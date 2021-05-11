import React from "react";

import colors from "../config/colors";
import routes from "../routers/routes";
import ListItem from "../components/lists/ListItem";
import UIProfile from "../components/UIProfile";
import UIScreen from "../components/UIScreen";
import UIListIcon from "../components/UIListIcon";
import UIListItemSeparator from "../components/lists/UIListItemSeparator";
import useAuth from "../auth/useAuth";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MyAccountScreen() {
	const { user, logout } = useAuth();
	const navigator = useNavigation();
	return (
		<UIScreen backgroundColor={colors.beige}>
			<UIProfile
				image={require("../assets/mosh.jpg")}
				title={user.name}
				subText={user.email}
			/>
			<FlatList
				keyExtractor={(item) => item.title}
				style={styles.flatListStyle}
				data={[
					{
						title: "My Listings",
						icon: {
							name: "format-list-bulleted",
							backgroundColor: colors.primary,
						},
						onPress: () => {
							navigator.navigate(routes.FEED);
						},
					},
					{
						title: "My Messages",
						icon: {
							name: "email",
							backgroundColor: colors.secondary,
						},
						onPress: () => {
							navigator.navigate(routes.MESSAGES);
						},
					},
					{
						title: "Log Out",
						icon: {
							name: "logout",
							backgroundColor: colors.yellow,
						},
						onPress: logout,
					},
				]}
				renderItem={({ item }) => (
					<ListItem
						parentStyle={{
							height: 65,
							marginTop: item.title === "Log Out" ? 30 : 0,
						}}
						Icon={() => (
							<UIListIcon
								name={item.icon.name}
								backgroundColor={item.icon.backgroundColor}
							/>
						)}
						title={item.title}
						size="sm"
						onPress={item.onPress}
					/>
				)}
				ItemSeparatorComponent={UIListItemSeparator}
			/>
		</UIScreen>
	);
}

const styles = StyleSheet.create({
	flatListStyle: {
		marginTop: 40,
	},
});
