import React from "react";
import { Alert, Keyboard, StyleSheet, Text, View } from "react-native";
import messagesApi from "../../api/messages";
import { Notifications } from "expo";
import UIFormField from "./UIFormField";
import UIForm from "./UIForm";
import { UIFormSubmitButton } from ".";

export default function ContactSellerForm({ listing }) {
	const handleSubmit = async ({ message }, { resetForm }) => {
		Keyboard.dismiss();

		const result = await messagesApi.send(message, listing.id);
		if (!result.ok) {
			console.log("Error", result);
			return Alert.alert("Error", "Could not send the message to the seller");
		}

		resetForm();

		Notifications.presentLocalNotificationAsync({
			title: "Awesome!",
			body: "Your message was sent to the seller",
			data: {
				_displayInForeGround: true,
			},
		});
	};
	return (
		<View style={{ paddingHorizontal: 15 }}>
			<UIForm
				initialValues={{
					message: "",
				}}
				onSubmit={handleSubmit}
			>
				<UIFormField
					name="message"
					placeholder="message..."
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					textContentType="emailAddress"
				/>
				<UIFormSubmitButton title={"Contact seller"} />
			</UIForm>
		</View>
	);
}

const styles = StyleSheet.create({});
