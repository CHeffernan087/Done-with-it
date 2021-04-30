import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import UIPicker from "../components/UIPicker";
import UIScreen from "../components/UIScreen";
import * as Yup from "yup";
import { UIForm, UIFormField, UIFormSubmitButton } from "../components/forms";
import UIFormPicker from "../components/forms/UIFormPicker";
import UICategoryPickerItem from "../components/UICategoryPickerItem";
import colors from "../config/colors";
import UIImagePickerList from "../components/imagePicker/UIImagePickerList";
import UIFormImagePicker from "../components/forms/UIFormImagePicker";

const validationSchema = Yup.object().shape({
	category: Yup.object().required().nullable().label("Category"),
	title: Yup.string().required().label("Email"),
	price: Yup.number().positive().min(1).max(10000).required().label("Price"),
	description: Yup.string(),
	image: Yup.array().min(1),
});
const categories = [
	{
		label: "Furniture",
		value: 1,
		backgroundColor: colors.primary,
		icon: "floor-lamp",
	},
	{
		label: "Cars",
		value: 2,
		backgroundColor: colors.orange,
		icon: "car",
	},
	{
		label: "Cameras",
		value: 3,
		backgroundColor: colors.yellow,
		icon: "camera",
	},
	{
		label: "Games",
		value: 1,
		backgroundColor: colors.green,
		icon: "cards",
	},
	{
		label: "Clothing",
		value: 2,
		backgroundColor: colors.turquise,
		icon: "shoe-heel",
	},
	{
		label: "Sports",
		value: 3,
		backgroundColor: colors.sportsBlue,
		icon: "basketball",
	},
	{
		label: "Movies and Music",
		value: 1,
		backgroundColor: colors.deepBlue,
		icon: "headphones",
	},
	{
		label: "Books",
		value: 2,
		backgroundColor: colors.purple,
		icon: "book-open",
	},
	{
		label: "Other",
		value: 3,
		backgroundColor: colors.medium,
		icon: "note",
	},
];
export default function ListingEditScreen() {
	const [category, setCategory] = useState(null);
	const [imageUris, setImageUris] = useState([]);

	return (
		<UIScreen backgroundColor="white" paddingHorizontal={10}>
			<UIForm
				initialValues={{
					category,
					title: "",
					price: null,
					description: "",
					image: [],
				}}
				onSubmit={() => {}}
				validationSchema={validationSchema}
			>
				<UIFormImagePicker
					error="You must choose at least one image"
					items={categories}
					name="image"
					onSelectItem={setCategory}
					PickerItemComponent={UIImagePickerList}
					placeholder="Images"
				/>
				<UIFormField
					name="title"
					placeholder="Title"
					autoCapitalize="words"
					autoCorrect={false}
				/>
				<UIFormField
					name="price"
					placeholder="Price"
					keyboardType="numeric"
					width={160}
				/>
				<UIFormPicker
					error="You must select a category"
					errorVisible={true}
					items={categories}
					name="category"
					onSelectItem={setCategory}
					PickerItemComponent={UICategoryPickerItem}
					placeholder="Category"
					selectedItem={category}
					numColumns={3}
					width={180}
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
