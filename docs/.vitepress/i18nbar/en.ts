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
        { text: 'Use', link: '/pages/guide/use' }
      ]
    },
    {
      text: 'Build',
      items: [
        { text: 'Start', link: '/pages/build/' },
        { text: '1', link: '/pages/build/build' }
      ]
    }
  ]
}
