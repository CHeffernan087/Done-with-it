import React, { useState, useEffect } from "react";

export default function useApi(apiFunc, ...args) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		request();
	}, []);

	const request = async () => {
		setLoading(true);
		const response = await apiFunc(...args);
		if (!response.ok) {
			setError(response.problem);
			setData(false);
		} else {
			setError(null);
			setData(response.data);
			setLoading(false);
		}
	};

	return { data, error, loading };
}
