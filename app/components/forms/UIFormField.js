import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UIErrorMessage from "./UIErrorMessage";
import UIInput from "../UIInput";

export default function UIFormField({ name, width, ...otherProps }) {
	const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
	return (
		<>
			<UIInput
				onChangeText={handleChange(name)}
				{...otherProps}
				onBlur={() => setFieldTouched(name)}
				width={width}
			/>

			<UIErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

const styles = StyleSheet.create({});
