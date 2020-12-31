import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../pages/_app";
import { fetchAllPost } from "../../features/post/AsyncActions";
import axios from "axios";
import useSWR from "swr";

interface Props {
	setCurrentPostId: React.Dispatch<React.SetStateAction<string>>;
}
const url = "http://localhost:3000/api/blog";
const fetcher = (url) => axios.get(url).then((res) => res.data.posts);

const Posts = ({ setCurrentPostId }: Props) => {
	const dispatch = useAppDispatch();
	const { data } = useSWR(url, fetcher);

	const posts = useSelector((state: RootState) => state.posts);

	useEffect(() => {
		dispatch(fetchAllPost(data));
	}, [data]);

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
