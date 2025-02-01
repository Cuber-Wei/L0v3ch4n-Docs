import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const projectNote = defineNoteConfig({
    dir: 'project',
    link: '/project/',
    sidebar: [
        '',
        {
            prefix: 'OJ项目',
            text: 'Online Judge',
            collapsed: false,
            items: 'auto'
        }
    ],
})

const languageNote = defineNoteConfig({
    dir: 'language',
    link: '/language/',
    sidebar: [
        '',
        {
            prefix: '基础语法',
            text: '基础语法',
            collapsed: false,
            items: 'auto'
        }
    ]
})

const osNote = defineNoteConfig({
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

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        projectNote,
        languageNote,
        osNote,
    ],
})
