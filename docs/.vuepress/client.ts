import { h } from 'vue'
import { defineClientConfig } from "vuepress/client";
import { Layout } from 'vuepress-theme-plume/client'
import RepoCard from "vuepress-theme-plume/features/RepoCard.vue";
import NpmBadge from "vuepress-theme-plume/features/NpmBadge.vue";
import NpmBadgeGroup from "vuepress-theme-plume/features/NpmBadgeGroup.vue";
import PageContextMenu from 'vuepress-theme-plume/features/PageContextMenu.vue'

import "./theme/styles/custom.css";
import CloudMusicPlayer from "./theme/components/CloudMusicPlayer.vue";
import Landing from "./theme/components/Landing.vue";

export default defineClientConfig({
    enhance({ app }) {
        app.component("RepoCard", RepoCard);
        app.component("NpmBadge", NpmBadge);
        app.component("NpmBadgeGroup", NpmBadgeGroup);
        app.component("CloudMusicPlayer", CloudMusicPlayer);
        app.component("Landing", Landing);
    },

    layouts: {
        Layout: h(Layout, null, {
            // 将 PageContextMenu 添加到 doc-title-after 插槽，即文章标题的右侧
            'doc-title-after': () => h(PageContextMenu),
        }),
    },
});
