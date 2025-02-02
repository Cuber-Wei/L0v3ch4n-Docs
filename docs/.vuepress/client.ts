import {defineClientConfig} from 'vuepress/client'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'
//
import './theme/styles/custom.css'
import CloudMusicPlayer from "./theme/components/CloudMusicPlayer.vue";
import PythonPlayground from "./theme/components/PythonPlayground.vue";

export default defineClientConfig({
    enhance({app}) {
        // app.component('RepoCard', RepoCard)
        // app.component('CustomComponent', CustomComponent)
        app.component('CloudMusicPlayer', CloudMusicPlayer)
        app.component('PythonPlayground', PythonPlayground)
    },
})
