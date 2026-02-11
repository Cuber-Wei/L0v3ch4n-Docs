import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
    type: "doc",
    title: "随笔",
    dir: "jotting",
    linkPrefix: "/jotting/",
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
