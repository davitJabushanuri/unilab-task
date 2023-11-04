import { useFetch } from "../hooks/useFetch";
import { Pagination } from "../../pagination";
import { Post } from "./post";
import styles from "./styles/posts.module.css";

import { useState } from "react";

export const Posts = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 10;
	const totalPosts = 100;
	const totalPages = Math.ceil(totalPosts / limit);

	const { data, loading, error } = useFetch(currentPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	if (loading) {
		return <div className={styles.container}>Loading...</div>;
	}

	if (error) {
		return <div className={styles.container}>Error: {error}</div>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.posts}>
				{data.map((post) => {
					return <Post post={post} key={post.id} />;
				})}
			</div>
			<div className={styles.pagination}>
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					onPageChange={handlePageChange}
				/>
			</div>
		</div>
	);
};
