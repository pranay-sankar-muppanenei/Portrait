import styles from '@/styles/navbar.module.css';
import { TbCropPortrait } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Home");

    const handleMenuClick = (label) => {
        setActiveMenu(label);
        setDropdownOpen(false); // Close dropdown on mobile click
    };

    return (
        <nav className={styles.nav}>
            <TbCropPortrait className={styles.icon0} />
            <div className={styles.navLeft}>
                <div className={styles.flex} onClick={() => handleMenuClick("Home")}>
                    <TbCropPortrait className={styles.icon} />
                    <p className={styles.portrait}>Portrait</p>
                </div>
                 <a
                    onClick={() => handleMenuClick("Home")}
                    className={activeMenu === "Home" ? styles.active : ""}
                >
                    Home
                </a>
                <a
                    onClick={() => handleMenuClick("Explore")}
                    className={activeMenu === "Explore" ? styles.active : ""}
                >
                    Explore
                </a>

                <div className={styles.newAlign}>
                    <a
                        onClick={() => handleMenuClick("Points")}
                        className={activeMenu === "Points" ? styles.active : ""}
                    >
                        Points
                    </a>
                    <span className={styles.new}>NEW!</span>
                </div>

                <a
                    onClick={() => handleMenuClick("About")}
                    className={activeMenu === "About" ? styles.active : ""}
                >
                    About
                </a>

                <a
                    onClick={() => handleMenuClick("Blog")}
                    className={activeMenu === "Blog" ? styles.active : ""}
                >
                    Blog
                </a>
            </div>

            <div className={styles.navRight}>
                <a>Login</a>
                 <div className={styles.signupBtnWrapper}>
            <button className={styles.signupBtn}>Sign up</button>
        </div>

                <div className={styles.hamburger}>
                    {!dropdownOpen && (
                        <GiHamburgerMenu
                            className={styles.icon1}
                            onClick={() => setDropdownOpen(true)}
                        />
                    )}
                    {dropdownOpen && (
                        <RxCross2
                            className={styles.icon2}
                            onClick={() => setDropdownOpen(false)}
                        />
                    )}

                    {dropdownOpen && (
                        <div className={styles.dropdown}>
                            <a
                                onClick={() => handleMenuClick("Home")}
                                className={activeMenu === "Home" ? styles.active : ""}
                            >
                                Home
                            </a>
                            <a
                                onClick={() => handleMenuClick("Explore")}
                                className={activeMenu === "Explore" ? styles.active : ""}
                            >
                                Explore
                            </a>
                            <div className={styles.newAlign}>
                                <a
                                    onClick={() => handleMenuClick("Points")}
                                    className={activeMenu === "Points" ? styles.active : ""}
                                >
                                    Points
                                </a>
                                <span className={styles.new}>NEW!</span>
                            </div>
                            <a
                                onClick={() => handleMenuClick("About")}
                                className={activeMenu === "About" ? styles.active : ""}
                            >
                                About
                            </a>
                            <a
                                onClick={() => handleMenuClick("Blog")}
                                className={activeMenu === "Blog" ? styles.active : ""}
                            >
                                Blog
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
