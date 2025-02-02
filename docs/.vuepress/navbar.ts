import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/', icon: 'material-symbols:home'},
    {text: '博客', link: '/blog/', activeMatch: '^/(blog|article)/', icon: 'material-symbols:menu-book'},
    // {text: '标签', link: '/blog/tags/', icon: 'ant-design:tags-outlined'},
    // {text: '归档', link: '/blog/archives/', icon: 'fa-regular:file-archive'},
    {
        text: '笔记本',
        icon: 'lucide:file-pen-line',
        items: [
            {
                text: '语言学习',
                link: '/notes/language/README.md',
                icon: 'material-symbols:language-spanish-rounded'
            },
            {text: '项目笔记', link: '/notes/project/README.md', icon: 'pajamas:project'},
            {text: '系统笔记', link: '/notes/OS/README.md', icon: 'grommet-icons:system'},
        ]
    },
    {
        text: '个人项目',
        icon: 'ant-design:project-outlined',
        items: [
            {text: 'OJ项目', link: 'http://oj.l0v3ch4n.top'}
        ]
    },
    {text: '友链', link: '/friends/', icon: 'fa-solid:user-friends'},
])
