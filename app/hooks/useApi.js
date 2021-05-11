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
		setLoading(true);
		const response = await apiFunc(...args);
		if (!response.ok) {
			setError(response.problem);
			setData(false);
			return response;
		} else {
			setError(null);
			setData(response.data);
			setLoading(false);
			return response;
		}
		return response;
	};

	return { data, error, loading, request };
}
