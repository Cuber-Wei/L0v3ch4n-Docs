import {defineThemeConfig} from 'vuepress-theme-plume'
import {navbar} from './navbar'
import {notes} from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: 'https://q.qlogo.cn/headimg_dl?dst_uin=3134210778&spec=640&img_type=jpg',
    // your git repo url
    docsRepo: 'https://github.com/Cuber-Wei/L0v3ch4n-Docs',
    docsDir: 'docs',

    appearance: true,

    profile: {
        avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3134210778&spec=640&img_type=jpg',
        name: 'L0v3ch4n',
        description: 'L0v3ch4n&#x27;s learning records.',
        // circle: true,
        // location: '',
        // organization: '',
    },

    navbar,
    notes,
    social: [
        {
            icon: 'github', link: 'https://github.com/Cuber-Wei/'
        },
    ],

    sidebarDepth: 3,

})
