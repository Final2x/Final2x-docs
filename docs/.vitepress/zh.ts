import { LocaleSpecificConfig, DefaultTheme } from 'vitepress'
import { ZHnav, ZHsidebar } from './i18nbar'
import { GithubLink, FooterMessage, FooterCopyRight } from './meta'

export const ZHconfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    logo: {
      light: '/logo.png',
      dark: '/logo-dark.png'
    },
    siteTitle: 'Final2x',
    outline: 3,
    socialLinks: [{ icon: 'github', link: GithubLink }],
    footer: {
      message: FooterMessage,
      copyright: FooterCopyRight
    },
    nav: ZHnav,
    sidebar: ZHsidebar
  }
}
