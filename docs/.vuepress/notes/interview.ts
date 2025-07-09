import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: "interview",
    link: "/interview/",
    sidebar: [
        "",
        {
            prefix: "HTML",
            text: "HTML",
            collapsed: false,
            items: "auto",
        },
        {
            prefix: "CSS",
            text: "CSS",
            collapsed: true,
            items: "auto",
        },
        {
            prefix: "JavaScript",
            text: "JavaScript",
            collapsed: true,
            items: "auto",
        },
        {
            prefix: "browser",
            text: "浏览器",
            collapsed: true,
            items: "auto",
        },
        {
            prefix: "Vue3",
            text: "Vue3",
            collapsed: true,
            items: "auto",
        },
        {
            prefix: "computerNetwork",
            text: "计算机网络原理",
            collapsed: true,
            items: "auto",
        },
        {
            prefix: "tools",
            text: "工具",
            collapsed: true,
            items: "auto",
        },
        {
            prefix: "tricks",
            text: "技巧",
            collapsed: true,
            items: "auto",
        },
    ],
});
