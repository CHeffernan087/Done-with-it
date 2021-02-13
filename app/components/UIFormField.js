import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UIErrorMessage from "./UIErrorMessage";
import UIInput from "./UIInput";

export default function UIFormField({ name, ...otherProps }) {
	const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
	return (
		<>
			<UIInput
				onChangeText={handleChange(name)}
				// icon="email"
				// placeholder="Email"
				// autoCapitalize="none"
				// autoCorrect={false}
				// keyboardType="email-address"
				// textContentType="emailAddress"
				{...otherProps}
				onBlur={() => setFieldTouched(name)}
			/>

			<UIErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

const styles = StyleSheet.create({});
