import styles from "./About.module.css";
import { profiles, files, educations, skills } from "./data";

const About = () => {
    return (
        <div style={{ backgroundColor: "white", position: "relative", overflowY: "scroll" }}>
            <h1 className={styles.name_tag}>이상민</h1>
            <img className={styles.profile_img} src={`${import.meta.env.BASE_URL}/profile/profile.jpg`} />
            <ul className={styles.info_box}>
                {profiles.map((item) => (
                    <li className={styles.profile_info_wrap}>
                        <img className={styles.profile_icon} src={item.icon} />
                        <p className={styles.profile_info_txt}>{item.info}</p>
                    </li>
                ))}
            </ul>

            <ul className={styles.file_box}>
                {files.map((item) => (
                    <li className={styles.file_list}>
                        <img className={styles.file_img} src="/plus/file_img.svg" />
                        <a href={item.url} className={styles.file_txt} download={item.fileName}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className={styles.box_wrap}>
                <h1 className={styles.title}>학력</h1>
                <hr className={styles.line} />
                <ul className={styles.edu_box}>
                    {educations.map((item) => (
                        <li className={styles.edu_list}>
                            <p className={styles.edu_years}>{item.start}</p>
                            <p className={styles.edu_years}>~</p>
                            <p className={styles.edu_years}>{item.end}</p>
                            <p className={styles.edu_txt}>{item.school}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.box_wrap}>
                <h1 className={styles.title}>기술스택</h1>
                <hr className={styles.line} />
                <div className={styles.skill_box_wrap}>
                    {skills.map((item) => (
                        <div className={styles.skill_box}>
                            <h1 className={styles.skill_title}>{item.label}</h1>
                            <ul className={styles.skills_wrap}>
                                {item.skill.map((skill) => (
                                    <li className={styles.skill_list}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
