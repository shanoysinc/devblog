import React from "react";
import styles from "../../styles/post/panelContainer.module.css";
import { useRouter } from "next/router";
const Panel = () => {
	const router = useRouter();
	const createPostRoute = () => {
		router.push("/blog/createPost");
	};
	return (
		<div className={styles.container}>
			<h1>Panel</h1>
			<button className={styles.createBtn} onClick={createPostRoute}>
				create
			</button>
		</div>
	);
};

export default Panel;
