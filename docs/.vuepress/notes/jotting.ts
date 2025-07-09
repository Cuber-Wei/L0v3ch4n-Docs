import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: "jotting",
    link: "/jotting/",
    sidebar: [
        "",
        {
            prefix: "2024",
            text: "2024",
            collapsed: false,
            items: "auto",
        },
        {
            prefix: "2025",
            text: "2025",
            collapsed: true,
            items: "auto",
        },
    ],
});
