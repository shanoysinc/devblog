import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../pages/_app";
import { Markup } from "interweave";
interface Props {
	currentPostId: string;
}
const PostContent = ({ currentPostId }: Props) => {
	const post = useSelector((state: RootState) =>
		state.posts.find((post) => post._id == currentPostId)
	);
	console.log("current post", post);

	return (
		<div>
			{post ? (
				<>
					<h1>{post.title}</h1>
					<Markup content={post.content} />
				</>
			) : null}
		</div>
	);
};

export default PostContent;
