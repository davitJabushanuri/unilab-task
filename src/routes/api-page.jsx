import { Header } from "@/components/header";
import { Posts } from "@/features/posts";

export const ApiPage = () => {
	return (
		<div>
			<Header />
			<main>
				<Posts />
			</main>
		</div>
	);
};
