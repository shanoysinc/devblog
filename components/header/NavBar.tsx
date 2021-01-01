import React from "react";
import styles from "../../styles/navbar/Navbar.module.css";
import HamburgerIcon from "../../assests/svg/hamburgerIcon.svg";
import Image from "next/image";

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<HamburgerIcon height={35} width={35} />
			<Image src="/img/avatar.png" alt="avator" height={40} width={40} />
		</nav>
	);
};

export default NavBar;
