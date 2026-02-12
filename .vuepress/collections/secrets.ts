import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  title: '加密文章',
  dir: 'secrets',
  linkPrefix: '/secrets/',
  sidebar: [
    '',
    {
      prefix: 'ShortArticle',
      text: '小短文',
      collapsed: false,
      items: 'auto',
    },
  ],
})
