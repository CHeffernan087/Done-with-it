import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UIPicker from "../UIPicker";
import UIErrorMessage from "./UIErrorMessage";
import { useFormikContext } from "formik";

export default function UIFormPicker({
	errorVisible,
	items,
	name,
	selectedItem,
	onSelectItem,
	...rest
}) {
	const { setFieldValue, values } = useFormikContext();
	const handleSelect = (choice) => {
		setFieldValue(name, choice);
	};

	return (
		<>
			<UIPicker
				onSelectItem={handleSelect}
				items={items}
				selectedItem={values["category"]}
				{...rest}
			/>
			<UIErrorMessage visible={errorVisible} />
		</>
	);
}

const styles = StyleSheet.create({});
