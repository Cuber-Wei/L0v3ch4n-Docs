import {defineNoteConfig} from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'secrets',
    link: '/secrets/',
    sidebar: [
        '',
        {
            prefix: 'ShortArticle',
            text: '小短文',
            collapsed: false,
            items: 'auto'
        }
    ],
})