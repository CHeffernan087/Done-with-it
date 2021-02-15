import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import * as Yup from "yup";
import UIScreen from "../components/UIScreen";
import { UIFormField, UIFormSubmitButton, UIForm } from "../components/forms";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
	return (
		<UIScreen backgroundColor="white" padding={10}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<UIForm
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
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
