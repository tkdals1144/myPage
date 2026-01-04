import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <Link className={styles.link} to="/">
                Home
            </Link>
            <div className={styles.navbar}>
                <ul className={styles.li_wrap}>
                    <li>
                        <Link className={styles.link} to="/project">
                            project
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} to="/link">
                            About
                        </Link>
                    </li>
                    <li>
                        <a
                            className={styles.link}
                            href="https://github.com/tkdals1144"
                            target="_black"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
