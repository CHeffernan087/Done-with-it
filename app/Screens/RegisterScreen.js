import React, { useState } from "react";
import authApi from "../api/auth";
import UIScreen from "../components/UIScreen";
import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import * as Yup from "yup";
import {
	UIFormField,
	UIFormSubmitButton,
	UIForm,
	UIErrorMessage,
} from "../components/forms";
import UIActivityLoader from "../components/UIActivityLoader";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
	const registerApi = useApi(usersApi.register);
	const loginApi = useApi(authApi.login);
	const [formError, setFormError] = useState(null);
	const { login } = useAuth();

	const handleSubmit = async (userInfo) => {
		const result = await registerApi.request();
		if (!result.ok) {
			setFormError(result.data ? result.data.error : result.problem);
		} else {
			const { data: authToken } = await loginApi.request(
				userInfo.email,
				userInfo.password
			);
			login(authToken);
		}
	};
	return (
		<UIScreen backgroundColor="white" padding={15}>
			<UIActivityLoader visible={registerApi.loading || loginApi.loading} />
			<UIForm
				initialValues={{ email: "", password: "", name: "" }}
				onSubmit={handleSubmit}
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
				<UIErrorMessage visible={!!formError} error={formError} />
				<UIFormSubmitButton title={"REGISTER"} />
			</UIForm>
		</UIScreen>
	);
}
