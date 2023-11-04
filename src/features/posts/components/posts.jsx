import { Pagination, usePagination } from "@/features/pagination";
import { useFetch } from "../hooks/useFetch";
import { Post } from "./post";
import styles from "./styles/posts.module.css";

export const Posts = () => {
	const limit = 10;
	const totalPosts = 100;

	const { currentPage, totalPages, handlePageChange } = usePagination(
		totalPosts,
		limit,
	);

	const { data, loading, error } = useFetch(currentPage);

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
