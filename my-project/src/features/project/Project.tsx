import { useState } from "react";
import styles from "./Project.module.css";
import { PROJECT_DATA } from "./data";

const Project = () => {
    // 값 자체를 타입으로 승격시키는 방법 (as const)
    const PROJECT_KEYS = ["project1", "project2"] as const;
    type ProjectKey = (typeof PROJECT_KEYS)[number];
    const [project, setProject] = useState<ProjectKey>("project1");
    const data = PROJECT_DATA[project];

    return (
        <div className={styles.project_wrap_wrap}>
            <div className={styles.porject_wrap}>
                <ul className={styles.project_type}>
                    {PROJECT_KEYS.map((key) => (
                        <li
                            className={`${styles.project_num} ${
                                project === key ? styles.project_num_active : styles.project_num_invalid
                            }`}
                            onClick={() => setProject(key)}
                        >
                            {key}
                        </li>
                    ))}
                </ul>
                <div className={styles.file_wrap}>
                    <a href={data.url} className={styles.file} download>
                        {project} portfolio
                    </a>
                </div>
                <div className={styles.project_img_wrap}>
                    <img className={styles.project_img} src={`${import.meta.env.BASE_URL}/images/${project}.png`}></img>
                </div>
                <div className={styles.title_wrap}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <h4 className={styles.outline}>( {data.outline} )</h4>
                </div>
                <hr />
                <p className={styles.explain}>{data.explain}</p>
                <div className={styles.skill_wrap}>
                    <h1 className={styles.title} style={{ fontWeight: "400" }}>
                        사용 기술
                    </h1>
                    <hr />
                    <ul className={styles.skill_ul}>
                        {data.skills.map((skill) => (
                            <li className={styles.skill_li}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;
