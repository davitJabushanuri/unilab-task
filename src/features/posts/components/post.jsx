import styles from "./styles/post.module.css";

export const Post = ({ post }) => {
	return (
		<article aria-label={post.title} className={styles.container}>
			<h2>{post.title}</h2>
			<p aria-label={post.body}>{post.body}</p>
		</article>
	);
};
