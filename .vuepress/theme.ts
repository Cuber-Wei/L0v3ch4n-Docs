import type { Theme } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default plumeTheme({
  // 项目配置
  hostname: 'https://blog.l0v3ch4n.top/',
  docsRepo: 'https://github.com/Cuber-Wei/L0v3ch4n-Docs',
  docsDir: 'src',
  // 代码块相关
  codeHighlighter: {
    twoslash: true,
  },
  copyCode: {
    showInMobile: true,
  },
  // LLM文本
  llmstxt: {
    llmsTxtTemplateGetter: {
      details: '',
      description: 'L0v3ch4n的个人博客，知识库',
    },
  },
  // MarkDown增强
  markdown: {
    // 文本相关
    abbr: true, // 缩略语
    annotation: true, // 公告
    icons: true, // 图标
    // 图表相关
    chartjs: true,
    mermaid: true,
    echarts: true,
    markmap: true,
    plantuml: true,
    pdf: true,
    plot: true,
    image: {
      figure: true,
      lazyload: true,
      mark: true,
      size: true,
    },
    // 音视频相关
    bilibili: true,
    youtube: true,
    audioReader: true,
    // 扩展能力相关
    collapse: true, // 折叠
    timeline: true, // 时间线
    field: true,
    chat: true, // 对话
    qrcode: true, // 二维码
    // 代码演示相关
    codeTree: true,
    caniuse: true,
    demo: true,
    codepen: true,
    codeSandbox: true,
    jsfiddle: true,
    npmTo: {
      tabs: ['pnpm', 'yarn', 'npm'], // 代码块组默认显示顺序
    },
    repl: {
      rust: true,
      go: true,
      python: true,
    },
  },
  // 评论区
  comment: {
    provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    comment: true,
    repo: 'Cuber-Wei/Blog-Comments',
    repoId: 'R_kgDOROTkSA',
    category: 'General',
    categoryId: 'DIC_kwDOROTkSM4C2QXG',
    mapping: 'pathname',
    reactionsEnabled: true,
    inputPosition: 'top',
    lazyLoading: true,
  },
  // 贡献者
  contributors: {
    mode: 'block',
    info: [
      {
        username: 'Cuber-Wei', // github username
        alias: ['L0v3ch4n', 'lovechan'], // 别名，本地 git 配置中的用户名
      },
    ],
  },
  // 加密设置
  encrypt: {
    rules: {
      // 可以是 md 文件的相对路径，对该文件加密
      '/secrets/ShortArticle/ForLingeFirstLive/': '0817',
    },
  },
}) as Theme
