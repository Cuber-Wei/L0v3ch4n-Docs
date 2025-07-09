import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
    dir: "memorandum",
    link: "/memorandum/",
    sidebar: ["", "git", "grep", "nginx", "docker", "codeSnippet"],
});
