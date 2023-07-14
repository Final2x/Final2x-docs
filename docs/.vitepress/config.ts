import { defineConfig } from 'vitepress'
import { ENconfig } from './en'
import { ZHconfig } from './zh'

export default defineConfig({
  title: 'Final2x-docs',
  description: 'docs for Final2x',
  lastUpdated: true,

  lang: 'en',
  base: '/',

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },

  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      ...ENconfig
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh/',
      ...ZHconfig
    }
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
