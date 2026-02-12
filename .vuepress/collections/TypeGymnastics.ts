import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  title: 'TS类型体操',
  dir: 'TypeGymnastics',
  linkPrefix: '/TypeGymnastics/',
  sidebar: [
    '',
    {
      prefix: 'warm',
      text: '热身',
      collapsed: false,
      items: 'auto',
    },
    {
      prefix: 'easy',
      text: '简单',
      collapsed: true,
      items: 'auto',
    },
    {
      prefix: 'medium',
      text: '中等',
      collapsed: true,
      items: 'auto',
    },
    {
      prefix: 'hard',
      text: '困难',
      collapsed: true,
      items: 'auto',
    },
    {
      prefix: 'extreme',
      text: '地狱',
      collapsed: true,
      items: 'auto',
    },
  ],
})
