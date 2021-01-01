import React from "react";
import styles from "../../styles/navbar/Navbar.module.css";
import HamburgerIcon from "../../assests/svg/hamburgerIcon.svg";
import Image from "next/image";

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<HamburgerIcon
				height={35}
				width={35}
				className={styles.hamburgerIcon}
			/>
			<div className={styles.author}>
				<Image
					src="/img/avatar.png"
					alt="avatar"
					height={40}
					width={40}
					layout={"fixed"}
				/>
				<div className={styles.authorInfo}>
					<p className={styles.authorName}>John Doe</p>
					<p className={styles.authorEmail}>JohnDoe@gmail.com</p>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
