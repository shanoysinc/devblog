import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../pages/_app";
import { fetchAllPost, deletePost } from "../../features/post/AsyncActions";
import styles from "../../styles/post/postCard.module.css";
import OptionsICon from "../../public/svg/option.svg";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import axios from "axios";
import useSWR from "swr";

interface Props {
	setCurrentPostId: React.Dispatch<React.SetStateAction<string>>;
}

const url = "http://localhost:3000/api/blog";
const fetcher = (url) => axios.get(url).then((res) => res.data.posts);
const tagColor = ["#43a1f9", "#fbc1bc", "#222831", "#6ef7c8"];

const Posts = ({ setCurrentPostId }: Props) => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { data } = useSWR(url, fetcher);

	const posts = useSelector((state: RootState) => state.posts);

	useEffect(() => {
		dispatch(fetchAllPost(data));
	}, [data]);

	const optionsVisibility = (postId) => {
		const currentPost = document.getElementById(postId);
		const isNotVisible = currentPost.style.display === "";
		const isVisible = currentPost.style.display === "block";

		if (isNotVisible) {
			currentPost.style.display = "block";
		} else if (isVisible) {
			currentPost.style.display = "";
		}
	};

	const deletePostHandler = (postId) => {
		dispatch(deletePost(postId));
	};
	const editPostHandler = (postId) => {
		router.push("/blog/createPost");
	};

	return (
		<div className={styles.postContainer}>
			{posts.map((post) => (
				<div key={post._id} className={styles.postCard}>
					<div className={styles.cardHeader}>
						<h3 onClick={() => setCurrentPostId(post._id)}>
							{post.title}
						</h3>
						<p> {dayjs(post.createAt).format("DD MMMM YYYY")}</p>
					</div>
					<div className={styles.bottomItems}>
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

						<div className={styles.options}>
							<OptionsICon
								height={25}
								width={25}
								onClick={() => optionsVisibility(post._id)}
							/>
						</div>
						<div className={styles.optionsDropDownMenu}>
							<div className={styles.dropDownList} id={post._id}>
								<div onClick={() => editPostHandler(post._id)}>
									Edit Post
								</div>
								<div
									onClick={() => deletePostHandler(post._id)}
								>
									Delete Post
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Posts;
