import styles from "./Main.module.css";
const images = ["/images/image01.jpg", "/images/image02.jpg", "/images/image03.jpg", "/images/image04.jpg"];
const Main = () => {
    return (
        <>
            <section className={styles.banner_wrap}>
                <div className={styles.banner}>
                    <ul className={styles.banner_ul}>
                        {images.map((image) => (
                            <li className={styles.banner_li}>
                                <div className={styles.banner_img}>
                                    <img src={image} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Main;
