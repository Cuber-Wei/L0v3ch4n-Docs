import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  title: 'LCR 50题',
  dir: 'LCR',
  sidebar: [
    '',
    {
      prefix: 'questions',
      text: 'LCR',
      collapsed: false,
      items: 'auto',
    },
  ],
})
