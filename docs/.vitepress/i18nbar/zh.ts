import { DefaultTheme } from 'vitepress'

export const ZHnav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/zh/pages/guide/' },
  { text: '构建', link: '/zh/pages/build/' }
]

export const ZHsidebar: DefaultTheme.Sidebar = {
  '/zh/': [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/zh/pages/guide/' },
        { text: '开始', link: '/zh/pages/guide/build' }
      ]
    },
    {
      text: '构建',
      items: [
        { text: '简介', link: '/zh/pages/build/' },
        { text: '开始', link: '/zh/pages/build/build' }
      ]
    }
  ]
}
