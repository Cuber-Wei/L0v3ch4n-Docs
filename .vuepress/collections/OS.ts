import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  title: 'OS笔记',
  dir: 'OS',
  linkPrefix: '/OS/',
  sidebar: [
    '',
    {
      prefix: 'ArchLinux',
      text: 'ArchLinux',
      collapsed: false,
      items: 'auto',
    },
  ],
})
