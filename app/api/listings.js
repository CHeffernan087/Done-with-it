import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const onUploadProgress = (event) => {
	const percentCompleted = Math.round((event.loaded * 100) / event.total);
	console.log("onUploadProgress", percentCompleted);
};

const uploadListing = (listingObject, updateUploadProgress) => {
	const {
		title,
		description,
		price,
		categoryId,
		location,
		image,
	} = listingObject;

	const formData = new FormData();
	formData.append("title", title);
	formData.append("description", description);
	formData.append("price", price);
	formData.append("categoryId", categoryId);

	const locationString = location && JSON.stringify(location);
	if (locationString) {
		formData.append("location", locationString);
	}
	console.log(image);
	image &&
		image.forEach((uri) => {
			// formData.append("images", { uri, filename: title, });
			formData.append("images", { name: title, type: "image/jpeg", uri });
		});

	return client.post(endpoint, formData, {
		onUploadProgress: (progress) =>
			updateUploadProgress((progress.loaded * 100) / progress.total),
	});
};

export default {
	getListings,
	uploadListing,
};
