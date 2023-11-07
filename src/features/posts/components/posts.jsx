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

	return (
		<div className={styles.container}>
			{loading ? (
				<div style={{ textAlign: "center", padding: "1rem" }}>Loading</div>
			) : error ? (
				<div style={{ textAlign: "center", padding: "1rem" }}>
					Error: {error}
				</div>
			) : (
				<div role="region" aria-label="Home timeline">
					<h2 className="visually-hidden">Recent posts</h2>
					<div className={styles.posts}>
						{data.map((post) => {
							return <Post post={post} key={post.id} />;
						})}
					</div>
				</div>
			)}
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
