import { h } from 'vue'
import { Layout } from 'vuepress-theme-plume/client'
import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
import PageContextMenu from 'vuepress-theme-plume/features/PageContextMenu.vue'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import { defineClientConfig } from 'vuepress/client'

import CloudMusicPlayer from './.vuepress/theme/components/CloudMusicPlayer.vue'
import Landing from './.vuepress/theme/components/Landing.vue'
import './.vuepress/theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('RepoCard', RepoCard)
    app.component('NpmBadge', NpmBadge)
    app.component('NpmBadgeGroup', NpmBadgeGroup)
    app.component('CloudMusicPlayer', CloudMusicPlayer)
    app.component('Landing', Landing)
  },

  layouts: {
    Layout: h(Layout, null, {
      // 将 PageContextMenu 添加到 doc-title-after 插槽，即文章标题的右侧
      'doc-title-after': () => h(PageContextMenu),
    }),
  },
})
