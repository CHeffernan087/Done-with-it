import { create } from "apisauce";

const apiClient = create({
	baseURL: "https://done-with-it-backend-087.herokuapp.com/api",
});

// apiClient.get("/listings").then((response) => {
// 	if (!response.ok) {
// 		console.log(response.problem);
// 	}
// });

export default apiClient;
