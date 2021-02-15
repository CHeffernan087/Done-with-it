import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import UIScreen from "../components/UIScreen";
import { UIFormField, UIFormSubmitButton, UIForm } from "../components/forms";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
	return (
		<UIScreen backgroundColor="white" padding={10}>
			<UIForm
				initialValues={{ email: "", password: "", name: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<UIFormField
					name="name"
					icon="account"
					placeholder="Name"
					autoCapitalize="words"
					autoCorrect={false}
					keyboardType="default"
				/>
				<UIFormField
					name="email"
					icon="email"
					placeholder="Email"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					textContentType="emailAddress"
				/>
				<UIFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="password"
					secureTextEntry
					textContentType="password"
				/>

				<UIFormSubmitButton title={"REGISTER"} />
			</UIForm>
		</UIScreen>
	);
}

const styles = StyleSheet.create({});
