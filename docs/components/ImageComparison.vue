<script lang="ts" setup>
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
</script>

<template>
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img
      slot="first"
      style="width: 100%"
      src="https://s2.loli.net/2023/07/17/wzx6SHXMArWuhe5.png"
     />
    <img
      slot="second"
      style="width: 100%"
      src="https://s2.loli.net/2023/07/17/ntaredxAsSVpMbo.png"
    />
    <!-- eslint-enable -->
  </ImgComparisonSlider>
</template>
