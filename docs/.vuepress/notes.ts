import {defineNotesConfig} from 'vuepress-theme-plume'
import projectNote from "./notes/project"
import interviewNote from "./notes/interview";
import languageNote from "./notes/language";
import osNote from "./notes/OS";
import memorandum from "./notes/memorandum";
import secretsNote from './notes/secrets';

export const notes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        projectNote,
        languageNote,
        osNote,
        interviewNote,
        memorandum,
        secretsNote,
    ],
})
