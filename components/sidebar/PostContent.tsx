import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../pages/_app";

interface Props {
	currentPostId: string;
}
const PostContent = ({ currentPostId }: Props) => {
	const post = useSelector((state: RootState) =>
		state.posts.find((post) => post._id == currentPostId)
	);
	console.log("current post", post);

	return (
		<>
			{post ? (
				<>
					<h1>{post.title}</h1>
					<td dangerouslySetInnerHTML={{ __html: post.content }} />
				</>
			) : null}
		</>
	);
};

export default PostContent;
