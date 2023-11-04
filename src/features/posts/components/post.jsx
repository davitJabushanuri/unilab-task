import styles from "./styles/post.module.css";

export const Post = ({ post }) => {
	return (
		<article className={styles.container}>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</article>
	);
};
