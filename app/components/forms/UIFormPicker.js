import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UIPicker from "../UIPicker";
import UIErrorMessage from "./UIErrorMessage";
import { useFormikContext } from "formik";

export default function UIFormPicker({
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
	const { setFieldValue, values } = useFormikContext();
	const handleSelect = (choice) => {
		setFieldValue(name, choice);
	};

	return (
		<>
			<UIPicker
				items={items}
				onSelectItem={handleSelect}
				numColumns={numColumns}
				selectedItem={values[name]}
				PickerItemComponent={PickerItemComponent}
				width={width}
				{...rest}
			/>
			<UIErrorMessage visible={errorVisible} />
		</>
	);
}

const styles = StyleSheet.create({});
