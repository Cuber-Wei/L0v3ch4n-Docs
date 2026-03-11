import { defineCollection } from 'vuepress-theme-plume'

export default defineCollection({
  type: 'doc',
  title: '语言学习',
  dir: 'language',
  linkPrefix: '/language/',
  sidebar: [
    '',
    {
      prefix: 'Python',
      text: 'Python',
      collapsed: true,
      items: 'auto',
    },
    {
      prefix: 'Python进阶：跟着CoreDev学Python',
      text: '跟着CoreDev学Python',
      collapsed: true,
      items: 'auto',
    },
    // {
    //     prefix: 'Java',
    //     text: 'Java',
    //     collapsed: true,
    //     items: 'auto'
    // },
    {
      prefix: 'JavaScript',
      text: 'JavaScript',
      collapsed: true,
      items: 'auto',
    },
    {
      prefix: 'Go',
      text: 'Go',
      collapsed: true,
      items: 'auto',
    },
    {
      prefix: 'Shell',
      text: 'Shell',
      collapsed: true,
      items: [
        '基础语法',
        '常见命令',
        '流程控制',
        'Shell函数',
        '输入输出重定向',
        '文件包含',
      ],
    },
  ],
})
