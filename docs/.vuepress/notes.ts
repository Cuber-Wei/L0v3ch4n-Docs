import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const projectNote = defineNoteConfig({
    dir: 'project',
    link: '/project/',
    sidebar: [
        {
            text: 'OJ项目',
            items: [
                {text: '项目简介', link: '1.OJ-project-profile'},
                {text: '前端初始化', link: '2.OJ-frontend-init'},
            ]
        },
    ],
})

const languageNote = defineNoteConfig({
    dir: 'language',
    link: '/language/',
    sidebar: [
        {
            items: 'auto'
        }
    ]
})

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        projectNote,
        languageNote
    ],
})
