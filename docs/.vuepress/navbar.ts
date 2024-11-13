import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    {text: '博客', link: '/blog/'},
    {text: '标签', link: '/blog/tags/'},
    {text: '归档', link: '/blog/archives/'},
    {
        text: '笔记',
        items: [
            {text: '语言学习', link: '/notes/language/README.md'},
            {text: '项目笔记', link: '/notes/project/README.md'},
        ]
    },
    {
        text: '个人项目',
        items: [
            {text: 'OJ项目', link: 'http://oj.l0v3ch4n.top'}
        ]
    },
    {text: '友链', link: '/friends/'},
])
