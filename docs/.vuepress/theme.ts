import type { Theme } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default plumeTheme({
    // 添加您的部署域名
    hostname: "https://blog.l0v3ch4n.top/",
    docsRepo: 'https://github.com/Cuber-Wei/L0v3ch4n-Docs',
    docsDir: 'docs',

    codeHighlighter: {
        twoslash: true
    },

    copyCode: {
        showInMobile: true,
    },

    llmstxt: {
        llmsTxtTemplateGetter: {
            details: '',
            description: 'L0v3ch4n的个人博客，知识库',
        },
    },

    markdown: {
        abbr: true,
        annotation: true,
        timeline: true,
        codeTree: true,
        field: true,
        qrcode: true,
        collapse: true,
        caniuse: true,
        chartjs: true,
        mermaid: true,
        echarts: true,
        markmap: true,
        plantuml: true,
        chat: true,
        pdf: true,
        bilibili: true,
        youtube: true,
        audioReader: true,
        demo: true,
        plot: true,
        icons: true,
        codepen: true,
        codeSandbox: true,
        jsfiddle: true,
        npmTo: {
            tabs: ['pnpm', 'yarn', 'npm'], // 代码块组默认显示顺序
        },
        repl: {
            rust: true,
            go: true,
            python: true,
        },
    },

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    comment: {
        provider: "Giscus", // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'https://github.com/Cuber-Wei/Blog-Comments',
        repoId: 'R_kgDOROTkSA',
        category: "General",
        categoryId: 'DIC_kwDOROTkSM4C2QXG',
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
    },

    // 加密设置
    encrypt: {
        rules: {
            // 可以是 md 文件的相对路径，对该文件加密
            "/secrets/ShortArticle/ForLingeFirstLive/": "0817",
        },
    },
}) as Theme
