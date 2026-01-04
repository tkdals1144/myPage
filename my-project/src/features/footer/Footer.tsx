import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
const items = ["/plus/footer_phone.svg", "/plus/footer_mail.svg", "/plus/footer_talk.svg"];
const texts = ["010-2282-7617", "rioran@naver.com", "Yoritokk"];

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer_box}>
                <div className={styles.footer_ul_wrap}>
                    <ul className={styles.footer_list_wrap}>
                        <li className={`${styles.footer_list} ${styles.footer_link}`} id={styles.footer_info}>
                            <img src="/plus/footer_info.svg" alt="" className={styles.footer_icon} />
                            <Link id={styles.footer_info_anchor} className={styles.footer_paragraph} to="/about">
                                About Me
                            </Link>
                        </li>
                        <li
                            className={`${styles.footer_list} ${styles.footer_link}`}
                            id={styles.footer_git}
                            onClick={() => window.open("https://github.com/tkdals1144")}
                        >
                            <img src="/plus/footer_git.svg" alt="" className={styles.footer_icon} />
                            <p className={styles.footer_paragraph}>GitHub</p>
                        </li>
                    </ul>
                    <ul className={styles.footer_list_wrap}>
                        {items.map((item, idx) => (
                            <li className={styles.footer_list}>
                                <img src={item} alt="" className={styles.footer_icon} />
                                <p className={styles.footer_paragraph}>{texts[idx]}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.footer_link2}>
                    <div className={styles.footer_box}>
                        <h2 className={styles.h2}>this is the footer section</h2>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
