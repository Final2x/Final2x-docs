<script lang="ts" setup>
import { ref } from 'vue'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'

const DarkMode = ref(false)
</script>

<template>
  <div>
    <n-space>
      <n-button style="font-size: 36px" text @click="DarkMode = !DarkMode">
        <n-icon>
          <div v-if="DarkMode === false">
            <moon-outline />
          </div>
          <div v-else>
            <sunny-outline />
          </div>
        </n-icon>
      </n-button>
    </n-space>
  </div>
</template>

<style lang="scss" scoped />
