import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import UIScreen from "./UIScreen";
import UIPickerItem from "./UIPickerItem";

export default function UIPicker({
	icon,
	items,
	onSelectItem,
	placeholder,
	selectedItem,
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							color={colors.medium}
							size={20}
							style={styles.icon}
						/>
					)}
					<View style={styles.text}>
						<AppText color={!selectedItem ? "medium" : null}>
							{selectedItem ? selectedItem.label : placeholder}
						</AppText>
					</View>
					<MaterialCommunityIcons
						name="chevron-down"
						color={colors.medium}
						size={20}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal animationType="slide" transparent={true} visible={modalVisible}>
				<UIScreen backgroundColor={colors.white}>
					<Button
						title="Close Modal"
						onPress={() => {
							setModalVisible(false);
						}}
					></Button>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<UIPickerItem
								label={item.label}
								onPress={() => {
									setModalVisible(false);

									onSelectItem(item);
								}}
							/>
						)}
					/>
				</UIScreen>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.lightGrey,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});
