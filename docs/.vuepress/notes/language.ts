import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: "language",
    link: "/language/",
    sidebar: [
        "",
        {
            prefix: "Python",
            text: "Python",
            collapsed: true,
            items: "auto",
        },
        // {
        //     prefix: 'Java',
        //     text: 'Java',
        //     collapsed: true,
        //     items: 'auto'
        // },
        {
            prefix: "JavaScript",
            text: "JavaScript",
            collapsed: true,
            items: "auto",
        },
        {
            prefix: "Go",
            text: "Go",
            collapsed: true,
            items: "auto",
        },
    ],
});
