import { useState, useEffect } from "react";

export const useFetch = (page) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
				);
				const json = await response.json();

				setData(json);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		fetchUsers();
	}, [page]);

	return { data, loading, error };
};
