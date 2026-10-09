import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  title: '项目开发笔记',
  dir: 'project',
  linkPrefix: '/project/',
  sidebar: [
    '',
    {
      prefix: 'OJ',
      text: 'Online Judge',
      collapsed: false,
      items: 'auto',
    },
  ],
})
