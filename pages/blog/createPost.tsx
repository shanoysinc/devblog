import React from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";

const QuillEditor = dynamic(() => import("../../components/quill/Quill"), {
	ssr: false,
});
const createPost = () => {
	return (
		<div className={styles.quillContainer}>
			<h1>create post</h1>
			<QuillEditor />
		</div>
	);
};

export default createPost;
