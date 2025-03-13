import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const projectNote = defineNoteConfig({
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

const languageNote = defineNoteConfig({
    dir: 'language',
    link: '/language/',
    sidebar: [
        '',
        {
            prefix: 'Python',
            text: 'Python',
            collapsed: true,
            items: 'auto'
        },
        // {
        //     prefix: 'Java',
        //     text: 'Java',
        //     collapsed: true,
        //     items: 'auto'
        // },
        {
            prefix: 'JavaScript',
            text: 'JavaScript',
            collapsed: true,
            items: 'auto'
        },
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

const interviewNote = defineNoteConfig({
    dir: 'interview',
    link: '/interview/',
    sidebar: [
        '',
        {
            prefix: 'browser',
            text: '浏览器',
            collapsed: false,
            items: 'auto'
        },
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
    ]
})

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        projectNote,
        languageNote,
        osNote,
        interviewNote,
    ],
})
