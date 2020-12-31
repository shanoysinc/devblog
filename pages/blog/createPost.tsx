import React from "react";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("../../components/quill/Quill"), {
	ssr: false,
});
const createPost = () => {
	return (
		<div>
			<h1>create post</h1>
			<QuillEditor />
		</div>
	);
};

export default createPost;
