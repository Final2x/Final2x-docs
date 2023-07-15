<script lang="ts" setup>
import { ref } from 'vue'
import { HomeOutlined, SettingOutlined } from '@vicons/antd'

const changeRoute = ref(false)
</script>

<template>
  <div>
    <n-space>
      <n-button style="font-size: 36px" text @click="changeRoute = !changeRoute">
        <n-icon>
          <div v-if="changeRoute === false">
            <setting-outlined />
          </div>
          <div v-else>
            <home-outlined />
          </div>
        </n-icon>
      </n-button>
    </n-space>
  </div>
</template>

<style lang="scss" scoped />
