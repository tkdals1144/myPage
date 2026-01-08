export const profiles = [
    {
        icon: `${import.meta.env.BASE_URL}plus/profile_img1.svg`,
        info: "1999.11.14",
    },
    {
        icon: `${import.meta.env.BASE_URL}plus/profile_img2.svg`,
        info: "경기도 구리시 검배로 142",
    },
    {
        icon: `${import.meta.env.BASE_URL}plus/profile_img3.svg`,
        info: "rioran@naver.com",
    },
];

export const files = [
    {
        label: "이력서.pdf",
        fileName: "이상민_이력서",
        fileImg: `${import.meta.env.BASE_URL}/plus/file_img.svg`,
        url: `${import.meta.env.BASE_URL}files/file1.pdf`,
    },
    {
        label: "포트폴리오.pdf",
        fileName: "이상민_포트폴리오",
        fileImg: `${import.meta.env.BASE_URL}/plus/file_img.svg`,
        url: `${import.meta.env.BASE_URL}files/file2.pdf`,
    },
];
export const educations = [
    {
        start: "2019.03",
        end: "2025.08",
        school: "한국공학대학교",
    },
    {
        start: "2015.03",
        end: "2018.03",
        school: "구리고등학교",
    },
];
export const skills = [
    {
        label: "frontend",
        skill: ["React (SPA)", "Thymeleaf (SSR)", "CSS", "Vanilla js (ES6+)", "jquery"],
    },
    { label: "backend", skill: ["Java", "Spring / Springboot", "Jsp & Servlet (Legacy)", "MyBatis"] },
    { label: "database", skill: ["mySQL", "Oracle"] },
];
