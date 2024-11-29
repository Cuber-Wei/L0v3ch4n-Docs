import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const projectNote = defineNoteConfig({
    dir: 'project',
    link: '/project/',
    sidebar: [
        {
            items: 'auto'
        }
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

const osNote = defineNoteConfig({
    dir: 'OS',
    link: '/OS/',
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
        languageNote,
        osNote,
    ],
})
