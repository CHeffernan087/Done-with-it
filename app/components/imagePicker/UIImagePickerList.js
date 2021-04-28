import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import UIImagePicker from "./UIImagePicker";

export default function UIImagePickerList() {
	const [uriList, updateUriList] = useState([""]);

	const removeImagePicker = (uri) => {
		const newArray = uriList.filter((el) => el != uri);
		console.log(newArray);
		updateUriList(newArray);
	};

	const addImagePicker = (uri) => {
		const previousArray = [...uriList];
		previousArray[previousArray.length - 1] = uri;
		previousArray.push("");
		updateUriList(previousArray);
	};

	const listItems = uriList.map((uri, index) => {
		return (
			<UIImagePicker
				onSelect={addImagePicker}
				onDelete={removeImagePicker}
				key={index}
				id={index}
				uri={uri}
			/>
		);
	});

	return <View style={styles.listWrapper}>{listItems}</View>;
}

const styles = StyleSheet.create({
	listWrapper: {
		display: "flex",
		flexDirection: "row",
	},
});
