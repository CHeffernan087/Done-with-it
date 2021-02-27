import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UIPicker from "../components/UIPicker";
import UIScreen from "../components/UIScreen";
import * as Yup from "yup";
import { UIForm, UIFormField, UIFormSubmitButton } from "../components/forms";
import UIFormPicker from "../components/forms/UIFormPicker";

const validationSchema = Yup.object().shape({
	category: Yup.object().required().nullable().label("Category"),
	title: Yup.string().required().label("Email"),
	price: Yup.number().positive().min(1).max(10000).required().label("Price"),
	description: Yup.string(),
});
const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];
export default function ListingEditScreen() {
	const [category, setCategory] = useState(null);

	return (
		<UIScreen backgroundColor="white" paddingHorizontal={10}>
			<UIForm
				initialValues={{ category, title: "", price: null, description: "" }}
				onSubmit={() => {}}
				validationSchema={validationSchema}
			>
				<UIFormField
					name="title"
					placeholder="Title"
					autoCapitalize="words"
					autoCorrect={false}
				/>
				<UIFormField name="price" placeholder="Price" keyboardType="numeric" />
				<UIFormPicker
					placeholder="Category"
					name="category"
					items={categories}
					error="You must select a category"
					errorVisible={true}
					selectedItem={category}
					onSelectItem={setCategory}
				/>
				<UIFormField
					name="description"
					placeholder="Description"
					autoCorrect={true}
					multiline
				/>

				<UIFormSubmitButton title={"POST"} />
			</UIForm>
		</UIScreen>
	);
}

const styles = StyleSheet.create({});
