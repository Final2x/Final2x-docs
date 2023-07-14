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
        { text: 'Start', link: '/pages/guide/build' }
      ]
    },
    {
      text: 'Build',
      items: [
        { text: 'Introduction', link: '/pages/build/' },
        { text: 'Start', link: '/pages/build/build' }
      ]
    }
  ]
}
