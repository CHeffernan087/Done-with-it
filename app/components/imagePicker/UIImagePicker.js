import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";

import colors from "../../config/colors";
import UIImagePickerContent from "../imagePicker/UIImagePickerContent";
import UIAlert from "../UIAlert";

/*
CMD + M => open developer tools
*/

export default function UIImagePicker({ onSelect, onDelete, uri }) {
	const [backupUri, setBackupUri] = useState(null);
	const setUri = (url) => {
		onSelect(url);
		setBackupUri(url);
	};
	const [deletingImage, updateDeleteState] = useState(null);

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
		<>
			<TouchableOpacity style={styles.imagePickerWrapper} onPress={selectImage}>
				<UIImagePickerContent
					onSelect={selectImage}
					imageUri={uri || backupUri}
				/>
			</TouchableOpacity>
			{deletingImage && (
				<UIAlert
					title="Removing Image"
					description="Are you sure you want to remove this image?"
					onConfirm={() => {
						updateDeleteState(false);
						setUri(null);
						onDelete(uri);
					}}
					onCancel={() => {
						updateDeleteState(false);
					}}
				/>
			)}
		</>
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
