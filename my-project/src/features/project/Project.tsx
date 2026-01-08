import { useState } from "react";
import styles from "./Project.module.css";

const Project = () => {
    const [project, setProject] = useState("project1");
    return (
        <div className={styles.project_wrap_wrap}>
            <div className={styles.porject_wrap}>
                <ul className={styles.project_type}>
                    {[1, 2].map((i) => (
                        <li
                            className={`${styles.project_num} ${
                                project === `project${i}` ? styles.project_num_active : styles.project_num_invalid
                            }`}
                            onClick={() => setProject(`project${i}`)}
                        >
                            project{i}
                        </li>
                    ))}
                </ul>
                <div className={styles.project_img_wrap}>
                    <img className={styles.img}></img>
                </div>
            </div>
        </div>
    );
};

export default Project;
