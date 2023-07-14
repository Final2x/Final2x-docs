import { DefaultTheme } from 'vitepress'

export const ZHnav: DefaultTheme.NavItem[] = [
  { text: '快速开始', link: '/zh/pages/guide/' },
  { text: '构建指南', link: '/zh/pages/build/' }
]

export const ZHsidebar: DefaultTheme.Sidebar = {
  '/zh/': [
    {
      text: '快速开始',
      items: [
        { text: '简介', link: '/zh/pages/guide/' },
        { text: '安装', link: '/zh/pages/guide/install' }
      ]
    },
    {
      text: '构建指南',
      items: [
        { text: '简介', link: '/zh/pages/build/' },
        { text: '开始', link: '/zh/pages/build/build' }
      ]
    }
  ]
}
