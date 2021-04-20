import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";
import ListingEditScreen from "./app/Screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import MessagesScreen from "./app/Screens/MessagesScreen";
import UIScreen from "./app/components/UIScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./app/config/colors";
import UIImagePickerContent from "./app/components/imagePicker/UIImagePickerContent";
import UIAlert from "./app/components/UIAlert";

/*
CMD + M => open developer tools
*/

export default function App() {
	const [category, setCategory] = useState(null);
	const [uri, setUri] = useState(null);
	const [deletingImage, updateDeleteState] = useState(null);

	const handleDelete = () => {};

	const requestPermission = async () => {
		// const result = await Permissions.askAsync(
		// 	Permissions.CAMERA,
		// 	Permissions.LOCATION
		// );
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) {
			alert("You need to enable permission to access the camera");
		}
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const selectImage = async () => {
		if (uri) {
			updateDeleteState(true);
		} else {
			try {
				const result = await ImagePicker.launchImageLibraryAsync();
				if (!result.cancelled) {
					setUri(result.uri);
				}
			} catch (error) {
				console.log("Error reading an image");
			}
		}
	};

	return (
		<UIScreen backgroundColor="white">
			<TouchableOpacity style={styles.imagePickerWrapper} onPress={selectImage}>
				<UIImagePickerContent onSelect={selectImage} imageUri={uri} />
			</TouchableOpacity>
			{deletingImage && (
				<UIAlert
					title="Removing Image"
					description="Are you sure you want to remove this image?"
					onConfirm={() => {
						updateDeleteState(false);
						setUri(null);
					}}
					onCancel={() => {
						updateDeleteState(false);
					}}
				/>
			)}
		</UIScreen>
	);
}

const styles = StyleSheet.create({
	imagePickerWrapper: {
		height: 80,
		width: 80,
		borderRadius: 7,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.lightGrey,
		overflow: "hidden",
	},
});
