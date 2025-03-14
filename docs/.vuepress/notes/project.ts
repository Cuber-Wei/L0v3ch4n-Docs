import {defineNoteConfig} from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'project',
    link: '/project/',
    sidebar: [
        '',
        {
            prefix: 'OJ',
            text: 'Online Judge',
            collapsed: false,
            items: 'auto'
        }
    ],
})