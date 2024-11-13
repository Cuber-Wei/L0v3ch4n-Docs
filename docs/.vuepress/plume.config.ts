import {defineThemeConfig} from 'vuepress-theme-plume'
import {navbar} from './navbar'
import {notes} from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: 'https://theme-plume.vuejs.press/plume.png',
    // your git repo url
    docsRepo: '',
    docsDir: 'docs',

    appearance: true,

    profile: {
        avatar: './public/L-logo.png',
        name: 'L0v3ch4n Notes',
        description: 'A site for l0v3ch4n&#x27;s learning.',
        // circle: true,
        // location: '',
        // organization: '',
    },

    navbar,
    notes,
    social: [
        {icon: 'github', link: 'https://github.com/Cuber-Wei/'},
    ],

})
