import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import UIScreen from "../components/UIScreen";
import UIInput from "../components/UIInput";
import UIButton from "../components/UIButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
	return (
		<UIScreen backgroundColor="white" padding={10}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors }) => (
					<>
						<UIInput
							onChangeText={handleChange("email")}
							icon="email"
							placeholder="Email"
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							textContentType="emailAddress"
						/>
						<AppText color="primary">{errors.email}</AppText>
						<UIInput
							onChangeText={handleChange("password")}
							icon="lock"
							autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry
							placeholder="password"
							textContentType="password"
						/>
						<AppText color="primary">{errors.password}</AppText>
						<UIButton
							use="primary"
							color="white"
							onPress={handleSubmit}
							styles={{ marginTop: 20 }}
						>
							LOGIN
						</UIButton>
					</>
				)}
			</Formik>
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
