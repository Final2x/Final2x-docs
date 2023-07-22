import { defineAsyncComponent } from 'vue'
import Theme from 'vitepress/theme'
import './style/var.css'
import { install } from 'naive-ui'

import TranslationButton from '../../components/TranslationButton.vue'
import DarkModeButton from '../../components/DarkModeButton.vue'
import NavigationButton from '../../components/NavigationButton.vue'
import ExternalLinkButton from '../../components/ExternalLinkButton.vue'
import UploadDraggerZone from '../../components/UploadDraggerZone.vue'
import MyProgress from '../../components/MyProgress.vue'
import PopoverButton from '../../components/PopoverButton.vue'
import ImageComparison from '../../components/ImageComparison.vue'

const ImgComparisonSlider = defineAsyncComponent(() =>
  import('@img-comparison-slider/vue').then(({ ImgComparisonSlider }) => ImgComparisonSlider)
)

export default {
  ...Theme,
  enhanceApp({ app }): void {
    install(app)
    app.component('ImgComparisonSlider', ImgComparisonSlider)

    app.component('TranslationButton', TranslationButton)
    app.component('DarkModeButton', DarkModeButton)
    app.component('NavigationButton', NavigationButton)
    app.component('ExternalLinkButton', ExternalLinkButton)
    app.component('UploadDraggerZone', UploadDraggerZone)
    app.component('MyProgress', MyProgress)
    app.component('PopoverButton', PopoverButton)
    app.component('ImageComparison', ImageComparison)
  }
}
