import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../pages/_app";
import { fetchAllPost } from "../../features/post/AsyncActions";

const Posts = () => {
	const dispatch = useAppDispatch();
	const posts = useSelector((state: RootState) => state.posts);

	useEffect(() => {
		dispatch(fetchAllPost());
	}, [dispatch]);
	return (
		<div>
			<h1>Posts</h1>
			{posts.map((post) => (
				<h3 key={post._id}>{post.content}</h3>
			))}
		</div>
	);
};

export default Posts;
