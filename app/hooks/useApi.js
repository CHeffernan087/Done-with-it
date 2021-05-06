import React, { useState, useEffect } from "react";

// pass true if you want to get the request to fire later
export default function useApi(apiFunc, defer) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!defer) {
			request();
		}
	}, []);

	const request = async (...args) => {
		console.log("making api call");
		setLoading(true);
		const response = await apiFunc(...args);
		if (!response.ok) {
			console.log("Some error has occured");
			setError(response.problem);
			setData(false);
		} else {
			setError(null);
			setData(response.data);
			setLoading(false);
		}
		return response;
	};

	return { data, error, loading, request };
}
