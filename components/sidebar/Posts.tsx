import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../pages/_app";
import { fetchAllPost } from "../../features/post/AsyncActions";
import styles from "../../styles/post/postCard.module.css";
import dayjs from "dayjs";
import axios from "axios";
import useSWR from "swr";

interface Props {
	setCurrentPostId: React.Dispatch<React.SetStateAction<string>>;
}
const url = "http://localhost:3000/api/blog";
const fetcher = (url) => axios.get(url).then((res) => res.data.posts);

const smallContent = (content: string) => {
	const start = content.search("<p>");
	const end = content.search("</p>");
	if (start < 0) return "";
	console.log(start, end);
	console.log(content);

	return content.substr(start + 3, end - 3);
};
const tagColor = ["#3d64ff", "#fbc1bc", "#222831", "#6ef7c8"];

const Posts = ({ setCurrentPostId }: Props) => {
	const dispatch = useAppDispatch();
	const { data } = useSWR(url, fetcher);

	const posts = useSelector((state: RootState) => state.posts);

	useEffect(() => {
		dispatch(fetchAllPost(data));
	}, [data]);

	return (
		<div className={styles.postContainer}>
			{posts.map((post) => (
				<button
					key={post._id}
					onClick={() => setCurrentPostId(post._id)}
					className={styles.postCard}
				>
					<div className={styles.cardHeader}>
						<h3>{post.title}</h3>
						<p> {dayjs(post.createAt).format("DD MMMM YYYY")}</p>
					</div>
					{/* <p className={styles.content}>
						{smallContent(post.content)}
					</p> */}
					<div className={styles.tags}>
						{post.tags.map((tag, index) => {
							return (
								<p
									key={index}
									className={styles.tag}
									style={{
										backgroundColor: tagColor[index],
									}}
								>
									{tag}
								</p>
							);
						})}
					</div>
				</button>
			))}
		</div>
	);
};

export default Posts;
