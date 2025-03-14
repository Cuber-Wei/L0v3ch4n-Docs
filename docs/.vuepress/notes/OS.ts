import {defineNoteConfig} from 'vuepress-theme-plume'

export default defineNoteConfig({
    dir: 'OS',
    link: '/OS/',
    sidebar: [
        '',
        {
            prefix: 'ArchLinux',
            text: 'ArchLinux',
            collapsed: false,
            items: 'auto'
        }
    ]
})