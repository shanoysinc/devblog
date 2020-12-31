import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostContent from "../components/sidebar/PostContent";
import Posts from "../components/sidebar/Posts";
import Panel from "../components/sidebar/Panel";
import NavBar from "../components/header/NavBar";
export default function Home() {
	return (
		<div>
			<NavBar />
			<div className={styles.container}>
				<Panel />
				<Posts />
				<PostContent />
			</div>
		</div>
	);
}
