import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import UIScreen from "./app/components/UIScreen";
import colors from "./app/config/colors";
import UIImagePicker from "./app/components/imagePicker/UIImagePicker";
import UIImagePickerList from "./app/components/imagePicker/UIImagePickerList";
import ListingEditScreen from "./app/Screens/ListingEditScreen";

/*
CMD + M => open developer tools
*/

export default function App() {
	return (
		<UIScreen backgroundColor="white">
			<ListingEditScreen />
		</UIScreen>
	);
}

const styles = StyleSheet.create({});
