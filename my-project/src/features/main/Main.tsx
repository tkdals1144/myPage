import styles from "./Main.module.css";
const images = [
    `${import.meta.env.BASE_URL}images/image01.jpg`,
    `${import.meta.env.BASE_URL}images/image02.jpg`,
    `${import.meta.env.BASE_URL}images/image03.jpg`,
    `${import.meta.env.BASE_URL}images/image04.jpg`,
];
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
