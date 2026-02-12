import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { fs, getDirname, path, tinyglobby } from 'vuepress/utils'
import theme from './.vuepress/theme'

const __dirname = getDirname(import.meta.url)
const resolve = (...dirs: string[]) => path.resolve(__dirname, ...dirs)

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  dest: 'docs',
  title: 'L0v3ch4n',
  description: 'L0v3ch4n&#x27;s learning records.',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'L0v3ch4n',
      description: 'L0v3ch4n&#x27;s learning records.',
    },
  },
  public: resolve('public'),
  temp: resolve('.vuepress/.temp'),
  cache: resolve('.vuepress/.cache'),
  shouldPrefetch: false,
  head: [['link', { rel: 'icon', href: '/images/L-logo.png' }]],

  bundler: viteBundler(),
  theme,
  define: {
    __VUEPRESS_GAODE_MAP_KEY__: process.env.VUEPRESS_GAODE_MAP_KEY,
    // debug hydration mismatch
    // __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
  },
  onGenerated: async (app) => {
    const names = ['Ma-Shan-Zheng', 'Fleur-De-Leah']
    const dest = app.dir.dest('assets')
    const indexPath = app.dir.dest('index.html')
    const assets = tinyglobby.globSync('*.ttf', { cwd: dest }) || []
    const fonts = assets.filter(asset => names.some(name => asset.includes(name)))
    let links = ''
    fonts.forEach((font) => {
      links += `<link rel="preload" href="/assets/${font}" as="font" type="font/ttf" crossorigin="anonymous">`
    })
    const content = fs.readFileSync(indexPath, 'utf-8')
    fs.writeFileSync(indexPath, content.replace('<head>', `<head>${links}`))

    await fs.writeFile(app.dir.dest('robots.txt'), `User-agent: *
Allow: /
`)
  },
})
