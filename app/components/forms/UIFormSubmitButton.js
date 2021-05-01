import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UIButton from "../UIButton";

export default function UIFormSubmitButton({ title }) {
	const { handleSubmit } = useFormikContext();
	return (
		<UIButton
			use="primary"
			color="white"
			onPress={handleSubmit}
			styles={{ marginTop: 20, height: 50, borderRadius: 22 }}
		>
			{title}
		</UIButton>
	);
}

const styles = StyleSheet.create({});
