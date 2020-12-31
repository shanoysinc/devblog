import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAppDispatch } from "../../pages/_app";
import { createPost } from "../../features/post/AsyncActions";
import { useRouter } from "next/router";
const Quill = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const [content, setContent] = useState("");
	const [tags, setTags] = useState("");
	const [title, setTitle] = useState("");

	const CreatePostHandler = () => {
		const post = { content, tags: tags.split(","), title };
		dispatch(createPost(post));
		setContent("");
		setTags("");
		setTitle("");
		router.push("/");
	};

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
			],
			["link", "image"],
			["clean"],
		],
	};
	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
	];

	return (
		<>
			<input
				type="text"
				placeholder="Title"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Tags....separate tags with a comma "
				onChange={(e) => setTags(e.target.value)}
			/>

			<ReactQuill
				theme="snow"
				value={content}
				onChange={setContent}
				placeholder="helo"
				formats={formats}
				modules={modules}
			/>
			<button onClick={CreatePostHandler}>Create</button>
		</>
	);
};

export default Quill;
