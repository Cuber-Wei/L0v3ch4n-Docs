import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
    { text: "首页", link: "/", icon: "material-symbols:home" },
    {
        text: "博客",
        link: "/blog/",
        activeMatch: "^/(blog|article)/",
        icon: "material-symbols:menu-book",
    },
    // {text: '标签', link: '/blog/tags/', icon: 'ant-design:tags-outlined'},
    // {text: '归档', link: '/blog/archives/', icon: 'fa-regular:file-archive'},
    {
        text: "笔记本",
        icon: "lucide:file-pen-line",
        items: [
            {
                text: "备忘录",
                link: "/memorandum/",
                activeMatch: "^/memorandum/",
                icon: "emojione:memo",
            },
            {
                text: "语言学习",
                link: "/language/",
                activeMatch: "^/language/",
                icon: "material-symbols:language-spanish-rounded",
            },
            {
                text: "TS类型体操",
                link: "/TypeGymnastics/",
                activeMatch: "^/TypeGymnastics/",
                icon: "proicons:typescript",
            },
            {
                text: "项目开发笔记",
                link: "/project/",
                activeMatch: "^/project/",
                icon: "pajamas:project",
            },
            {
                text: "面试题笔记",
                link: "/interview/",
                activeMatch: "^/interview/",
                icon: "codicon:comment-unresolved",
            },
            {
                text: "系统笔记",
                link: "/OS/",
                activeMatch: "^/OS/",
                icon: "grommet-icons:system",
            },
            {
                text: "随笔",
                link: "/jotting/",
                activeMatch: "^/jotting/",
                icon: "streamline-freehand:book-bookmark",
            },
            {
                text: "加密文章",
                link: "/secrets/",
                activeMatch: "^/secrets/",
                icon: "material-symbols:lock",
            },
        ],
    },
    {
        text: "个人项目",
        icon: "ant-design:project-outlined",
        items: [
            {
                text: "OJ项目",
                link: "http://oj.l0v3ch4n.top",
            },
        ],
    },
    {
        text: "友链",
        link: "/friends/",
        activeMatch: "^/friends/",
        icon: "fa-solid:user-friends",
    },
]);
