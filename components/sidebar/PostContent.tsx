import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../pages/_app";
import { Markup } from "interweave";
import styles from "../../styles/post/postContent.module.css";
interface Props {
	currentPostId: string;
}
const tagColor = ["#43a1f9", "#fbc1bc", "#222831", "#6ef7c8"];

const PostContent = ({ currentPostId }: Props) => {
	const post = useSelector((state: RootState) =>
		state.posts.find((post) => post._id == currentPostId)
	);
	console.log("current post", post);

	return (
		<>
			{post ? (
				<div className={styles.container}>
					<div className={styles.titleContainer}>
						<h1>{post.title}</h1>
						<div className={styles.tags}>
							{post.tags
								? post.tags.map((tag, index) => {
										return (
											<p
												key={index}
												className={styles.tag}
												style={{
													backgroundColor:
														tagColor[index],
												}}
											>
												{tag}
											</p>
										);
								  })
								: null}
						</div>
					</div>

					<Markup content={post.content} />
				</div>
			) : null}
		</>
	);
};

export default PostContent;
