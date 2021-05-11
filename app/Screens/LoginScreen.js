import React, { useState } from "react";

import authApi from "../api/auth";
import UIScreen from "../components/UIScreen";
import useAuth from "../auth/useAuth";
import * as Yup from "yup";

import { StyleSheet, Image } from "react-native";
import {
	UIFormField,
	UIFormSubmitButton,
	UIForm,
	UIErrorMessage,
} from "../components/forms";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
	const { login } = useAuth();
	const [loginError, setLoginError] = useState(false);

	const handleSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) {
			setLoginError(result.problem);
		} else {
			const authToken = result.data;
			login(authToken);
			setLoginError(false);
		}
	};
	return (
		<UIScreen backgroundColor="white" padding={10}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<UIErrorMessage
				error={"Invalid email or password"}
				visible={loginError}
			/>
			<UIForm
				initialValues={{ email: "", password: "" }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
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

				<UIFormSubmitButton title={"LOGIN"} />
			</UIForm>
		</UIScreen>
	);
};

const styles = StyleSheet.create({
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
