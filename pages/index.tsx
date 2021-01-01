import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import PostContent from "../components/sidebar/PostContent";
import Posts from "../components/sidebar/Posts";
import Panel from "../components/sidebar/Panel";
import NavBar from "../components/header/NavBar";
export default function Home() {
	const [currentPostId, setCurrentPostId] = useState(null);

	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<div className={styles.panelContainer}>
					<Panel />
				</div>

				<div className={styles.postContainer}>
					<Posts setCurrentPostId={setCurrentPostId} />
				</div>
				<div className={styles.contentContainer}>
					<PostContent currentPostId={currentPostId} />
				</div>
			</div>
		</>
	);
}
