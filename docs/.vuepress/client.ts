import { defineClientConfig } from "vuepress/client";
import RepoCard from "vuepress-theme-plume/features/RepoCard.vue";
import NpmBadge from "vuepress-theme-plume/features/NpmBadge.vue";
import NpmBadgeGroup from "vuepress-theme-plume/features/NpmBadgeGroup.vue";

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
});
