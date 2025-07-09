import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import { notes } from "./notes";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: "/L-logo.png",
    // your git repo url
    // docsRepo: 'https://github.com/Cuber-Wei/L0v3ch4n-Docs',
    // docsDir: 'docs',

    appearance: true,

    profile: {
        avatar: "https://q.qlogo.cn/headimg_dl?dst_uin=3134210778&spec=640&img_type=jpg",
        name: "L0v3ch4n",
        description: "一个在全栈开发道路上挣扎的萌新",
        circle: true,
        // location: '',
        organization: "南京航空航天大学",
    },

    navbar,
    notes,
    social: [
        {
            icon: "github",
            link: "https://github.com/Cuber-Wei/",
        },
        {
            icon: "bilibili",
            link: "https://space.bilibili.com/399538561",
        },
        // 邮箱
        {
            icon: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17zm-6.5-5.69L9 7.5h13zM5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4zM3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1"/></svg>`,
                name: "email",
            },
            link: "mailto:lovechan@nuaa.edu.cn",
        },
    ],
    navbarSocialInclude: ["github", "email"],

    // sidebarDepth: 3,

    footer: {
        message: `<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33060302001361" target="_blank">浙公网安备33060302001361</a>&emsp;<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2024137659号-1</a>`,
        copyright: "Copyright © 2024-present L0v3ch4n",
    },
});
