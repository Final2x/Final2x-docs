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
        { text: '安装', link: '/zh/pages/guide/install' },
        { text: '使用', link: '/zh/pages/guide/use' }
      ]
    },
    {
      text: '构建指南',
      items: [
        { text: '前言', link: '/zh/pages/build/' },
        { text: 'xx-ncnn-py', link: '/zh/pages/build/xx-ncnn-py' },
        { text: 'Final2x-core', link: '/zh/pages/build/final2x-core' }
      ]
    }
  ]
}
