import React from "react";
import styles from "../../styles/navbar/Navbar.module.css";
import HamburgerIcon from "../../assests/svg/hamburgerIcon.svg";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../assests/svg/logo-1.svg";
const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<HamburgerIcon
				height={35}
				width={35}
				fill="blue"
				className={styles.hamburgerIcon}
			/>
			<Link href="/">
				<a className={styles.logo}>
					<Logo height={35} width={35} />
					<h3> DevBlog</h3>
				</a>
			</Link>
			<div className={styles.centerNavItems}>
				<Link href="/">
					<a>Explore</a>
				</Link>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/">
					<a>About</a>
				</Link>
			</div>
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
