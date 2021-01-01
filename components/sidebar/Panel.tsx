import React from "react";
import styles from "../../styles/post/panelContainer.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import CreateIcon from "../../public/svg/create.svg";
import TagIcon from "../../public/svg/tag.svg";
import TrashIcon from "../../public/svg/trash.svg";
import ListIcon from "../../public/svg/list.svg";

const Panel = () => {
	const router = useRouter();
	const createPostRoute = () => {
		router.push("/blog/createPost");
	};
	return (
		<div className={styles.container}>
			<div className={styles.panelList}>
				<button className={styles.panelItem}>
					<ListIcon height={17} width={17} fill="blue" />
					<span>All Post</span>
				</button>
				<button className={styles.panelItem}>
					<TagIcon height={17} width={17} fill="orange" />
					<span>Tags</span>
				</button>
				<button className={styles.panelItem}>
					<TrashIcon height={17} width={17} fill="red" />
					<span>Trash</span>
				</button>
			</div>
			<button className={styles.createBtn} onClick={createPostRoute}>
				<CreateIcon height={15} width={15} fill="white" />
				<p> create</p>
			</button>
		</div>
	);
};

export default Panel;
