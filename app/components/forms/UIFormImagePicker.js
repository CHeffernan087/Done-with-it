import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UIImagePickerList from "../imagePicker/UIImagePickerList";
import UIErrorMessage from "./UIErrorMessage";
import { useFormikContext } from "formik";

export default function UIFormImagePicker({
	errorVisible,
	items,
	name,
	onSelectItem,
	numColumns,
	PickerItemComponent,
	selectedItem,
	width,
	...rest
}) {
	const { setFieldValue, values, errors, touched } = useFormikContext();

	const handleSelect = (choice) => {
		setFieldValue(name, choice);
	};

	return (
		<>
			<UIImagePickerList onSelectItem={handleSelect} />
			<UIErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

const styles = StyleSheet.create({});
