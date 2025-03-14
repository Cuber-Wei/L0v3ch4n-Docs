import {defineNoteConfig} from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'interview',
    link: '/interview/',
    sidebar: [
        '',
        {
            prefix: 'HTML',
            text: 'HTML',
            collapsed: false,
            items: 'auto'
        },
        {
            prefix: 'CSS',
            text: 'CSS',
            collapsed: false,
            items: 'auto'
        },
        {
            prefix: 'JavaScript',
            text: 'JavaScript',
            collapsed: false,
            items: 'auto'
        },
        {
            prefix: 'browser',
            text: '浏览器',
            collapsed: false,
            items: 'auto'
        },
        {
            prefix: 'Vue3',
            text: 'Vue3',
            collapsed: false,
            items: 'auto'
        },
        {
            prefix: 'computerNetwork',
            text: '计算机网络原理',
            collapsed: false,
            items: 'auto'
        },
        {
            prefix: 'tools',
            text: '工具',
            collapsed: false,
            items: 'auto'
        },
    ]
})