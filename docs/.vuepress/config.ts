import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: 'L0v3ch4n',
    description: 'L0v3ch4n&#x27;s learning records.',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'L0v3ch4n',
            description: 'L0v3ch4n&#x27;s learning records.'
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/L-logo.png'}],
    ],

    bundler: viteBundler(),

    theme: plumeTheme({
        // 添加您的部署域名
        hostname: 'https://blog.l0v3ch4n.top/',

        plugins: {
            /**
             * Shiki 代码高亮
             * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
             */
            shiki: {
                // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
                languages: ['sh', 'css', 'html', 'jsx', 'javascript', 'js', 'ts', 'stylus', 'json', 'yaml', 'tsx',
                    'dockerfile', 'bash', 'groovy', 'yml', 'md', 'nginx', 'toml', 'rust', 'vue', 'python'],
            },

            /**
             * markdown enhance
             * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
             */
            markdownEnhance: {
                demo: true,
                chartjs: true,
                echarts: true,
                mermaid: true,
                flowchart: true,
            },

            /**
             *  markdown power
             * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
             */
            markdownPower: {
                pdf: true,
                caniuse: true,
                plot: true,
                bilibili: true,
                youtube: true,
                icons: true,
                codepen: true,
                codeSandbox: true,
                jsfiddle: true,
                repl: {
                    go: true,
                    rust: true,
                    kotlin: true,
                },
            },

            /**
             * 评论 comments
             * @see https://theme-plume.vuejs.press/guide/features/comments/
             */
            // comment: {
            //     provider: "Waline", // "Artalk" | "Giscus" | "Twikoo" | "Waline"
            //     comment: true,
            //     repo: 'https://github.com/Cuber-Wei/L0v3ch4n-Docs',
            //     repoId: '',
            //     categoryId: '',
            //     mapping: 'pathname',
            //     reactionsEnabled: true,
            //     inputPosition: 'top',
            // },
        },
    }),
})
