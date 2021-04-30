import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import UIImagePicker from "./UIImagePicker";

export default function UIImagePickerList({ onSelectItem }) {
	const [uriList, updateUriList] = useState([""]);

	const removeImagePicker = (uri) => {
		const newArray = uriList.filter((el) => el != uri);
		console.log(newArray);
		updateUriList(newArray);
		onSelectItem(newArray.filter((el) => el != ""));
	};

	const addImagePicker = (uri) => {
		const previousArray = [...uriList];
		previousArray[previousArray.length - 1] = uri;
		previousArray.push("");
		updateUriList(previousArray);
		onSelectItem(previousArray.filter((el) => el != ""));
	};

	const listItems = uriList.map((uri, index) => {
		return (
			<View
				style={{ flex: 1, flexBasis: "21%", margin: "2%" }}
				key={index}
				uri={uri}
			>
				<UIImagePicker
					style={{ flex: 1, flexBasis: "21%", margin: "2%" }}
					onSelect={addImagePicker}
					onDelete={removeImagePicker}
					id={index}
					uri={uri}
				/>
			</View>
		);
	});

	return (
		<View style={styles.listWrapper}>
			{listItems}
			{[1, 2, 3, 4].splice(0, 4 - (listItems.length % 4)).map(
				(placeholder, key) =>
					4 - (listItems.length % 4) < 4 && (
						<View
							style={{
								flex: 1,
								marginHorizontal: "2%",
								flexBasis: "21%",
							}}
							key={key}
						></View>
					)
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	listWrapper: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",

		// justifyContent: "space-around",
		// alignItems: "center",
	},
});
