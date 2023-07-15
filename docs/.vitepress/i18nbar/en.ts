import { DefaultTheme } from 'vitepress'

export const ENnav: DefaultTheme.NavItem[] = [
  { text: 'Guide', link: '/pages/guide/' },
  { text: 'Build', link: '/pages/build/' }
]

export const ENsidebar: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Guide',
      items: [
        { text: 'Introduction', link: '/pages/guide/' },
        { text: 'Install', link: '/pages/guide/install' },
        { text: 'Usage', link: '/pages/guide/use' }
      ]
    },
    {
      text: 'Build',
      items: [
        { text: 'Start', link: '/pages/build/' },
        { text: 'xx-ncnn-py', link: '/pages/build/xx-ncnn-py' },
        { text: 'Final2x-core', link: '/pages/build/final2x-core' },
        { text: 'Final2x', link: '/pages/build/final2x' }
      ]
    }
  ]
}
