import Theme from 'vitepress/theme'
import './style/var.css'
import {
  // create naive ui
  create,
  // component
  NButton,
  NIcon,
  NSpace,
  NGradientText
} from 'naive-ui'

import TranslationButton from '../../components/TranslationButton.vue'
import DarkModeButton from '../../components/DarkModeButton.vue'
import NavigationButton from '../../components/NavigationButton.vue'
import ExternalLinkButton from '../../components/ExternalLinkButton.vue'

const naive = create({
  components: [NButton, NIcon, NSpace, NGradientText]
})

export default {
  ...Theme,
  enhanceApp({ app }): void {
    app.use(naive)

    app.component('TranslationButton', TranslationButton)
    app.component('DarkModeButton', DarkModeButton)
    app.component('NavigationButton', NavigationButton)
    app.component('ExternalLinkButton', ExternalLinkButton)
  }
}
