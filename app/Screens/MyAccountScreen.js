import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItem from "../components/lists/ListItem";
import UIProfile from "../components/UIProfile";
import UIScreen from "../components/UIScreen";
import colors from "../config/colors";
import UIListIcon from "../components/UIListIcon";
import { FlatList } from "react-native-gesture-handler";
import UIListItemSeparator from "../components/lists/UIListItemSeparator";
import { useNavigation } from "@react-navigation/native";

export default function MyAccountScreen() {
	const navigator = useNavigation();
	const iconProps = { size: 30, color: colors.white };
	return (
		<UIScreen backgroundColor={colors.beige}>
			<UIProfile
				image={require("../assets/mosh.jpg")}
				title="Mosh Hamedani"
				subText={"programmingwithmosh@gmail.com"}
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
							navigator.navigate("ListingScreen");
						},
					},
					{
						title: "My Messages",
						icon: {
							name: "email",
							backgroundColor: colors.secondary,
						},
						onPress: () => {
							navigator.navigate("MessagesScreen");
						},
					},
					{
						title: "Log Out",
						icon: {
							name: "logout",
							backgroundColor: colors.yellow,
						},
						onPress: () => {},
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
