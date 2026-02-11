import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
    type: "doc",
    title: "备忘录",
    dir: "memorandum",
    linkPrefix: "/memorandum/",
    sidebar: ["", "git", "grep", "nginx", "docker", "codeSnippet"],
});
