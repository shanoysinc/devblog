import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../pages/_app";
import { fetchAllPost } from "../../features/post/AsyncActions";

interface Props {
	setCurrentPostId: React.Dispatch<React.SetStateAction<string>>;
}
const Posts = ({ setCurrentPostId }: Props) => {
	const dispatch = useAppDispatch();
	const posts = useSelector((state: RootState) => state.posts);

	useEffect(() => {
		dispatch(fetchAllPost());
	}, [dispatch]);

	return (
		<div>
			<h1>Posts</h1>
			{posts.map((post) => (
				<button
					key={post._id}
					onClick={() => setCurrentPostId(post._id)}
				>
					{post.title}
				</button>
			))}
		</div>
	);
};

export default Posts;
